#!/usr/bin/env python3
"""
update_data.py
==============
Reads all planogram PDFs in the current directory and regenerates data.js.

Usage:
    python update_data.py

Requirements:
    pip install pdfplumber

How it works:
  - AR_*.pdf   : extracts from the per-bay PLU list pages (right-hand table).
                 Double Face Product slots are detected automatically from the
                 visual diagram on page 1 and inserted as repeats.
  - FSDU_*.pdf : combines descriptions (page 1) with PLU codes (page 2).

The EANList at the bottom of data.js is read from the existing file and
preserved as-is — it is never touched by this script.

EANList entry format must be:  "EAN_NUMBER, PLU_CODE"  (EAN first)
e.g.  "5017416847568, SECUREVPN24"
This is required by af2.html's barcode scanner lookup.
"""

import os
import re
import sys
from collections import defaultdict

try:
    import pdfplumber
except ImportError:
    sys.exit("pdfplumber is not installed.  Run:  pip install pdfplumber")

# ─────────────────────────────────────────────────────────────────────────────
# CONFIGURATION
# Edit this dict to control display name and grid dimensions for each PDF.
# Key   = PDF filename stem (no extension, case-sensitive)
# Value = (display_name, bays, width, height)
#           display_name : label shown in af2.html
#           bays         : number of bay sections
#           width        : columns per bay
#           height       : rows per bay
# ─────────────────────────────────────────────────────────────────────────────
PDF_CONFIG = {
    "AR_Mega_Range_Side_A": ("Outside", 3, 6, 5),
    "AR_Mega_Range_Side_B": ("Inside",  3, 6, 5),
    "FSDU_B_SWAS":          ("Samsung", 2, 4, 4),
    "FSDU_ONE_SWAS":        ("Zag",     2, 3, 4),
}

# Order in which the dataArrays are written (must match variable names in af2.html)
PDF_ORDER = [
    "AR_Mega_Range_Side_A",
    "AR_Mega_Range_Side_B",
    "FSDU_B_SWAS",
    "FSDU_ONE_SWAS",
]

# ─────────────────────────────────────────────────────────────────────────────
# HELPERS
# ─────────────────────────────────────────────────────────────────────────────

def _build_rows(chars, x_min=0, y_bucket=2):
    """Group PDF chars into rows (dict: bucketed_y → sorted char list).
    Only chars with x0 >= x_min are included."""
    rows = defaultdict(list)
    for c in chars:
        if c["x0"] >= x_min:
            rows[round(c["top"] / y_bucket) * y_bucket].append(c)
    return rows


def _chars_to_words(row_chars, x_gap=10):
    """Reconstruct word tokens from a sorted list of chars, splitting on x-gap."""
    if not row_chars:
        return []
    row_chars = sorted(row_chars, key=lambda c: c["x0"])
    words = []
    cur = row_chars[0]["text"]
    lx1 = row_chars[0]["x1"]
    for c in row_chars[1:]:
        if c["x0"] - lx1 > x_gap:
            words.append(cur)
            cur = c["text"]
        else:
            cur += c["text"]
        lx1 = max(lx1, c["x1"])
    words.append(cur)
    return words


def _parse_plu_line(line):
    """
    Parse a PLU table row.
    Expected formats (any number of optional middle columns):
        loc [New] [ESEL] [SKU] description PLU £price
    Returns (loc, plu, description) or None if not a valid row.
    """
    # Fix "27New" → "27 New" artifacts from char merging
    line = re.sub(r"^(\d+)(New)\b", r"\1 \2 ", line)

    if not re.search(r"£\d+\.\d+$", line):
        return None

    tokens = line.split()
    if not tokens or not tokens[0].isdigit():
        return None

    loc = int(tokens[0])
    price_tok = tokens[-1]   # £xx.xx
    plu_tok   = tokens[-2]   # PLU code

    # Sanity: PLU should be all-caps alphanumeric and reasonably long
    if not re.match(r"^[A-Z][A-Z0-9]{4,}$", plu_tok):
        return None

    # Description: skip loc, any digits (ESEL/SKU), "New", "Checked"; keep text words
    skip = {tokens[0], "New", "Checked", price_tok, plu_tok}
    desc_words = [
        w for w in tokens[1:-2]
        if w not in skip and not w.isdigit()
    ]
    description = " ".join(desc_words)

    return loc, plu_tok, description


