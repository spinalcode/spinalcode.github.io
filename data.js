var dataArray1 = [
  "Outside, 3, 6, 5",
  "1, ZAGIPH16PMLUXSNPBLA, Zagg iPhone Pro Max Lux Mag-Safe Black",
  "2, ZAGIPH16PMMILSNPIRI, Zagg iPhone Pro Max Mlian Iridescent",
  "3, ZAGIPH16PMSCSNPBLA, Zagg iPhone Pro Max Santa Cruz",
  "4, ZAGIPH16PMCPSNPCLR, Zagg CP Snap iPhone PM Case Clear",
  "5, ZAGIPH16PLUXSNPBLA, Zagg iPhone Pro Lux Mag-Safe Black",
  "6, ZAGIPH16PMILSNPIRI, Zagg iPhone Pro Milan Iridescent",
  "7, ZAGIPH16PSCSNPBLA, Zagg iPhone Pro Santa Cruz",
  "8, ZAGIPH16PLSCSNPBLA, Zagg iPhone Plus Santa Cruz",
  "9, ZAGIPH16PLLUXSNPBLA, Zagg iPhone Plus Lux Mag-Safe Black",
  "10, ZAGIPH16LUXSNPBLA, Zagg iPhone Lux Mag-Safe Black",
  "11, ZAGIPH16MILSNPIRI, Zagg iPhone Milan Iridescent",
  "12, ZAGIPH16SCSNPBLA, Zagg iPhone Santa Cruz MagSafe",
  "13, ZAGIPH15CPCSECLR, Zagg Crystal Palace Graphene Case iPhone 15/14/13",
  "14, ZAGIPH15MANCSEBLA, Zagg Manhatten iPhone Manhatten Case Black",
  "15, ZAGIPH16ELUXBUN, Zagg Bundle iPhone 16E/14/13",
  "16, ZAGIPH16ECPCSECLR, Zagg CP Case iPhone 16E/15/14/13",
  "17, ZAGIPH16ESCCSEBLA, Zagg SC Case iPhone 16E/15/14/13",
  "18, ZAGSAMS25UMILBLU, Zagg S25 U Milan Case - Blue",
  "19, ZAGSAMS25UCPCSECLR, Zagg S25 U CP Case",
  "20, ZAGSAMS25ULUXBUN, Zagg S25 Ultra Luxe Bundle",
  "21, ZAGSAMS25ULUXBLA, Zagg S25 U Luxe Case - Black",
  "22, ZAGSAMS25ULUXBLU, Zagg S25 U Luxe Case - Blue",
  "23, ZAGSAMS25PLUXBUN, Zagg S25+ Luxe Bundle",
  "24, ZAGSAMS25MILBLU, Zagg S25 Milan Case - Blue",
  "25, ZAGSAMS25CPCSECLR, Zagg S25 Crystal Palace Case",
  "26, ZAGSAMS25LUXBUN, Zagg S25 Luxe Bundle",
  "27, ZAGSAMS25LUXBLA, Zagg S25 Luxe Case - Black",
  "28, ZAGSAMS25LUXBLU, Zagg S25 Luxe Case - Blue",
  "29, ZAGSAMS24LUXBUN, Zagg S24 Luxe Bundle",
  "30, ZAGSAMS24FECPCSECLR, Zagg S24 FE Crystal Palace Case - Clear",
  "31, ZAGSAMS24FELUXBUN, Zagg S24 FE Luxe Bundle",
  "32, ZAGSAMS24FELUXBLA, Zagg S24 FE Luxe Case - Black",
  "33, ZAGSAMA56LUXBUN, New Zagg A56 Luxe Bundle",
  "34, ZAGSAMA36LUXCSEBLA, New Zagg A36 Luxe Case - Black",
  "35, ZAGSAMA26LUXBUN, New Zagg A26 Luxe Bundle",
  "36, ZAGSAMA16LUXCSEBLA, Zagg A16 Luxe Case - Black",
  "37, DEFIPH16PMFOLIOBLA, Defence iPhone PM Folio Case Black",
  "38, DEFIPH16PMCSECLR, Defence iPhone Pro Max Case Clear",
  "39, DEFIPH16PFOLIOBLA, Defence iPhone Pro Folio Case Black",
  "40, DEFIPH16PCSECLR, Defence iPhone Pro Case Clear",
  "41, DEFIPH16PLCSECLR, Defence iPhone Plus Case Clear",
  "42, DEFIPH16FOLIOBLA, Defence iPhone Folio Case Black",
  "43, DEFIPH16CSECLR, Defence iPhone Case Clear",
  "44, DEFIPH16EBUND, Defence Bundle iPhone 16E/14/13",
  "45, DEFIPH16ECSECLR, Defence Case iPhone 16E/15/14/13",
  "46, DEFIPH15FOLBLA, Defence Folio iPhone 15/14/13",
  "47, DEFIPH15CSECLR, Defence Clear Case iPhone 15/14/13",
  "48, DEFIPH12CLRCASECLR, Defence Case Apple iPhone 12/12 Pro screen Clear",
  "49, DEFSAMS25UFOLIOBLK, Defence S25 U Folio - Black",
  "50, DEFSAMS25FOLIOBLK, Defence S25 Folio - Black",
  "51, DEFSAMA56FOLIOBLA, New Defence A56 Folio Case",
  "52, DEFSAMA56BUN, New Defence A56 Bundle",
  "53, DEFSAMA56CSECLR, New Defence A56 Clear Case",
  "54, DEFSAMA36FOLIOBLA, New Defence A36 Folio Case",
  "55, DEFSAMA36BUN, New Defence A36 Bundle",
  "56, DEFSAMA36CSECLR, New Defence A36 Clear Case",
  "57, DEFSAMA26FOLIOBLA, New Defence A26 Folio Case",
  "58, DEFSAMA26BUN, New Defence A26 Bundle",
  "59, DEFSAMA26CSECLR, New Defence A26 Clear Case",
  "60, DEFSAMA16OLIOBLA, Defence A16 Folio Case",
  "61, DEFSAMA16CSECLR, Defence A16 Clear Case",
  "62, DEFSAMA16BUN, Defence A16 Bundle",
  "63, DEFSAMA56SP, New Defence A56 Screen Protector",
  "64, DEFSAMA36SP, New Defence A36 Screen Protector",
  "65, DEFSAMA26SP, New Defence A26 Screen Protector",
  "66, DEFSAMA16SP, Defence A16 Screen Protector",
  "67, DEFSAMA16SP, Defence A16 Screen Protector",
  "68, DBIPH16PMROSKILBLA, Roskilde MagSafe iPhone Pro Max Black",
  "69, DBIPH16PMICELNDCLR, Iceland D3O MagSafe iPhone Pro Max",
  "70, DBIPH16PROSKILDBLA, Roskilde MagSafe iPhone Pro Black",
  "71, DBIPH16PICELANDCLR, Iceland D3O MagSafe iPhone Pro Clear",
  "72, DBIPH16PLROSKILBLA, Roskilde MagSafe iPhone Plus Black",
  "73, DBIPH16PLICELNDCLR, Iceland D3O MagSafe iPhone Plus Clear",
  "74, DBIPH16ROSKILDBLA, Roskilde MagSafe Case iPhone Black",
  "75, DBIPH16ICELANDCLR, Iceland D3O MagSafe Case iPhone Clear",
  "76, INVIPH13GLSELITE, Invisible Shield Glass Elite for iPhone 12s/ 12s Pro",
  "77, INVSAMS25UXTRSP, InvisibleShield S25 U XTR4 SP",
  "78, INVSAMS25UGLSSP, InvisibleShield S25 U SP",
  "79, INVSAMS25UCAMSP, InvisibleShield S25 Ultra CP",
  "80, INVSAMS25XTRSP, InvisibleShield S25 XTR4 SP",
  "81, INVSAMS25GLSSP, InvisibleShield S25 SP",
  "82, INVSAMS25CAMSP, InvisibleShield S25 CP",
  "83, INVSAMS24FEGLSSP, InvisibleShield S24 FE Glass Elite Screen Protector",
  "84, CGIPH16PMGLSSP, Clearguard iPhone PM Screen Protector",
  "85, CGIPH16PLGLSSP, Clearguard iPhone PL Screen Protector",
  "86, CGIPH16PGLSSP, Clearguard iPhone P Screen Protector",
  "87, CGIPH16GLSSP, Clearguard iPhone Screen Protector",
  "88, CGIPH15PLGLSSP, ClearGuard Glass Screen Protector iPhone Plus",
  "89, CGIPH15GLSSP, ClearGuard Glass Screen Protector iPhone",
  "90, CGIPH13PGLSSCRNPRO, Clear Guard for iPhone 12s/12s Pro",
];

var dataArray2 = [
  "Inside, 3, 6, 5",
  "1, ZAGSAMS25EDGLUXBLA, New Zagg S25 Edge Luxe Case - Black",
  "2, ZAGSAMS25EDGCPCLR, New Zagg S25 Edge CP Case",
  "3, ZAGSAMS25EDGLUXBUN, New Zagg S25 Edge Luxe Bundle",
  "4, INVPIX9PFLDGLSELTSP, Zagg Pixel Pro Fold GlassScreen Protector",
  "5, ZAGPIX9PXLLUXBUN, Zagg Pixel Pro XL Luxe Bundle",
  "6, ZAGPIX9PXLCPCSECLR, Zagg Pixel Pro XL Crystal Palace Case",
  "7, ZAGPIX9PXLMILCSEIRI, Zagg Pixel Pro XL Milan Case",
  "8, INVPIX9PXLGLSELTSP, Zagg Pixel Pro XL Glass Screen Protector",
  "9, ZAGPIX9PXLLUXCSEBLA, Zagg Pixel Pro XL Luxe Case",
  "10, ZAGPIX9LUXBUN, Zagg Pixel Luxe Bundle",
  "11, ZAGPIX9CPCSECLR, Zagg Pixel Crystal Palace Case",
  "12, ZAGPIX9MILCSEIRI, Zagg Pixel Milan Case",
  "13, ZAGPIX9LUXCSEBLA, Zagg Pixel Luxe Case",
  "14, INVPIX9GLSELTSP, Zagg Pixel Glass Screen Protector",
  "15, ZAGGOOPIX9AMILGLI, Zagg Pixel 9A Milan Case - Glitter",
  "16, ZAGGOOPIX9ALUXBLA, Zagg Pixel 9A Luxe Case - Black",
  "17, ZAGGOOPIX9ALUXBUN, Zagg Pixel 9A Luxe Bundle",
  "18, ZAGGOOPIX8ALUXBUN, Zagg Pixel 8A Luxe Bundle",
  "19, DEFGOOPIX9ABUN, Defence Pixel 9A Bundle",
  "20, DEFGOOPIX9ASP, Defence Pixel 9A Screen Protector",
  "21, DEFGOOPIX8ABUNDLE, Defence Pixel 8A Bundle",
  "22, DEFGOOPIX8ACSECLR, Defence Pixel 8A Clear Case",
  "23, DEFGOOPIX8ASP, Defence Pixel 8A Screen Protector",
  "24, DBGOOPIX9ICECSE, Dbramante Iceland Pro Case Pixel",
  "25, DBGOOPIX9PICECSE, Dbramante Iceland Pro Case Pixel Pro XL",
  "26, DBGOOPIX8AGREENCLR, Dbramante Pixel Greenland 8A Clear",
  "27, GOOPIX9PXLCSEBLA, Google Pixel Pro XL Case - Black",
  "28, GOOPIX9PXLCSEWHI, Google Pixel Pro XL Case - White",
  "29, GOOPIX9CSEBLA, Google Pixel 9/Pro Case - Black",
  "30, GOOPIX9CSEPIN, Google Pixel 9/Pro Case - Pink",
  "31, GOOPIX9ACSEBLA, Pixel 9A Case - Black",
  "32, GOOPIX9ACSEWHI, Pixel 9A Case - White",
  "33, GOOPIX8ACSEBLA, Google Pixel 8A Obsidian",
  "34, GOOPIX8ACSEWHI, Google Pixel 8A Porcelain",
  "35, INVSAMS25EDGSP, New InvisibleShield S25 Edge Screen Protector",
  "36, INVGOOPIX9AGLSSP, InvisibleShield Pixel 9A Glass Screen Protector",
  "37, INVGOOPIX8ASP, InvisibleShield Pixel 8A Glass Screen Protector",
  "38, INT256GBMICROSDU3BLA, Integral 256GB Mirco SD Card",
  "39, INT128GBMICROSDU3BLA, Integral 128GB Mirco SD Card",
  "40, INT64GBMICROSDU3BLA, Integral 64GB Mirco SD Card",
  "41, INT32GBMICROSDU1BLA, Integral 32GB Mirco SD Card",
  "42, SBSDASHWLSCGRBLA, SBS In-Car holder with wireless charger",
  "43, SBSDASHHOLDERBLA, SBS In-Car dash or windscreen holder",
  "44, SBSVENTMOUNTBLA, SBS In-Car vent mount black",
  "45, SBSVENTCLIPBLA, SBS In-Car vent clip black",
  "46, SLB65WMAINSCHGBLA, SilverLabel 65W Charger",
  "47, SLB45WMAINSCHGBLA, SilverLabel 45W Charger",
  "48, SLB33WMAINSCHGBLA, SilverLabel 25/30w Charger",
  "49, SLB20WMAINSCHGBLA, SilverLabel 20w Charger",
  "50, SLB15WMAGSFECHRGBLA, SilverLabel 15w Mag-Safe Charger",
  "51, SLB15WMAGSFECHRGWHI, SilverLabel 15w Mag-Safe Charger White",
  "52, SLB10KMAGPOWBNKBLA, SilverLabel 10K MagSafe",
  "53, SLB5KMAGPOWBNKBLA, SilverLabel 5K MagSafe",
  "54, SLB15WWLSCHRGBLA, SilverLabel 15w Wireless Charger",
  "55, SLB20WCARCHRGBLA, SilverLabel 20w Car Charger",
  "56, SLB2PORTCARCHRGBLA, SilverLabel Multi Port Car Charger 33W",
  "57, SLB3IN1CHRGSTNDBLA, SilverLabel in Charging stand",
  "58, SLB2IN1CHRGSTNDBLA, SilverLabel in Charging stand",
  "59, SLB18WPD1MA2LBUNBLA, SilverLabel Charger and Lightning Cable Bundle",
  "60, SLB18WPD1MA2CBUNBLA, SilverLabel Charger and USB-C Cable Bundle",
  "61, SLB1MC2C100WCABBLA, SilverLabel 100W 1m Cable braided",
  "62, SLB3MC2LBRDCABBLA, SilverLabel 3m USB-C Lighting Cable White braided",
  "63, SLB2MC2LBRDCABBLA, SilverLabel 2m USB- C Lighting Cable Black braided",
  "64, SLB2MC2LBRDCABWHI, SilverLabel 2m USB-C Lighting Cable White braided",
  "65, SLB3MUSBC2LCABWHI, SilverLabel 3m USB-C Lighting Cable White",
  "66, SLB1MUSBC2LCABBLA, SilverLabel 1m USB- C Lighting Cable Black",
  "67, SLB1MUSBC2LCABWHI, SilverLabel 1m USB-C Lighting Cable White",
  "68, SLB2MA2LBRDCABWHI, SilverLabel 2m USB-A Lighting Cable White braided",
  "69, SLB1MUSBA2LCABWHI, SilverLabel 1m USB-A Lighting Cable White",
  "70, SLB2MC2CBRDCABBLA, SilverLabel 2m USB-C- USB-C Cable Black braided",
  "71, SLB2MC2CBRDCABWHI, SilverLabel 2m USB-C- USB-C Cable White braided",
  "72, SLB3MUSBC2CCABBLA, SilverLabel 3m USB-C- USB-C Cable Black",
  "73, SLB3MUSBC2CCABWHI, SilverLabel 3m USB-C- USB-C Cable White",
  "74, SLB1MUSBC2CCABBLA, SilverLabel 1m USB-C- USB-C Cable Black",
  "75, SLB1MUSBC2CCABWHI, SilverLabel 1m USB-C- USB-C Cable White",
  "76, SLB2MA2CBRDCABBLA, SilverLabel 2m USB-A- USB-C Cable Black braided",
  "77, SLB1MUSBA2CCABBLA, SilverLabel 1m USB-A- USB-C Cable Black",
  "78, SLB1MMICROUSBCABBLA, SilverLabel 1m Micro USB Cable Black",
  "79, SLB20KPOWERBANKBLA, SilverLabel 20,0000mAh Powerbank Black",
  "80, SLB20KPOWERBANKWHI, SilverLabel 20,0000mAh Powerbank White",
  "81, SLB10KPOWERBANKBLA, SilverLabel 10,000mAh Powerbank Black",
  "82, SLB10KPOWERBANKWHI, SilverLabel 10,000mAh Powerbank White",
  "83, SLB5KPOWERBANKBLA, SilverLabel 5000mAh Powerbank Black",
  "84, SLB5KPOWERBANKBLA, SilverLabel 5000mAh Powerbank Black",
  "85, SLB5KPOWERBANKWHI, SilverLabel 5000mAh Powerbank White",
  "86, BEL15WCNVRTMAGBLA, Belkin 15w Car Vent Mount",
  "87, APPEARPODSUSBCWHI, Apple Earpods USB-C White",
  "88, APPMAGSAFEWLCHARGWHI, Apple MagSafe Wireless 15W Charger",
  "89, APP20WUSBCADAPTERWHI, Apple 20W USB-C Power Adapter",
  "90, APP20WUSBCADAPTERWHI, Apple 20W USB-C Power Adapter"
];