# ─────────────────────────────────────────────────────────────────────────────
# AR-TYPE EXTRACTION
# ─────────────────────────────────────────────────────────────────────────────

def _find_doublefaced_locs(pdf_path):
    """
    Scan the visual diagram (page 1) for 'Double Face Product' labels.
    Returns a sorted list of location numbers that should be followed by
    a repeated slot.

    Strategy:
      1. Find x-positions of the word 'Double' on page 1.
      2. Collect all 'N :' item-label segments on the page.
      3. For each 'Double' at (dx, dy): the item whose label has the
         highest x < dx within a ±40 px y-band is the one being doubled.
    """
    with pdfplumber.open(pdf_path) as pdf:
        page1 = pdf.pages[0]
        chars = page1.chars

        rows = defaultdict(list)
        for c in chars:
            rows[round(c["top"] / 3) * 3].append(c)

        all_segs = []  # (x, y, text)
        for y, rch in rows.items():
            wds = _chars_to_words(rch, x_gap=8)
            # Reconstruct with x position per word
            rch_s = sorted(rch, key=lambda c: c["x0"])
            cur_x = rch_s[0]["x0"]
            lx1   = rch_s[0]["x1"]
            cur   = rch_s[0]["text"]
            for c in rch_s[1:]:
                if c["x0"] - lx1 > 8:
                    all_segs.append((cur_x, y, cur))
                    cur   = c["text"]
                    cur_x = c["x0"]
                else:
                    cur += c["text"]
                lx1 = max(lx1, c["x1"])
            all_segs.append((cur_x, y, cur))

        double_positions = [(x, y) for x, y, t in all_segs if re.match(r"^Duplic|^Double", t.strip())]

        item_labels = [
            (x, y, int(m.group(1)))
            for x, y, t in all_segs
            for m in [re.match(r"^(\d{1,2}) :$", t.strip())]
            if m
        ]

        result = []
        for dx, dy in double_positions:
            candidates = [
                (x, n)
                for x, y, n in item_labels
                if x < dx and abs(y - dy) < 40
            ]
            if candidates:
                result.append(max(candidates, key=lambda c: c[0])[1])

        return sorted(set(result))


def extract_ar(pdf_path):
    """
    Extract ordered (plu, description) slots from an AR-type planogram PDF.

    The PLU list pages (2 onwards) contain the authoritative data.
    Items that already appear twice in the PLU list (same location number)
    are kept as-is (e.g. items marked double-faced in bay 3).
    Items whose location is in the double_face_after list get an extra
    repeat slot inserted immediately after their first occurrence.

    Returns list of (plu, description) in grid slot order.
    """
    double_face_after = set(_find_doublefaced_locs(pdf_path))

    raw = []  # [(loc, plu, desc)] in document order
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            rows = _build_rows(page.chars, x_min=290, y_bucket=2)
            for y in sorted(rows):
                wds = _chars_to_words(rows[y], x_gap=10)
                line = " ".join(wds)
                parsed = _parse_plu_line(line)
                if parsed:
                    raw.append(parsed)

    # Build final slot list, inserting DF repeats
    slots = []
    seen_locs = set()

    for loc, plu, desc in raw:
        if loc not in seen_locs and loc in double_face_after:
            # Insert item + its double-face repeat
            slots.append((plu, desc))
            slots.append((plu, desc))
            seen_locs.add(loc)
        elif loc in seen_locs and loc in double_face_after:
            # This is the PLU-list duplicate of a DF item — skip,
            # the repeat was already inserted above
            pass
        else:
            slots.append((plu, desc))
            seen_locs.add(loc)

    return slots


# ─────────────────────────────────────────────────────────────────────────────
# FSDU-TYPE EXTRACTION
# ─────────────────────────────────────────────────────────────────────────────