var dataArray3 = [
  "Samsung, 2, 4, 4",
  "1, SAM25ULTHCSEBRO, Kindsuit Faux Leather Case for Galaxy S25 Ultra - Camel",
  "2, SAMS25UGRPCSEGRE, Standing Grip Case for Galaxy S25 Ultra - Grey",
  "3, SAMS25USILCSEBLA, Silicone Case for Galaxy S25 Ultra - Black",
  "4, SAMS25UMAGCSECLR, Magnet Clear Case for Galaxy S25 Ultra",
  "5, SAMS25USILCSEBLU, Silicone Case for Galaxy S25 Ultra - Light Blue",
  "6, SAMS25UCSECLR, Clear Case for Galaxy S25 Ultra",
  "7, SAMS25PSILCSEBLA, Silicone Case for Galaxy S25+ - Black",
  "8, SAMS25PMAGCSECLR, Magnet Clear Case for Galaxy S25+",
  "9, SAMS25PCSECLR, Clear Case for Galaxy S25+",
  "10, SAM25LTHCSEBRO, Kindsuit Faux Leather Case S25 - Camel",
  "11, SAMS25GRPCSEGRE, Standing Grip Case for Galaxy S25 - Grey",
  "12, SAMS25SILCSEBLA, Silicone Case for Galaxy S25 - Black",
  "13, SAMS25SILCSEBLU, Silicone Case for Galaxy S25 - Light Blue",
  "14, SAMS25MAGCSECLR, Magnet Clear Case for Galaxy S25",
  "15, SAMS25CSECLR, Clear Case for Galaxy S25",
  "16, SAMS25EDGSILCSEGRY, Samsung Silicone Case S25 Edge",
  "17, SAMS25EDGCSECLR, Samsung Clear Case S25 Edge",
  "18, SAMS24FECSECLR, Samsung S24 FE Case - Clear",
  "19, SAMS24FESILCSEGRY, Samsung S24 FE Silicone Case - Grey",
  "20, SAMA56CSECLR, Samsung A56 Clear Case",
  "21, SAMA56RUGCSEBLA, Samsung A56 Rugged Case",
  "22, SAMA36CSECLR, Samsung A36 Clear Case",
  "23, SAMA36RUGCSEBLA, Samsung A36 Rugged Case",
  "24, SAMA26CSECLR, Samsung A26 Clear Case",
  "25, SAMA26RUGCSEBLA, Samsung A26 Rugged Case",
  "26, SAMA16CSECLR, Samsung A16 Case - Clear",
  "27, SAMA05SCSECLR, Samsung A05S Clear Case",
  "28, SAMFLIP6CSECLR, Samsung Flip6 Clear Case",
  "29, SAM45WFASTCGRBLA, Samsung 45W Fast Charger",
  "30, SAM25WFASTCGRBLA, Samsung 25W Charger",
  "31, SAM10K25WPBBLA, Samsung 10K 25W Power bank",
  "32, SAMGALAXYTAG2BLA, Samsung Galaxy Smart Tag2"
];

var dataArray4 = [
  "Zag, 2, 3, 4",
  "1, ZAGIPH16PMMANSNPBLA, Zagg Man Snap iPhone 16 Pro Max Case Black",
  "2, ZAGIPH16PMCPSNPCLR, Zagg CP Snap iPhone 16 PM Case Clear",
  "3, ZAGIPH16PMCPCSECLR, Zagg CP iPhone 16 Pro Max Case Clear",
  "4, INVIPH16PMXTRSP, InvisibleShield Glass XTR4 iPh16PM SP",
  "5, INVIPH16PMPRGLSELISP, InvisibleShield Privacy iPh16PM SP",
  "6, ZAGIPH16PCPSNPCLR, Zagg CP Snap iPhone 16 Pro Case Clear",
  "7, ZAGIPH16PMANSNPBLA, Zagg Man Snap iPhone 16 Pro Case Black",
  "8, ZAGIPH16PCPCSECLR, Zagg CP iPhone 16 Pro Case Clear",
  "9, INVIPH16PXTRSP, InvisibleShield Glass XTR4 iPh16P SP",
  "10, INVIPH16PPRGLSELISP, InvisibleShield Privacy iPh16P SP",
  "11, ZAGIPH16PLMANSNPBLA, Zagg Man Snap iPhone 16 Plus Case Black",
  "12, ZAGIPH16PLCPSNPCLR, Zagg CP Snap iPhone 16 Plus Case Clear",
  "13, ZAGIPH16PLCPCSECLR, Zagg CP iPhone 16 Plus Case Clear",
  "14, INVIPH16PROCAMSP, InvisibleShield iPh16 Pro Camera SP",
  "15, INVIPH16PLPRGLSELISP, InvisibleShield Privacy iPh16PL SP",
  "16, ZAGIPH16MANSNPBLA, Zagg Man Snap iPhone 16 Case Black",
  "17, ZAGIPH16CPSNPCLR, Zagg CP Snap iPhone 16 Case Clear",
  "18, ZAGIPH16CPCSECLR, Zagg CP iPhone 16 Case Clear",
  "19, INVIPH16PRGLSELISP, InvisibleShield Privacy iPh16 SP",
  "20, INVIPH16GLSELISP, InvisibleShield iPh16 Screen Protector",
  "21, INVIPH16PMGLSELISP, InvisibleShield iPh16PM Screen Protector",
  "22, INVIPH16PGLSELISP, InvisibleShield iPh16P Screen Protector",
  "23, INVIPH16PLGLSELISP, InvisibleShield iPh16PL Screen Protector",
  "24, INVIPH16CAMSP, InvisibleShield iPh16 Camera SP"
];