def extract_fsdu(pdf_path):
    """
    Extract ordered (plu, description) slots from an FSDU-type planogram PDF.

    Page 1 : product list table with descriptions (x >= 310 to avoid visual noise)
             Format: loc  Description text here  £price   (no PLU column)
    Page 2 : PLU verification list — format: loc [New] PLU £price
             Items 1-23 are in the left table, items 24+ overflow to the right
             alongside the visual thumbnail.  A regex scan for the rightmost
             'loc PLU £price' match on each line handles both zones cleanly.

    Returns list of (plu, description) in location-number order.
    """
    with pdfplumber.open(pdf_path) as pdf:
        # ── Page 1: descriptions ──────────────────────────────────────────
        # Format on page 1: "loc  Description words  £price"  (no PLU code)
        desc_map = {}
        rows1 = _build_rows(pdf.pages[0].chars, x_min=310, y_bucket=2)
        for y in sorted(rows1):
            wds  = _chars_to_words(rows1[y], x_gap=8)
            line = " ".join(wds)
            # Must start with a number and end with a price
            if not re.match(r"^\d+\s", line) or not re.search(r"£\d+\.\d+$", line):
                continue
            tokens = line.split()
            if not tokens[0].isdigit():
                continue
            loc = int(tokens[0])
            # Description = everything between loc number and price token
            desc_tokens = tokens[1:-1]
            desc = " ".join(desc_tokens)
            if loc not in desc_map and desc:
                desc_map[loc] = desc

        # ── Page 2: PLU codes ────────────────────────────────────────────
        plu_map = {}
        rows2 = _build_rows(pdf.pages[1].chars, x_min=0, y_bucket=2)
        for y in sorted(rows2):
            wds  = _chars_to_words(rows2[y], x_gap=8)
            line = " ".join(wds)
            line = re.sub(r"(\d+)(New)\b", r"\1 \2", line)

            # Find the rightmost 'loc [New] PLU £price' pattern on the line.
            # This handles rows where visual thumbnail labels precede the table entry.
            matches = list(re.finditer(
                r"(?<!\d)(\d{1,2})\s+(?:New\s+)?([A-Z][A-Z0-9]{5,})\s+(£\d+\.\d+)",
                line
            ))
            if matches:
                m = matches[-1]
                loc = int(m.group(1))
                plu = m.group(2)
                if loc not in plu_map:
                    plu_map[loc] = plu

    # Detect duplicate-adjacent slots from the visual diagram on page 1
    double_face_after = set(_find_doublefaced_locs(pdf_path))

    # Combine: PLU order is authoritative, description fills in from page 1
    # Insert a repeated slot immediately after any double-face location
    slots = []
    for loc in sorted(plu_map):
        plu  = plu_map[loc]
        desc = desc_map.get(loc, plu)   # fall back to PLU code if no description found
        slots.append((plu, desc))
        if loc in double_face_after:
            slots.append((plu, desc))   # duplicate adjacent slot

    return slots


# ─────────────────────────────────────────────────────────────────────────────
# JAVASCRIPT WRITER
# ─────────────────────────────────────────────────────────────────────────────

def build_dataarray(var_name, display_name, bays, width, height, slots):
    """
    Build a JavaScript dataArray variable string.

    First entry:  "display_name, bays, width, height"
    Subsequent:   "slot_num, PLU, description"
    """
    lines = []
    lines.append(f'var {var_name} = [')
    lines.append(f'  "{display_name}, {bays}, {width}, {height}",')

    for i, (plu, desc) in enumerate(slots, 1):
        # Escape any double quotes that snuck into the description
        safe_desc = desc.replace('"', "'")
        lines.append(f'  "{i}, {plu}, {safe_desc}",')

    # Remove trailing comma from last item
    lines[-1] = lines[-1].rstrip(",")
    lines.append("];")
    return "\n".join(lines)


def build_ean_list_from_txt(txt_path):
    """
    Build an EANList JS block from ean.txt exported from the intranet lookup tool.

    Expected tab-separated columns (with header row):
        Short Code  PLU  Description  SKU  EAN

    Output entry format:  "EAN_NUMBER, PLU_CODE"  (EAN first)
    This matches af2.html:
      EANList.find(item => item.startsWith(scannedBarcode))  ← EAN must be first
      item.split(', ')[1]  →  PLU code                       ← PLU must be second

    Skips rows with missing or non-numeric EAN values.
    Returns the complete JS var string, or None if the file can't be read.
    """
    try:
        with open(txt_path, "r", encoding="utf-8-sig") as f:  # utf-8-sig strips BOM
            lines = f.readlines()
    except FileNotFoundError:
        return None

    # Find the header row (contains both 'plu' and 'ean')
    header = None
    header_idx = 0
    for i, line in enumerate(lines):
        parts = [p.strip().lower() for p in line.rstrip("\n").split("\t")]
        if "plu" in parts and "ean" in parts:
            header = parts
            header_idx = i
            break

    if header is None:
        print("  ⚠  ean.txt: could not find PLU/EAN header row.")
        return None

    plu_col = header.index("plu")
    ean_col = header.index("ean")

    entries = []
    seen = set()
    skipped = 0
    for line in lines[header_idx + 1:]:
        parts = line.rstrip("\n").split("\t")
        if len(parts) <= max(plu_col, ean_col):
            continue
        plu = parts[plu_col].strip()
        ean = parts[ean_col].strip()
        if not plu or not ean or not re.match(r"^\d+$", ean):
            skipped += 1
            continue
        key = (ean, plu)
        if key not in seen:
            entries.append(f'"{ean}, {plu}"')
            seen.add(key)

    if not entries:
        print("  ⚠  ean.txt: no valid EAN/PLU rows found.")
        return None

    if skipped:
        print(f"  ⚠  ean.txt: skipped {skipped} row(s) with missing/invalid EAN.")

    js_lines = ["var EANList = ["]
    js_lines += [e + "," for e in entries[:-1]]
    js_lines += [entries[-1]]
    js_lines += ["];"]
    return "\n".join(js_lines)