var EANList = [
	"190198001733, APPLIGHTEARPODSWHI",
	"190198893376, APPIPADPENCILV2",
	"190199314948, APPAIRTAGLEAKEYRIBRO",
	"190199314948, SAM10K25WPBBLA",
	"190199314948, SAMGALAXYBUDSFEBLA",
	"190199314948, SAMGALBUDS3SIL",
	"190199314948, SAMGALBUDSPRO3SIL",
	"190199320246, APPAIRTAG1PKWHI",
	"190199320338, APPAIRTAG4PKWHI",
	"190199796904, APP30WUSBCCHARGERWHI",
    "195949121319, APP20WUSBCADAPTERWHI",
	"194252192467, APPMAGSAFEWLCHARGWHI",
	"194253939306, APPIPH15SILCSEBLA",
	"194253940265, APPIPH15CLRCSECLR",
	"195949590696, APPMAGSAFE2M24WHI",
	"195949688591, APPAIRPODS4WHI",
	"195949689673, APPAIRPODS4ANCWHI",
	"195949776274, APPEARPODSUSBCWHI",
	"195949882609, APPIPH16CLRCSECLR",
	"195949882623, APPIPH16PLCLRCSECLR",
	"195949884863, APPIPH16PCLRCSECLR",
	"195949884887, APPIPH16PMCLRCSECLR",
	"195949884948, APPIPH16SILCSEBLA",
	"195949885044, APPIPH16SILCSEBLU",
	"195949885082, APPIPH16SILCSEGREE",
	"195949885105, APPIPH16PLSILCSEBLA",
	"195949885204, APPIPH16PLSILCSEBLU",
	"195949885242, APPIPH16PLSICSEGREE",
	"195949885266, APPIPH16PSILCSEBLA",
	"195949885280, APPIPH16PSILCSEBLU",
	"195949885303, APP1IPH16PSILCSEGRY",
	"195949885426, APPIPH16PMSILCSEBLA",
	"195949885440, APPIPH16PMSILCSEBLU",
	"195949885464, APPIPH16PMSILCSEGRY",
	"195950217261, APPIPH16ECSEBLA",
	"195950217285, APPIPH16ECSEWHI",
	"195950217346, APPIPH16ECSEGRE",
	"4897138060138, SAMFLIP6CSECLR",
	"4897138060213, SAMS25MAGCSECLR",
	"4897138060220, SAMS25PMAGCSECLR",
	"5055288443716, INT32GBMICROSDU1BLA",
	"5055288443723, INT64GBMICROSDU3BLA",
	"5055288443730, INT128GBMICROSDU3BLA",
	"5055288443747, INT256GBMICROSDU3BLA",
	"5060745413027, SLB10KPOWERBANKBLA",
	"5060745413058, SLB15WWLSCHRGBLA",
	"5060745413089, SLB3IN1CHRGSTNDBLA",
	"5060745413157, SLB1MUSBA2LCABWHI",
	"5060745413201, SLB1MC2C100WCABBLA",
	"5060745413225, SLB33WMAINSCHGBLA",
	"5060745413256, SLB2PORTCARCHRGBLA",
	"5060745413263, SLB20KPOWERBANKBLA",
	"5060745413294, SLB5KMAGPOWBNKBLA",
	"5060745413300, SLB10KMAGPOWBNKBLA",
	"5060745413461, SLB1MUSBA2CCABBLA",
	"5060745413478, SLB2MA2CBRDCABBLA",
	"5060745413485, SLB1MMICROUSBCABBLA",
	"5060745413492, SLB2MC2LBRDCABBLA",
	"5060745413515, SLB2MC2CBRDCABBLA",
	"5060745413522, SLB20WMAINSCHGBLA",
	"5060745413539, SLB45WMAINSCHGBLA",
	"5060745413546, SLB2IN1CHRGSTNDBLA",
	"5060745414192, SLB20WCARCHRGBLA",
	"5060745414208, SLB1MUSBC2LCABWHI",
	"5060745414215, SLB1MUSBC2LCABBLA",
	"5060745414222, SLB3MUSBC2LCABWHI",
	"5060745414239, SLB1MUSBC2CCABWHI",
	"5060745414246, SLB1MUSBC2CCABBLA",
	"5060745414253, SLB3MUSBC2CCABBLA",
	"5060745414260, SLB3MUSBC2CCABWHI",
	"5060745414277, SLB15WMAGSFECHRGBLA",
	"5060745414284, SLB5KPOWERBANKBLA",
	"5060745414291, SLB5KPOWERBANKWHI",
	"5060745414307, SLB10KPOWERBANKWHI",
	"5060745414314, SLB20KPOWERBANKWHI",
	"5060745414321, SLB65WMAINSCHGBLA",
	"5060745414338, SLB2MA2LBRDCABWHI",
	"5060745414345, SLB2MC2LBRDCABWHI",
	"5060745414352, SLB3MC2LBRDCABBLA",
	"5060745414369, SLB2MC2CBRDCABWHI",
	"5060745414376, SLB15WMAGSFECHRGWHI",
	"5060745414383, SLB18WPD1MA2LBUNBLA",
	"5060745414390, SLB18WPD1MA2CBUNBLA",
	"5711428019080, DBIPH15PLICEMGCSEBLA",
	"5711428061300, DBSAMA35GREENLANDCLR",
	"5711428061454, DBSAMA55GREENLANDCLR",
	"5711428061508, DBGOOPIX8AGREENCLR",
	"5711428062772, DBIPH16ICELANDCLR",
	"5711428062802, DBIPH16PLICELNDCLR",
	"5711428062833, DBIPH16PICELANDCLR",
	"5711428062864, DBIPH16PMICELNDCLR",
	"5711428063144, DBIPH16MONACOPIN",
	"5711428063175, DBIPH16PLMONACOPIN",
	"5711428063205, DBIPH16PMONACOPIN",
	"5711428063236, DBIPH16PMMONACOPIN",
	"5711428063472, DBIPH16ROSKILDBLA",
	"5711428063496, DBIPH16PLROSKILBLA",
	"5711428063519, DBIPH16PROSKILDBLA",
	"5711428063533, DBIPH16PMROSKILBLA",
	"5711428063731, DBIPH16PGRENENNAT",
	"5711428063762, DBIPH16PMGRENENNAT",
	"5711428064158, DBGOOPIX9ICECSE",
	"5711428064165, DBGOOPIX9PICECSE",
	"5711428064592, DBSAMS25ICECLR",
	"5711428064608, DBSAMS25UICECLR",
	"5711428064639, DBSAMS25ICEBLA",
	"5711428064653, DBSAMS25UICEBLA",
	"5711428064745, DBSAMS25OSLOBLA",
	"5711428064752, DBSAMS25UOSLOBLA",
	"5711428065018, DBSAMA16GREENCLR",
	"5711428065339, DBIPH16EGREENBLA",
	"5711428065414, DBIPH16EICESTARCLR",
	"5711428065520, DBSAMA56GREENLANDCLR",
	"5711428065698, DBSAMA36GREENLANDCLR",
	"5711428067852, DBS25EDGEGREENPBLA",
	"5711428067869, DBS25EDGEGREENPCLR",
	"6976068910121, SAMA05SCSECLR",
	"745883837588, BEL30WUSBCMCHRGWHI",
	"745883841370, BEL20WUSBCMCHRGWHI",
	"745883868377, BEL15WCNVRTMAGBLA",
	"8018417158629, SBSDASHHOLDERBLA",
	"8018417161629, SBSVENTMOUNTBLA",
	"8018417276125, SBSDASHWLSCGRBLA",
	"8018417328886, SBSVENTCLIPBLA",
	"840056135765, DEFIPH12CLRCASECLR",
	"840056148833, INVIPH13GLSELITE",
	"840056151451, CGIPH13PGLSSCRNPRO",
	"840056185265, DEFIPH15CSECLR",
	"840056185418, DEFIPH15FOLBLA",
	"840056185456, CGIPH15GLSSP",
	"840056185463, CGIPH15PLGLSSP",
	"840056193451, ZAGIPH15CPCSECLR",
	"840056193536, ZAGIPH15CPSNPCLR",
	"840056194090, ZAGIPH15MANCSEBLA",
	"840244604202, GOOPIX8ACSEBLA",
	"840244604219, GOOPIX8ACSEWHI",
	"840353905603, GOOPIX9PXLCSEWHI",
	"840353905610, GOOPIX9PXLCSEBLA",
	"840353905634, GOOPIX9CSEPIN",
	"840353905672, GOOPIX9CSEBLA",
	"840353919990, GOOPIX9ACSEBLA",
	"840353920002, GOOPIX9ACSEWHI",
	"840353920026, GOOPIX9ACSEPUR",
	"840390302090, INVGOOPIX8ASP",
	"840390302922, INVSAMS24GLSSP",
	"840390303257, INVSAMS24XTRSP",
	"840390303400, ZAGSAMS24LUXBLA",
	"840390303431, ZAGSAMS24LUXCLR",
	"840390303585, ZAGSAMS24CPCSECLR",
	"840390304063, ZAGSAMS24MILIRICLR",
	"840390305145, DEFSAMS24FOLIOBLK",
	"840390305152, ZAGSAMS24LUXBUN",
	"840390305541, ZAGSAMA25LUXBUN",
	"840390308993, DEFGOOPIX8ACSECLR",
	"840390309013, DEFGOOPIX8ABUNDLE",
	"840390309020, DEFGOOPIX8ASP",
	"840390309037, ZAGSAMA35LUXBUN",
	"840390309044, ZAGSAMA55LUXBUN",
	"840390309051, DEFSAMA35BUNDLE",
	"840390309068, DEFSAMA55BUNDLE",
	"840390309075, DEFSAMA35CSECLR",
	"840390309082, DEFSAMA55CSECLR",
	"840390309099, DEFSAMA35FOLIOBLK",
	"840390309105, DEFSAMA55FOLIOBLK",
	"840390309112, DEFSAMA35SP",
	"840390309129, DEFSAMA55SP",
	"840390309167, INVIS24CAMSP",
	"840390309389, ZAGGOOPIX8ALUXBUN",
	"840390312419, ZAGPIX9LUXCSEBLA",
	"840390312426, ZAGPIX9PXLLUXCSEBLA",
	"840390312495, ZAGPIX9MILCSEIRI",
	"840390312501, ZAGPIX9PXLMILCSEIRI",
	"840390312518, ZAGPIX9CPCSECLR",
	"840390312525, ZAGPIX9PXLCPCSECLR",
	"840390312679, INVPIX9GLSELTSP",
	"840390312686, INVPIX9PXLGLSELTSP",
	"840390312730, INVPIX9PFLDGLSELTSP",
	"840390315427, ZAGPIX9PXLLUXBUN",
	"840390315434, ZAGPIX9LUXBUN",
	"840390317063, INVIPH16GLSELISP",
	"840390317070, INVIPH16PLGLSELISP",
	"840390317087, INVIPH16PGLSELISP",
	"840390317094, INVIPH16PMGLSELISP",
	"840390317148, INVIPH16PRGLSELISP",
	"840390317155, INVIPH16PLPRGLSELISP",
	"840390317162, INVIPH16PPRGLSELISP",
	"840390317179, INVIPH16PMPRGLSELISP",
	"840390317285, INVIPH16PXTRSP",
	"840390317292, INVIPH16PMXTRSP",
	"840390317346, INVIPH16CAMSP",
	"840390317360, INVIPH16PROCAMSP",
	"840390318428, ZAGIPH16LUXSNPBLA",
	"840390318435, ZAGIPH16PLLUXSNPBLA",
	"840390318442, ZAGIPH16PLUXSNPBLA",
	"840390318459, ZAGIPH16PMLUXSNPBLA",
	"840390318749, ZAGIPH16CPCSECLR",
	"840390318756, ZAGIPH16PLCPCSECLR",
	"840390318763, ZAGIPH16PCPCSECLR",
	"840390318770, ZAGIPH16PMCPCSECLR",
	"840390318787, ZAGIPH16CPSNPCLR",
	"840390318794, ZAGIPH16PLCPSNPCLR",
	"840390318800, ZAGIPH16PCPSNPCLR",
	"840390318817, ZAGIPH16PMCPSNPCLR",
	"840390318848, ZAGIPH16PCPKSCLR",
	"840390318855, ZAGIP16PMSCPKSCLR",
	"840390318862, ZAGIPH16SCSNPBLA",
	"840390318879, ZAGIPH16PLSCSNPBLA",
	"840390318886, ZAGIPH16PSCSNPBLA",
	"840390318893, ZAGIPH16PMSCSNPBLA",
	"840390319449, ZAGIPH16PMILANDACLR",
	"840390319456, ZAGIPH16PMMILDACLR",
	"840390319463, ZAGIPH16MILSNPIRI",
	"840390319487, ZAGIPH16PMILSNPIRI",
	"840390319494, ZAGIPH16PMMILSNPIRI",
	"840390319562, ZAGIPH16PMILANGLCLR",
	"840390320308, ZAGIPH16MANSNPBLA",
	"840390320315, ZAGIPH16PLMANSNPBLA",
	"840390320322, ZAGIPH16PMANSNPBLA",
	"840390320339, ZAGIPH16PMMANSNPBLA",
	"840390320582, ZAGIPH16SOHOBLA",
	"840390320605, ZAGIPH16PSOHOBLA",
	"840390320612, ZAGIPH16PMSOHOBLA",
	"840390320643, ZAGIP16PSOHOBLU",
	"840390320650, ZAGIP16PMSOHOBLU",
	"840390320865, ZAGIP16DENALIBLA",
	"840390320889, ZAGIPH16PDENALIBLA",
	"840390320896, ZAGIPH16PMDENALIBLA",
	"840390321626, DEFIPH16FOLIOBLA",
	"840390321640, DEFIPH16PFOLIOBLA",
	"840390321657, DEFIPH16PMFOLIOBLA",
	"840390322166, DEFIPH16CSECLR",
	"840390322173, DEFIPH16PLCSECLR",
	"840390322180, DEFIPH16PCSECLR",
	"840390322197, DEFIPH16PMCSECLR",
	"840390329974, CGIPH16GLSSP",
	"840390329981, CGIPH16PLGLSSP",
	"840390329998, CGIPH16PGLSSP",
	"840390330000, CGIPH16PMGLSSP",
	"840390334244, INVSAMS24FEGLSSP",
	"840390334619, ZAGSAMS24FELUXBLA",
	"840390334633, ZAGSAMS24FECPCSECLR",
	"840390335098, ZAGSAMS24FELUXBUN",
	"840390340931, INVGOOPIX9AGLSSP",
	"840390340986, ZAGSAMA16LUXCSEBLA",
	"840390341273, DEFSAMA16SP",
	"840390341280, DEFSAMA16CSECLR",
	"840390341297, DEFSAMA16OLIOBLA",
	"840390341303, DEFSAMA16BUN",
	"840390341365, ZAGSAMA16LUXBUN",
	"840390341372, DEFGOOPIX9ASP",
	"840390341402, DEFGOOPIX9ABUN",
	"840390341433, ZAGGOOPIX9ALUXBUN",
	"840390341716, INVSAMS25XTRSP",
	"840390341730, INVSAMS25UXTRSP",
	"840390341747, INVSAMS25GLSSP",
	"840390341761, INVSAMS25UGLSSP",
	"840390341860, INVSAMS25CAMSP",
	"840390341884, INVSAMS25UCAMSP",
	"840390342041, ZAGSAMS25LUXBLA",
	"840390342065, ZAGSAMS25ULUXBLA",
	"840390342133, ZAGSAMS25LUXBLU",
	"840390342157, ZAGSAMS25ULUXBLU",
	"840390342164, ZAGSAMS25CPCSECLR",
	"840390342188, ZAGSAMS25UCPCSECLR",
	"840390342195, ZAGSAMS25CPSNPCSECLR",
	"840390342218, ZAGSAMS25UCPSCSECLR",
	"840390342225, ZAGSAMS25CPKSCLR",
	"840390343543, ZAGSAMS25DENALIKSBLA",
	"840390343550, ZAGSAMS25PDENALKSBLA",
	"840390343567, ZAGSAMS25UDENALIBLA",
	"840390343895, ZAGMOTE14FOLIOBLA",
	"840390348074, DEFSAMS25FOLIOBLK",
	"840390348098, DEFSAMS25UFOLIOBLK",
	"840390348227, ZAGSAMS25LUXBUN",
	"840390348234, ZAGSAMS25PLUXBUN",
	"840390348241, ZAGSAMS25ULUXBUN",
	"840390349491, ZAGGOOPIX9ALUXBLA",
	"840390349521, ZAGGOOPIX9AMILGLI",
	"840390349606, ZAGGOOPIX9ALUXCLR",
	"840390350176, ZAGSAMS25MILANSNPBLA",
	"840390350183, ZAGSAMS25PMILSNPBLA",
	"840390350206, ZAGSAMS25MILBLU",
	"840390350220, ZAGSAMS25UMILBLU",
	"840390350220, ZAGSAMS25UMILBLU",
	"840390350350, ZAGSAMA36LUXCLR",
	"840390350367, ZAGSAMA56LUXCLR",
	"840390350374, ZAGSAMA36LUXCSEBLA",
	"840390350381, ZAGSAMA56LUXBLA",
	"840390350398, ZAGSAMA36CPLITECLR",
	"840390350404, ZAGSAMA56CPLITECLR",
	"840390350510, ZAGSAMA56LUXBUN",
	"840390350527, DEFSAMA36BUN",
	"840390350534, DEFSAMA56BUN",
	"840390350541, DEFSAMA36CSECLR",
	"840390350558, DEFSAMA56CSECLR",
	"840390350565, DEFSAMA36SP",
	"840390350572, DEFSAMA56SP",
	"840390350589, DEFSAMA36FOLIOBLA",
	"840390350596, DEFSAMA56FOLIOBLA",
	"840390350640, INVSAMA36GLSSP",
	"840390351548, ZAGIPH16ECPCSECLR",
	"840390351609, ZAGIPH16ESCCSEBLA",
	"840390351708, ZAGIPH16ELUXBUN",
	"840390351715, DEFIPH16EBUND",
	"840390351722, DEFIPH16ECSECLR",
	"840390352187, ZAGSAMA26LUXBUN",
	"840390352194, DEFSAMA26BUN",
	"840390352200, DEFSAMA26CSECLR",
	"840390352217, DEFSAMA26SP",
	"840390352224, DEFSAMA26FOLIOBLA",
	"840390352545, INVSAMA26GLSSP",
	"840390352590, ZAGSAMA26LUXCLR",
	"840390352613, ZAGSAMA26CPLITECLR",
	"840390355546, ZAGSAMS25EDGLUXBLA",
	"840390355577, ZAGSAMS25EDGCPCLR",
	"840390355591, INVSAMS25EDGSP",
	"840390355812, ZAGSAMS25EDGLUXBUN",
	"8800289130007, SAMWLSMAGCRGPADBLA",
	"8806094944518, SAM25WFASTCGRBLA",
	"8806095039893, SAMGALAXYTAG2BLA",
	"8806095354682, SAMS24SMTVWCSEBLA",
	"8806095489636, SAM45WFASTCGRBLA",
	"8806095498522, SAMS24SUITCSEWHI",
	"8806095769486, SAMS24FESILCSEGRY",
	"8806095811819, SAMA16CSECLR",
	"8806095850658, SAM25LTHCSEBRO",
	"8806095850665, SAM25ULTHCSEBRO",
	"8806095867731, SAMS25UGRPCSEGRE",
	"8806095867779, SAMS25GRPCSEGRE",
	"8806095879413, SAMS25UCSECLR",
	"8806095879420, SAMS25PCSECLR",
	"8806095879437, SAMS25CSECLR",
	"8806095879468, SAMS25USILCSEBLU",
	"8806095879482, SAMS25USILCSEBLA",
	"8806095881294, SAMS25PSILCSEBLA",
	"8806095881331, SAMS25SILCSEBLU",
	"8806095881348, SAMS25SILCSEBLA",
	"8806097072065, SAMA56RUGCSEBLA",
	"8806097072331, SAMA56CSECLR",
	"8806097076018, SAMA26RUGCSEBLA",
	"8806097076025, SAMA26CSECLR",
	"8806097099604, SAMA36RUGCSEBLA",
	"8806097099727, SAMA36CSECLR",
	"8806097329633, SAMS25EDGCSECLR",
	"8806097329640, SAMS25EDGSILCSEGRY",
	"8809397459628, SAMS24FECSECLR",
	"8809894143648, SAMS24CLRCSECLR",
	"8809894146663, SAMS25UMAGCSECLR",
	"888462314619, APPLIGHTUSBC1MCABWHI"
];