def read_ean_list_from_js(existing_js_path):
    """
    Fallback: read the EANList block verbatim from the existing data.js.
    Used when ean.txt is not present.
    """
    try:
        with open(existing_js_path, "r", encoding="utf-8") as f:
            content = f.read()
        m = re.search(r"(var EANList\s*=\s*\[.*?\];)", content, re.DOTALL)
        if m:
            return m.group(1)
    except FileNotFoundError:
        pass
    return None


# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    js_path    = os.path.join(script_dir, "data.js")
    ean_txt    = os.path.join(script_dir, "ean.txt")

    # EANList: prefer ean.txt (fresh from intranet), fall back to existing data.js
    ean_block = build_ean_list_from_txt(ean_txt)
    if ean_block:
        entry_count = ean_block.count('",') + 1
        print(f"✓ EANList built from ean.txt  ({entry_count} entries).")
    else:
        ean_block = read_ean_list_from_js(js_path)
        if ean_block:
            print("✓ ean.txt not found — EANList preserved from existing data.js.")
        else:
            print("⚠  No EANList source found; it will be omitted from output.")

    js_blocks = []

    for i, stem in enumerate(PDF_ORDER, 1):
        var_name = f"dataArray{i}"
        pdf_file = os.path.join(script_dir, stem + ".pdf")

        if not os.path.exists(pdf_file):
            print(f"⚠  {stem}.pdf not found — skipping {var_name}.")
            continue

        if stem not in PDF_CONFIG:
            print(f"⚠  {stem} has no entry in PDF_CONFIG — skipping.")
            continue

        display_name, bays, width, height = PDF_CONFIG[stem]
        expected_slots = bays * width * height

        print(f"\nProcessing {stem}.pdf  →  {var_name}  ({display_name})")

        try:
            if stem.startswith("AR_"):
                slots = extract_ar(pdf_file)
            else:
                slots = extract_fsdu(pdf_file)
        except Exception as e:
            print(f"  ✗ Extraction failed: {e}")
            continue

        print(f"  Extracted {len(slots)} slots  (grid expects {expected_slots})")

        if len(slots) > expected_slots:
            print(f"  ⚠  More slots than grid cells — truncating to {expected_slots}.")
            slots = slots[:expected_slots]
        elif len(slots) < expected_slots:
            shortfall = expected_slots - len(slots)
            print(f"  ⚠  {shortfall} slot(s) short of grid — empty cells will appear.")

        # Print first few and last few for quick sanity check
        for j, (plu, desc) in enumerate(slots[:3], 1):
            print(f"    slot {j:3d}: {plu}  —  {desc}")
        if len(slots) > 6:
            print(f"    ...")
        for j, (plu, desc) in enumerate(slots[-3:], len(slots) - 2):
            print(f"    slot {j:3d}: {plu}  —  {desc}")

        block = build_dataarray(var_name, display_name, bays, width, height, slots)
        js_blocks.append(block)

    if not js_blocks:
        print("\n✗ No data extracted.  data.js has not been changed.")
        return

    # Assemble final data.js
    output_parts = js_blocks[:]
    if ean_block:
        output_parts.append(ean_block)

    output = "\n\n".join(output_parts) + "\n"

    with open(js_path, "w", encoding="utf-8", newline="\r\n") as f:
        f.write(output)

    print(f"\n✓ data.js written successfully  ({len(output):,} bytes).")


if __name__ == "__main__":
    main()