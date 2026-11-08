/* ===================================================== */
/* ====== LEXUS PARTS — JAVASCRIPT v11.0 =============== */
/* ====== ALL BUTTONS WORKING — MOBILE + DESKTOP ======= */
/* ===================================================== */

'use strict';

/* ===================================================== */
/* ============ CONFIG ================================= */
/* ===================================================== */

var CONFIG = {
    whatsapp: "12814093718",
    email: "lexusis300altezza@gmail.com",
    phone: "+12814093718",
    siteName: "LexusIS300IS200AltezzaParts"
};

/* ===================================================== */
/* ============ PRODUCT DATA (Cards 1-15) ============= */
/* ===================================================== */

var productsData = {
    1: { title: "Lexus IS300 Front Bumper Kit", subtitle: "2001 Lexus IS300 • JDM Series", description: "Upgrade your first-generation Lexus IS300 with this premium front bumper kit, designed for enthusiasts who want aggressive JDM styling with clean factory-style fitment. Made from durable, impact-resistant materials, it comes ready for paint and installs using factory mounting points with no major modifications required. This bumper delivers a sharper, motorsport-inspired look that enhances the IS300's timeless lines without being overdone. It's the perfect foundation for a full aero or exterior styling build. Whether restoring a daily driver or creating a show-quality build, this kit offers the ideal blend of quality, fitment, and style.", features: ["Direct OEM Fitment", "High-Grade Polyurethane", "Pre-Drilled Mounting Points", "Hardware Kit Included", "Paint-Ready Surface", "1-Year Warranty", "Worldwide Shipping"] },
    2: { title: "Lexus IS300 Front Bumper Kit", subtitle: "2002 Lexus IS300 • JDM Series", description: "Upgrade your first-generation Lexus IS300 with this premium front bumper kit, built for enthusiasts who want aggressive JDM styling with clean, factory-style fitment. Constructed from durable, impact-resistant materials, it arrives ready for paint and installs using factory mounting points with no major modifications required. The design sharpens the IS300's front end with a motorsport-inspired look while preserving the timeless lines that made this chassis a modern classic. It pairs perfectly with the rest of our JDM lineup, including aero kits, wheels, coilovers, and exterior styling components. Whether you're restoring a daily driver or building a full show car, this bumper delivers the ideal balance of quality, fitment, and style.", features: ["Direct Bolt-On Fitment", "Premium Polyurethane", "UV Resistant", "Aerodynamic Design", "No Cutting Required", "Paint-Ready Surface", "1-Year Warranty"] },
    3: { title: "Lexus IS300 Front Bumper Kit", subtitle: "2003 Lexus IS300 • JDM Series", description: "A rare find: the 2002 Lexus IS300 SportCross, a unique blend of sports sedan performance and wagon practicality. Powered by a legendary 3.0L inline-six producing 215 horsepower and sending power to the rear wheels, it delivers an engaging driving experience. This example features a clean silver exterior, factory alloy wheels, and a sunroof. Reliable, versatile, and increasingly collectible, the SportCross is a true modern classic for enthusiasts.", features: ["Precision Fitment", "High-Density Polyurethane", "Reinforced Brackets", "Race-Inspired Styling", "Easy Bolt-On Installation", "Paint-Ready Surface", "1-Year Warranty"] },
    4: { title: "Toyota Altezza JDM Body Kit", subtitle: "2004 Toyota Altezza • JDM Series", description: "Classic compact sports sedan with a 3.0L inline-six, 215 horsepower, and legendary Lexus reliability. This SportDesign example stands out with black pearl emblems, a unique grille, and special 11-spoke alloy wheels. Rear-wheel drive and a driver-focused cockpit deliver a pure, engaging feel that modern cars often lack. With timeless design and growing rarity, it has become an increasingly sought-after collectible among enthusiasts. A true modern classic that remains affordable yet desirable.", features: ["Fits SXE10 & GXE10", "Complete Kit", "Authentic JDM Parts", "Factory-Level Finish", "Premium Materials", "Hardware Included", "Professional Install"] },
    5: { title: "Lexus IS300 JDM Performance Parts", subtitle: "2005 Lexus IS300 • JDM Series", description: "The 2004 Lexus IS300 blends sports-sedan performance with legendary reliability, powered by the same 3.0L inline-six found in the Toyota Supra. With rear-wheel drive, a 5-speed manual option, and a driver-focused cockpit, it delivers a pure and engaging driving experience. Its timeless design and bulletproof engine make it a favorite among enthusiasts. A true modern classic that remains affordable yet increasingly collectible.", features: ["Complete Performance Package", "Body & Suspension", "Meets OEM Standards", "Enhanced Dynamics", "Pro-Grade Construction", "Installation Guide", "Worldwide Shipping"] },
    6: { title: "Lexus IS200 JDM Parts", subtitle: "2001 Lexus IS200 • JDM Series", description: "The 2003 Lexus IS300 is a driver-focused sport sedan with a 3.0L inline-six engine producing 215 horsepower and sending power to the rear wheels. Sharing its engine with the Toyota Supra and offering a 5-speed manual option, it delivers genuine performance and engaging handling. Its timeless design, durable build, and legendary Lexus reliability make it a standout choice. Clean examples are becoming modern classics and are increasingly sought after by enthusiasts. A rare find that remains affordable yet highly collectible.", features: ["Direct Fit", "Premium Aero Kits", "Genuine Japanese Quality", "Enhanced Performance", "Complete Install Kit", "Perfect Fitment", "Worldwide Shipping"] },
    7: { title: "Lexus IS200 JDM Parts", subtitle: "2002 Lexus IS200 • JDM Series", description: "The 2003 Lexus IS300 blends sports-sedan performance with legendary Lexus reliability. It packs a 3.0L inline-six engine producing 215 horsepower, sending power to the rear wheels. With its driver-focused cockpit and iconic design, it delivers a pure and engaging driving experience. Sharing its engine with the Toyota Supra, it's a favorite among enthusiasts. Clean examples are becoming modern classics and are increasingly sought after. A rare find that remains affordable yet highly collectible.", features: ["Precision Fitment", "Complete Aero Kit", "Performance Suspension", "Custom Wheel Options", "Japanese Standards", "Durability Tested", "Worldwide Shipping"] },
    8: { title: "Lexus IS200 JDM Parts", subtitle: "2003 Lexus IS200 • JDM Series", description: "The 2003 Lexus IS300 is a rear-wheel-drive sport sedan powered by a reliable 3.0L inline-six engine. It blends sharp handling with legendary Lexus reliability, making it a true modern classic. This clean example features a deep blue finish and factory alloy wheels. Its driver-focused cockpit and timeless design continue to attract enthusiasts. Sharing its engine with the Toyota Supra, it offers genuine performance and lasting value. A rare find that remains affordable yet increasingly collectible.", features: ["Perfect Fit", "Premium Aero Selection", "Coilover Options", "Genuine Replacement", "Expert-Approved", "Install Support", "Worldwide Shipping"] },
    9: { title: "Lexus IS200 JDM Parts", subtitle: "2004 Lexus IS200 • JDM Series", description: "", features: ["Fits Perfectly", "Complete Aero Kit", "Performance Suspension", "Enhanced Appearance", "Superior Driving", "Premium Materials", "Worldwide Shipping"] },
    10: { title: "Toyota Altezza JDM Parts", subtitle: "2005 Toyota Altezza • JDM Series", description: "Classic sports sedan powered by a 3.0L inline-six with 215 horsepower and rear-wheel drive. Known for engaging handling and legendary Lexus reliability, it's a sought-after modern classic among enthusiasts. Sharing its engine with the Toyota Supra, it delivers genuine performance and lasting value. Its driver-focused cockpit and timeless design continue to attract fans. A rare find that remains affordable yet increasingly collectible.", features: ["Original JDM Parts", "Body Kit Options", "Wheel Selection", "Suspension Components", "Authentic Japanese", "Factory Fitment", "Worldwide Shipping"] },
    11: { title: "Toyota Altezza JDM Parts", subtitle: "2001 Toyota Altezza • JDM Series", description: "A striking modified IS300 featuring an aftermarket front bumper and grille, custom gold alloy wheels, and a clean white finish. Powered by Toyota's legendary 3.0L inline-six engine, this rear-wheel-drive sport sedan delivers 215 horsepower. Its aggressive styling and driver-focused cockpit make it a standout among enthusiasts. Sharing its engine with the Toyota Supra, it offers genuine performance and proven reliability. A true modern classic that blends head-turning looks with everyday usability.", features: ["Fits SXE10 & GXE10", "Complete Body Kit", "Premium Wheels", "Suspension Components", "Direct from Japan", "Quality Tested", "Worldwide Shipping"] },
    12: { title: "Toyota Altezza JDM Parts", subtitle: "2002 Toyota Altezza • JDM Series", description: "Authentic Japanese body kits and performance components for the 2002 Toyota Altezza.", features: ["Perfect Fit", "Japanese Body Kits", "Custom Wheels", "High-Performance Suspension", "Factory Quality", "Rigorous Testing", "Worldwide Shipping"] },
    13: { title: "Toyota Altezza JDM Parts", subtitle: "2003 Toyota Altezza • JDM Series", description: "This 2005 Toyota Altezza represents the final evolution of the iconic XE10 chassis, the JDM sibling of the Lexus IS300. Powered by a 3.0L inline-six engine producing 215 horsepower and sending power to the rear wheels, it delivers genuine performance and engaging handling. Its timeless design, durable build, and legendary reliability make it a favorite among enthusiasts. Sharing its engine with the Toyota Supra, it offers proven performance and lasting value. A rare JDM classic that remains affordable yet increasingly collectible.", features: ["Precision Fitment", "JDM Body Kit Options", "Wheel Selection", "Suspension Upgrades", "100% Authentic", "Durability Tested", "Worldwide Shipping"] },
    14: { title: "Toyota Altezza JDM Parts", subtitle: "2004 Toyota Altezza • JDM Series", description: "A striking modified IS300 featuring an aftermarket front bumper and grille, custom gold alloy wheels, and a clean white finish. Powered by Toyota's legendary 3.0L inline-six engine, this rear-wheel-drive sport sedan delivers 215 horsepower. Its aggressive styling and driver-focused cockpit make it a standout among enthusiasts. Sharing its engine with the Toyota Supra, it offers genuine performance and proven reliability. A true modern classic that blends head-turning looks with everyday usability.", features: ["Fits SXE10 & GXE10", "Premium Body Kit", "Performance Wheels", "Suspension Packages", "Trusted Manufacturers", "Quality Tested", "Worldwide Shipping"] },
    15: { title: "Toyota Altezza JDM Parts", subtitle: "2005 Toyota Altezza • JDM Series", description: "This clean white example is a rare Toyota Altezza AS300 wagon, the JDM sibling of the Lexus IS300 SportCross. It blends sport sedan handling with wagon practicality and legendary inline-six reliability. Powered by a 3.0L engine producing 215 horsepower and rear-wheel drive, it delivers an engaging yet practical driving experience. Its JDM heritage, timeless design, and durable build make it a favorite among enthusiasts. A rare find that remains affordable yet increasingly collectible.", features: ["Perfect Fit", "Complete Body Kit", "Premium Wheels", "Suspension Components", "Authentic Japanese", "Perfect Fitment", "Worldwide Shipping"] }
};

/* ===================================================== */
/* ============ TOOL DATA (Cards 1-60 + 101-120) ======= */
/* ===================================================== */

var toolsData = {};

/* --- Tool Parts 1-20 --- */
toolsData[1] = { title: "TRD Style Side Skirts", description: "Direct fitment side skirts for Lexus IS300 and Altezza SXE10.", features: ["Direct Fit", "Premium Quality", "TRD Style", "Worldwide Shipping"] };
toolsData[2] = { title: "TRD Style Side Skirts Pair", description: "Premium TRD style side skirts pair for Lexus IS300 and Toyota Altezza.", features: ["Direct Fit", "Pair Set", "Premium Quality", "Worldwide Shipping"] };
toolsData[3] = { title: "Lexus IS300 Rear Bumper", description: "Genuine OEM rear bumper for Lexus IS300 / Altezza.", features: ["OEM Part", "Direct Fit", "Premium Quality", "Worldwide Shipping"] };
toolsData[4] = { title: "TRD Style Front Bumper Lip", description: "TRD style front bumper lip. Polyurethane material.", features: ["Polyurethane", "Direct Fit", "TRD Style", "Worldwide Shipping"] };
toolsData[5] = { title: "BN Style Front Bumper", description: "Aggressive BN style front bumper for Lexus IS300 and Toyota Altezza.", features: ["FRP Material", "Aggressive Style", "Direct Fit", "Worldwide Shipping"] };
toolsData[6] = { title: "Work Emotion CR 2P Wheels", description: "Premium Work Emotion CR 2P multi-piece wheels.", features: ["Multi-Piece", "Chrome Finish", "JDM Authentic", "Worldwide Shipping"] };
toolsData[7] = { title: "Chrome Multi-Spoke Wheel", description: "Premium chrome finish multi-spoke wheel, 18 inch.", features: ["18 Inch", "Chrome Finish", "JDM Fitment", "Worldwide Shipping"] };
toolsData[8] = { title: "Chrome 5-Spoke Wheel Set", description: "Premium chrome 5-spoke wheels, set of 4.", features: ["Set of 4", "Chrome Finish", "JDM Fitment", "Worldwide Shipping"] };
toolsData[9] = { title: "SSR Professor SP1 Wheel", description: "Gloss black face with high-polished lip, single wheel.", features: ["Single Wheel", "Polished Lip", "JDM Iconic", "Worldwide Shipping"] };
toolsData[10] = { title: "Volk Racing TE37 Bronze Wheel", description: "Iconic forged 6-spoke JDM wheel in bronze finish.", features: ["Forged", "Bronze Finish", "JDM Iconic", "Worldwide Shipping"] };
toolsData[11] = { title: "TEIN Flex Z Coilovers", description: "TEIN Flex Z adjustable coilovers, set of 4.", features: ["16-Way Damping", "Set of 4", "Street & Track", "Worldwide Shipping"] };
toolsData[12] = { title: "Red Lowering Springs", description: "High-quality red lowering springs, set of 4.", features: ["Set of 4", "Aggressive Drop", "Improved Handling", "Worldwide Shipping"] };
toolsData[13] = { title: "KSport Airtech Air Suspension System", description: "Complete KSport Airtech air suspension kit for Lexus IS300 / Altezza.", features: ["4 Air Struts", "5-Gallon Tank", "36-Way Damping", "Worldwide Shipping"] };
toolsData[14] = { title: "Lexus IS300 Front Upper Control Arms Camber Kit (Red)", description: "Front upper tubular control arms with camber kit.", features: ["Red Finish", "Camber Kit", "Direct Fit", "Worldwide Shipping"] };
toolsData[15] = { title: "Lexus IS300 Front Brake Caliper Pair (OEM)", description: "Genuine OEM front brake calipers for Lexus IS300 / Altezza.", features: ["OEM Pair", "Left & Right", "Direct Fit", "Worldwide Shipping"] };
toolsData[16] = { title: "Lexus IS300 Front Brake Caliper Pair (New)", description: "Brand new front brake caliper pair.", features: ["Brand New", "Pair Set", "Brackets Included", "Worldwide Shipping"] };
toolsData[17] = { title: "Lexus IS300 Front Drilled & Slotted Brake Rotors (Pair)", description: "Front drilled and slotted brake rotors.", features: ["Drilled & Slotted", "Pair Set", "Silver Zinc", "Worldwide Shipping"] };
toolsData[18] = { title: "DBA T3 Slotted Brake Rotor (Single)", description: "DBA 4000 Series T3 slotted brake rotor.", features: ["Single Rotor", "Slotted Design", "5x114.3 Pattern", "Worldwide Shipping"] };
toolsData[19] = { title: "Lexus IS300 Brake Master Cylinder (New)", description: "Brand new brake master cylinder.", features: ["Brand New", "Reservoir & Cap", "Direct Fit", "Worldwide Shipping"] };
toolsData[20] = { title: "Lexus IS300 Stainless Steel Braided Brake Lines (Silver)", description: "Stainless steel braided brake line kit.", features: ["Stainless Steel", "Braided", "Direct Bolt-On", "Worldwide Shipping"] };

/* --- Popup Cards 21-60 --- */
toolsData[21] = { title: "2JZ-GE / 1JZ-GE Rebuilt Cylinder Head", description: "Rebuilt DOHC cylinder head for 2JZ-GE and 1JZ-GE engines.", features: ["Rebuilt DOHC", "Pressure Tested", "New Valve Seals", "Worldwide Shipping"] };
toolsData[22] = { title: "2JZ-GE Bare Engine Block (Short Block)", description: "OEM 2JZ-GE bare engine block.", features: ["OEM Part", "Short Block", "Direct Replacement", "Worldwide Shipping"] };
toolsData[23] = { title: "Brian Crower Stage 2 Camshafts 264/264", description: "Brian Crower Stage 2 camshaft set.", features: ["264° Duration", "9.15mm Lift", "2JZ-GE Fitment", "Worldwide Shipping"] };
toolsData[24] = { title: "Lexus IS300 Upper Intake Manifold (Used OEM)", description: "Used OEM upper intake manifold.", features: ["Used OEM", "Part 17101-46030", "Direct Fit", "Worldwide Shipping"] };
toolsData[25] = { title: "Lexus IS300 OEM Exhaust Manifold with Catalytic Converter", description: "Used OEM exhaust manifold with cat.", features: ["Used OEM", "Integrated Cat", "Direct Fit", "Worldwide Shipping"] };
toolsData[26] = { title: "UniClutch Track Twin-Disc Clutch Kit", description: "Track twin-disc clutch kit.", features: ["Twin-Disc", "Ceramic/Metallic", "930Nm Capacity", "Worldwide Shipping"] };
toolsData[27] = { title: "UniClutch Sport Twin-Disc Clutch Kit", description: "Sport twin-disc clutch kit.", features: ["Twin-Disc", "Organic Discs", "830Nm Capacity", "Worldwide Shipping"] };
toolsData[28] = { title: "UniClutch Track Twin-Disc Clutch Kit (Red)", description: "Track twin-disc cerametallic clutch kit.", features: ["Cerametallic", "Lightweight Flywheel", "1450 ft-lb", "Worldwide Shipping"] };
toolsData[29] = { title: "OEM Clutch Release Fork (Lexus IS300 / Toyota Supra)", description: "Genuine OEM clutch release fork.", features: ["OEM Part", "Manual Trans", "Direct Fit", "Worldwide Shipping"] };
toolsData[30] = { title: "Lexus IS300 OEM Clutch Master Cylinder", description: "Genuine OEM clutch master cylinder.", features: ["OEM Part", "Manual Trans", "Direct Fit", "Worldwide Shipping"] };
toolsData[31] = { title: "Lexus IS300 Duraflex V-Speed 2 Front Bumper Cover", description: "Aftermarket front bumper cover.", features: ["Duraflex FRP", "Aggressive Style", "2000-2005 Fit", "Worldwide Shipping"] };
toolsData[32] = { title: "Lexus IS200 Altezza V1 Style Front Bumper", description: "V1 style front bumper for IS200 / Altezza.", features: ["V1 Style", "Aggressive", "Direct Fit", "Worldwide Shipping"] };
toolsData[33] = { title: "Vertex S-Endurance Racing Type Front Bumper & Canards", description: "Vertex S-Endurance Racing Type front bumper.", features: ["Vertex Racing", "FRP Construction", "Includes Canards", "Worldwide Shipping"] };
toolsData[34] = { title: "A-Premium O2 Oxygen Sensor", description: "A-Premium direct-fit oxygen sensor.", features: ["Direct Fit", "Heated Type", "3-Year Warranty", "Worldwide Shipping"] };
toolsData[35] = { title: "Lexus IS300 Fuel Pump Resistor Module", description: "Fuel pump resistor module.", features: ["OEM Replacement", "Controls Fuel Pump", "Direct Fit", "Worldwide Shipping"] };
toolsData[36] = { title: "Hella 4RA 965 400-001 12V 30A Automotive Relay", description: "Hella 12V 30A SPST power relay.", features: ["12V 30A", "4 Pins", "Black Housing", "Worldwide Shipping"] };
toolsData[37] = { title: "Toyota 1JZGTE / 1JZ VVT-i Camshafts (Pair)", description: "Aftermarket performance camshafts.", features: ["Pair Set", "1JZ-GTE Fitment", "VVT-i", "Worldwide Shipping"] };
toolsData[38] = { title: "Toyota Altezza SXE10 Front Bumper Assembly", description: "Genuine used OEM front bumper assembly.", features: ["Used OEM", "SXE10 Fitment", "With Grille", "Worldwide Shipping"] };
toolsData[39] = { title: "Nissan 350Z Front Brake Dust Shield (Driver Side)", description: "OEM front brake dust shield.", features: ["OEM Part", "Driver Side", "350Z / G35", "Worldwide Shipping"] };
toolsData[40] = { title: "Universal Car Seat Covers (2 Front Seats)", description: "Universal-fit front seat covers.", features: ["Universal Fit", "2 Front Seats", "Black with Gray Mesh", "Worldwide Shipping"] };
toolsData[41] = { title: "Subaru WRX Chargespeed Front Bumper", description: "Subaru Impreza WRX with Chargespeed bumper.", features: ["Chargespeed Type-2", "Carbon Center Flap", "Aggressive JDM", "Worldwide Shipping"] };
toolsData[42] = { title: "Mitsubishi Evo 7/8/9 C-West Front Bumper", description: "Mitsubishi Lancer Evo with C-West bumper.", features: ["C-West N1", "Evo 7/8/9", "JDM Aero Kit", "Worldwide Shipping"] };
toolsData[43] = { title: "GReddy Front Lip Spoiler", description: "GReddy front lip spoiler in glossy black.", features: ["GReddy/Trust", "Glossy Black", "Made in Japan", "Worldwide Shipping"] };
toolsData[44] = { title: "Toyota Chaser JZX100 Side Skirt", description: "Toyota Chaser JZX100 side skirt.", features: ["JZX100 Fitment", "Silver Finish", "Durable FRP", "Worldwide Shipping"] };
toolsData[45] = { title: "Raybestos Element3 EHT Brake Pad Set", description: "Raybestos Element3 EHT brake pads.", features: ["EHT Technology", "Hardware Included", "Stainless Shim", "Worldwide Shipping"] };
toolsData[46] = { title: "Front Wheel Hub Bearing Assembly (5-Lug)", description: "Front wheel hub and bearing assembly.", features: ["5-Lug", "ABS Compatible", "Durable Steel", "Worldwide Shipping"] };
toolsData[47] = { title: "Front Outer Tie Rod End Set (Left & Right)", description: "Front outer tie rod end pair.", features: ["Left & Right", "Nuts & Pins Included", "OEM Quality", "Worldwide Shipping"] };
toolsData[48] = { title: "Front Sway Bar Link (Stabilizer End Link)", description: "Front sway bar link with ball joints.", features: ["Ball Joints", "Hardware Included", "OEM Quality", "Worldwide Shipping"] };
toolsData[49] = { title: "Toyota Altezza / Lexus IS300 Front Grille", description: "Chrome front grille for Altezza / IS300.", features: ["Chrome Finish", "Horizontal Fins", "Direct Fit", "Worldwide Shipping"] };
toolsData[50] = { title: "Toyota Altezza / Lexus IS300 Carbon Fiber Front Grille", description: "Carbon fiber mesh front grille.", features: ["Real Carbon Fiber", "Mesh Design", "Direct Bolt-On", "Worldwide Shipping"] };
toolsData[51] = { title: "Lexus IS200 / IS300 Spare Tire Tool Kit with Jack", description: "Complete spare wheel tool kit with jack.", features: ["Foam Organizer", "Scissor Jack", "Wheel Wrench", "Worldwide Shipping"] };
toolsData[52] = { title: 'Lexus IS300 / Toyota Altezza OEM 17" Wheels (Set of 4)', description: "Genuine 17-inch OEM 5-spoke wheels.", features: ["Set of 4", "17x7 +50", "5x114.3", "Worldwide Shipping"] };
toolsData[53] = { title: "2003 Lexus IS300 Sedan", description: "Clean 2003 Lexus IS300 in Dark Blue Mica.", features: ["2003 Model", "Dark Blue Mica", "Facelift Front", "Rear-Wheel Drive"] };
toolsData[54] = { title: "2003 Lexus IS300 Sedan - Manual", description: "2003 IS300 in Itensa Blue Pearl, 5-speed manual.", features: ["5-Speed Manual", "Itensa Blue Pearl", "2JZ-GE Engine", "RWD"] };
toolsData[55] = { title: 'Lexus IS300 OEM 17" Wheel (Single)', description: "Reconditioned 17-inch OEM 5-spoke wheel.", features: ["Single Wheel", "17 Inch", "5-Spoke", "Machined Silver"] };
toolsData[56] = { title: "maXpeedingrods Coilovers for Lexus IS300 / IS200", description: "maXpeedingrods coilovers for IS300 / IS200.", features: ["Height Adjustable", "Set of 4", "Adjustable Damping", "Worldwide Shipping"] };
toolsData[57] = { title: "HKS HIPERMAX S Coilovers", description: "HKS HIPERMAX S coilover suspension kit.", features: ["30-Level Damping", "Full-Length Adjustable", "Single-Tube Damper", "Worldwide Shipping"] };
toolsData[58] = { title: "RankOne Performance Big Brake Calipers (Pair)", description: "Big Brake Kit with silver calipers.", features: ["Big Brake Kit", "Silver Calipers", "Pair Set", "Worldwide Shipping"] };
toolsData[59] = { title: "Brembo GT Big Brake Kit (Black)", description: "Brembo GT Big Brake Kit with black calipers.", features: ["6-Piston", "Black Calipers", "2-Piece Rotors", "Worldwide Shipping"] };
toolsData[60] = { title: "JDM 2JZ-GE VVT-i 3.0L Inline-6 Engine", description: "JDM 2JZ-GE VVT-i 3.0L Inline-6 engine.", features: ["JDM Engine", "3.0L Inline-6", "VVT-i", "Worldwide Shipping"] };

/* --- Second Hand 101-110 --- */
toolsData[101] = { title: "NNX-S47 Rose Gold 2-Piece Wheel", description: "Rose gold 5-spoke 2-piece wheel with chrome lip.", features: ["Used - Good Condition", "2-Piece Construction", "Rare JDM Wheel", "Worldwide Shipping"] };
toolsData[102] = { title: "Nissan Silvia S14 – LS Swapped Drift Build", description: "Nissan Silvia S14 with 6.0L LS V8 swap.", features: ["LS V8 Swap", "Turbo Setup", "Wide Body Kit", "Drift Ready"] };
toolsData[103] = { title: "Leon Hardiritt Orden Wheels (Used Set)", description: "Leon Hardiritt Orden 3-piece wheels, white face.", features: ["3-Piece", "White Face", "Polished Lip", "Worldwide Shipping"] };
toolsData[104] = { title: "WORK Emotion CR 2P Wheel (Used)", description: "WORK Emotion CR 2P with Candy Red face.", features: ["2-Piece", "Candy Red Face", "Polished Lip", "Worldwide Shipping"] };
toolsData[105] = { title: "Toyota Altezza Gita / Lexus IS300 SportCross", description: "Toyota Altezza Gita wagon with Initial D tribute.", features: ["Initial D Tribute", "SportCross Wagon", "JDM Iconic", "Worldwide Shipping"] };
toolsData[106] = { title: "WORK Meister S1 3P Wheel (Black Center, Polished Lip)", description: "Iconic 3-piece JDM wheel with black center.", features: ["3-Piece", "Black Center", "Gold Rivets", "Worldwide Shipping"] };
toolsData[107] = { title: "Toyota Altezza SXE10 / Lexus IS300 JDM OEM Gauge Cluster", description: "Genuine JDM RHD instrument cluster.", features: ["JDM RHD", "180 km/h Speedo", "Silver Dials", "Worldwide Shipping"] };
toolsData[108] = { title: "Toyota Altezza (SXE10) Trunk Lid with Tail Lights (Used)", description: "Genuine used trunk lid with tail lights.", features: ["Used OEM", "White Panel", "ALTEZZA Badge", "Worldwide Shipping"] };
toolsData[109] = { title: "Lexus IS200 / Toyota Altezza Spare Tire Tool Kit with Jack (Used)", description: "Complete used OEM spare tire tool kit.", features: ["Used OEM", "Foam Tray", "Scissor Jack", "Worldwide Shipping"] };
toolsData[110] = { title: "Toyota Altezza / Lexus IS300 LED Angel Eyes Halo Kit", description: "Brand new LED angel eyes halo kit.", features: ["Brand New", "LED Halo Rings", "Switchback DRL", "Worldwide Shipping"] };

/* --- Advance 111-120 --- */
toolsData[111] = { title: "Work Meister S1 2P Wheel Set (Used)", description: "Original Work Meister S1 2P wheels, white centers.", features: ["Used - Good", "2-Piece", "White Centers", "Worldwide Shipping"] };
toolsData[112] = { title: "WORK VS-XX Wheel (Used)", description: "Classic 2-piece JDM mesh wheel.", features: ["Used - Good", "2-Piece", "Mesh Design", "Worldwide Shipping"] };
toolsData[113] = { title: "BC Racing BR Series Coilovers (Used Pair)", description: "Used BC Racing BR Series coilovers.", features: ["Used - Good", "30-Way Damping", "Height Adjustable", "Worldwide Shipping"] };
toolsData[114] = { title: "Eibach Pro-Alignment Rear Camber Kit (Used)", description: "Used Eibach Pro-Alignment rear camber kit.", features: ["Used - Good", "Eibach Quality", "Direct Fit", "Worldwide Shipping"] };
toolsData[115] = { title: "Lexus IS300 / GS300 Red Tubular Rear Upper Camber Kit (Used)", description: "Red tubular rear upper control arms.", features: ["Used - Good", "Adjustable", "Pillowball Ends", "Worldwide Shipping"] };
toolsData[116] = { title: "Lexus GS300 / GS430 Rear Brake Caliper Pair (Used)", description: "Used rear brake calipers, ADVICS brand.", features: ["Used - Good", "ADVICS Brand", "Pair Set", "Worldwide Shipping"] };
toolsData[117] = { title: "Centric Premium E-Coated Brake Rotors (Pair, Used)", description: "Used Centric Premium E-Coated brake rotors.", features: ["Used - Good", "E-Coated", "Rust Resistant", "Worldwide Shipping"] };
toolsData[118] = { title: "Hawk Performance Street Race Brake Pads (Used)", description: "Used Hawk Performance Street Race pads.", features: ["Used - Good", "Ferro-Carbon", "Track Ready", "Worldwide Shipping"] };
toolsData[119] = { title: "CX Racing T4 Turbo Manifold for Lexus IS300 / SC300 (2JZ-GE)", description: "Used CX Racing T4 turbo manifold.", features: ["Used - Good", "T4 Flange", "Stainless Steel", "Worldwide Shipping"] };
toolsData[120] = { title: "StopTech Slotted Sport Brake Rotor (Front, Used)", description: "Used StopTech Slotted Sport Brake Rotor.", features: ["Used - Good", "Slotted", "E-Coated", "Worldwide Shipping"] };

/* ===================================================== */
/* ============ DOM HELPER ============================= */
/* ===================================================== */

function $(id) {
    return document.getElementById(id);
}

function lockScroll() {
    document.body.style.overflow = 'hidden';
}

function unlockScroll() {
    document.body.style.overflow = '';
}

/* ===================================================== */
/* ============ PRODUCT MODAL (Cards 1-15) ============ */
/* ===================================================== */

function openModal(id) {
    var product = productsData[id];
    if (!product) {
        console.warn('Product not found:', id);
        return;
    }

    var modal = $('productModal');
    if (!modal) return;

    var titleEl = $('modalTitle');
    var subtitleEl = $('modalSubtitle');
    var descEl = $('modalDescription');
    var featEl = $('modalFeatures');
    var whatsappEl = $('modalWhatsapp');

    if (titleEl) titleEl.textContent = product.title;
    if (subtitleEl) subtitleEl.textContent = product.subtitle;
    if (descEl) descEl.textContent = product.description;

    if (featEl) {
        var html = '';
        product.features.forEach(function(f) {
            html += '<li><i class="fa-solid fa-circle-check"></i> ' + f + '</li>';
        });
        featEl.innerHTML = html;
    }

    if (whatsappEl) {
        var msg = encodeURIComponent('Hello LexusParts,\n\nI am interested in: ' + product.title + '\n\nPlease provide more details.');
        whatsappEl.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + msg;
    }

    modal.classList.add('active');
    lockScroll();
}

function closeModal() {
    var modal = $('productModal');
    if (modal) {
        modal.classList.remove('active');
        unlockScroll();
    }
}

/* ===================================================== */
/* ============ TOOL MODAL (All Tool Cards) =========== */
/* ===================================================== */

function openToolModal(id) {
    console.log('Opening tool modal for ID:', id);

    var tool = toolsData[id];
    if (!tool) {
        console.warn('Tool not found for ID:', id);
        return;
    }

    var modal = $('toolModal');

    /* If toolModal exists — use it */
    if (modal) {
        var titleEl = $('toolModalTitle');
        var descEl = $('toolModalDescription');
        var featEl = $('toolModalFeatures');
        var whatsappEl = $('toolModalWhatsapp');

        if (titleEl) titleEl.textContent = tool.title;
        if (descEl) descEl.textContent = tool.description;

        if (featEl) {
            var html = '';
            tool.features.forEach(function(f) {
                html += '<li><i class="fa-solid fa-circle-check"></i> ' + f + '</li>';
            });
            featEl.innerHTML = html;
        }

        if (whatsappEl) {
            var msg = encodeURIComponent('Hello LexusParts,\n\nI am interested in: ' + tool.title + '\n\nPlease provide more details.');
            whatsappEl.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + msg;
        }

        modal.classList.add('active');
        lockScroll();
        return;
    }

    /* Fallback — use productModal */
    var pModal = $('productModal');
    if (pModal) {
        var pTitle = $('modalTitle');
        var pSubtitle = $('modalSubtitle');
        var pDesc = $('modalDescription');
        var pFeat = $('modalFeatures');
        var pWhatsapp = $('modalWhatsapp');

        if (pTitle) pTitle.textContent = tool.title;
        if (pSubtitle) pSubtitle.textContent = 'Product Details';
        if (pDesc) pDesc.textContent = tool.description;

        if (pFeat) {
            var phtml = '';
            tool.features.forEach(function(f) {
                phtml += '<li><i class="fa-solid fa-circle-check"></i> ' + f + '</li>';
            });
            pFeat.innerHTML = phtml;
        }

        if (pWhatsapp) {
            var pmsg = encodeURIComponent('Hello LexusParts,\n\nI am interested in: ' + tool.title + '\n\nPlease provide more details.');
            pWhatsapp.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + pmsg;
        }

        pModal.classList.add('active');
        lockScroll();
    }
}

function closeToolModal() {
    var modal = $('toolModal');
    if (modal) {
        modal.classList.remove('active');
        unlockScroll();
    }
}

/* ===================================================== */
/* ============ RULES MODAL =========================== */
/* ===================================================== */

function openRulesModal() {
    var modal = $('rulesModal');
    if (modal) {
        modal.classList.add('active');
        lockScroll();
    }
}

function closeRulesModal() {
    var modal = $('rulesModal');
    if (modal) {
        modal.classList.remove('active');
        unlockScroll();
    }
}

/* ===================================================== */
/* ============ TERMS MODAL =========================== */
/* ===================================================== */

function openTermsModal() {
    var modal = $('termsModal');
    if (modal) {
        modal.classList.add('active');
        lockScroll();
    }
}

function closeTermsModal() {
    var modal = $('termsModal');
    if (modal) {
        modal.classList.remove('active');
        unlockScroll();
    }
}

/* ===================================================== */
/* ============ SUCCESS POPUP ========================= */
/* ===================================================== */

function closeSuccessPopup() {
    var popup = $('successPopup');
    if (popup) {
        popup.classList.remove('active');
        unlockScroll();
    }
}

/* ===================================================== */
/* ============ SHOW MORE POPUP ======================= */
/* ===================================================== */

function openShowMorePopup() {
    var popup = $('popupOverlay');
    if (popup) {
        popup.classList.add('active');
        lockScroll();
        popup.scrollTop = 0;
    }
}

function closeShowMorePopup() {
    var popup = $('popupOverlay');
    if (popup) {
        popup.classList.remove('active');
        unlockScroll();
    }
}

/* ===================================================== */
/* ============ REGISTRATION FORM ===================== */
/* ===================================================== */

function handleRegistration(event) {
    event.preventDefault();

    var firstName = ($('regFirstName') || {}).value || '';
    var lastName  = ($('regLastName') || {}).value || '';
    var email     = ($('regEmail') || {}).value || '';
    var phone     = ($('regPhone') || {}).value || '';
    var dob       = ($('regDob') || {}).value || '';
    var genderEl  = document.querySelector('input[name="gender"]:checked');
    var gender    = genderEl ? genderEl.value : '';
    var carModel  = ($('regCarModel') || {}).value || '';
    var carYear   = ($('regCarYear') || {}).value || '';
    var vin       = ($('regVin') || {}).value || 'N/A';
    var mileage   = ($('regMileage') || {}).value || 'N/A';
    var address   = ($('regAddress') || {}).value || '';
    var city      = ($('regCity') || {}).value || '';
    var state     = ($('regState') || {}).value || '';
    var zip       = ($('regZip') || {}).value || '';
    var country   = ($('regCountry') || {}).value || '';
    var password  = ($('regPassword') || {}).value || '';
    var confirmP  = ($('regConfirmPassword') || {}).value || '';

    if (password !== confirmP) {
        alert('Passwords do not match! Please re-enter.');
        return;
    }

    var emailSubject = 'New Registration - ' + firstName + ' ' + lastName;
    var emailBody =
        'NEW CUSTOMER REGISTRATION\n\n' +
        'Name: ' + firstName + ' ' + lastName + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'DOB: ' + dob + '\n' +
        'Gender: ' + gender + '\n\n' +
        'Car: ' + carModel + ' (' + carYear + ')\n' +
        'VIN: ' + vin + '\n' +
        'Mileage: ' + mileage + '\n\n' +
        'Address: ' + address + '\n' +
        'City: ' + city + ', ' + state + ' ' + zip + '\n' +
        'Country: ' + country;

    var whatsappMsg =
        '*NEW REGISTRATION*%0A%0A' +
        'Name: ' + firstName + ' ' + lastName + '%0A' +
        'Email: ' + email + '%0A' +
        'Phone: ' + phone + '%0A' +
        'DOB: ' + dob + '%0A' +
        'Gender: ' + gender + '%0A%0A' +
        'Car: ' + carModel + ' (' + carYear + ')%0A' +
        'VIN: ' + vin + '%0A' +
        'Mileage: ' + mileage + '%0A%0A' +
        'Address: ' + address + '%0A' +
        'City: ' + city + ', ' + state + ' ' + zip + '%0A' +
        'Country: ' + country;

    /* Open mailto */
    window.location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);

    /* Open WhatsApp */
    setTimeout(function () {
        window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + whatsappMsg, '_blank');
    }, 1200);

    /* Show success popup */
    var successPopup = $('successPopup');
    if (successPopup) {
        successPopup.classList.add('active');
        lockScroll();
    }

    event.target.reset();
}

/* ===================================================== */
/* ============ GLOBAL EVENT DELEGATION =============== */
/* ============ (Fallback for any missed button) ====== */
/* ===================================================== */

document.addEventListener('click', function (e) {
    /* Handle any [data-action] button */
    var target = e.target.closest('button, a');
    if (!target) return;

    /* Handle "Show More Parts" button */
    if (target.id === 'showMoreBtn') {
        e.preventDefault();
        openShowMorePopup();
        return;
    }

    /* Handle "Close Popup" button */
    if (target.id === 'closePopup') {
        e.preventDefault();
        closeShowMorePopup();
        return;
    }

    /* Handle any element with onclick="openToolModal(...)" or onclick="openModal(...)"
       (This is a fallback — inline onclick should already work) */
});

/* ===================================================== */
/* ============ SMOOTH SCROLL ========================= */
/* ===================================================== */

document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href || href === '#') return;
    if (link.hasAttribute('onclick')) return;

    var target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        var headerOffset = 100;
        var elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'smooth'
        });
    }
});

/* ===================================================== */
/* ============ MODAL BACKDROP CLICK ================== */
/* ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* Close modals on backdrop click */
    var modals = ['productModal', 'toolModal', 'rulesModal', 'termsModal'];
    modals.forEach(function (id) {
        var modal = $(id);
        if (modal) {
            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    unlockScroll();
                }
            });
        }
    });

    /* Success popup backdrop */
    var successPopup = $('successPopup');
    if (successPopup) {
        successPopup.addEventListener('click', function (e) {
            if (e.target === successPopup) {
                successPopup.classList.remove('active');
                unlockScroll();
            }
        });
    }

    /* Popup overlay backdrop */
    var popupOverlay = $('popupOverlay');
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('active');
                unlockScroll();
            }
        });
    }

    /* ESC key — close all */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            var all = ['productModal', 'toolModal', 'rulesModal', 'termsModal', 'successPopup', 'popupOverlay'];
            all.forEach(function (id) {
                var el = $(id);
                if (el && el.classList.contains('active')) {
                    el.classList.remove('active');
                    unlockScroll();
                }
            });
        }
    });

    console.log('===========================================');
    console.log('LexusParts — v11.0 Loaded');
    console.log('Products Loaded: ' + Object.keys(productsData).length);
    console.log('Tools Loaded: ' + Object.keys(toolsData).length);
    console.log('Email: ' + CONFIG.email);
    console.log('WhatsApp: ' + CONFIG.phone);
    console.log('===========================================');
});

/* ===================================================== */
/* ============ GLOBAL EXPORTS ======================== */
/* ===================================================== */

window.openModal = openModal;
window.closeModal = closeModal;
window.openToolModal = openToolModal;
window.closeToolModal = closeToolModal;
window.openRulesModal = openRulesModal;
window.closeRulesModal = closeRulesModal;
window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;
window.closeSuccessPopup = closeSuccessPopup;
window.openShowMorePopup = openShowMorePopup;
window.closeShowMorePopup = closeShowMorePopup;
window.handleRegistration = handleRegistration;

/* ==========================================================================
   ADVANCED POPUP SYSTEM — v2.0
   Features:
   - Show More Button → Popup Open
   - Close Button / Outside Click / ESC Key → Popup Close
   - Smooth Animations
   - Body Scroll Lock
   - Loading State on Button
   - Auto Focus Trap (Accessibility)
   - Popup Open/Close Events
   - Multi-language Ready
   ========================================================================== */

(function () {
    'use strict';

    // ============================================================
    // CONFIGURATION
    // ============================================================
    const CONFIG = {
        popupId:        'popupOverlay',
        openBtnId:      'showMoreBtn',
        closeBtnId:     'closePopup',
        popupGridId:    'popupToolsGrid',
        animationSpeed: 350,          // ms
        lockScroll:     true,         // Background scroll lock
        closeOnEsc:     true,         // ESC key closes popup
        closeOnOverlay: true,         // Click outside closes popup
        loadingTime:    200,          // Button loading animation time (ms)
        focusTrap:      true,         // Keep keyboard focus inside popup
        debug:          false         // Set true to see console logs
    };

    // ============================================================
    // STATE
    // ============================================================
    let popupOverlay   = null;
    let openBtn        = null;
    let closeBtn       = null;
    let popupGrid      = null;
    let lastFocusedEl  = null;
    let isPopupOpen    = false;

    // ============================================================
    // UTILITY FUNCTIONS
    // ============================================================
    const log = (...args) => { if (CONFIG.debug) console.log('[Popup]', ...args); };

    const qs  = (sel) => document.querySelector(sel);
    const qsId = (id)  => document.getElementById(id);

    function lockBodyScroll() {
        if (!CONFIG.lockScroll) return;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = getScrollbarWidth() + 'px';
    }

    function unlockBodyScroll() {
        if (!CONFIG.lockScroll) return;
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }

    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    // ============================================================
    // POPUP OPEN
    // ============================================================
    function openPopup() {
        if (!popupOverlay || isPopupOpen) return;

        log('Opening popup...');

        // Button loading state
        if (openBtn) {
            openBtn.disabled = true;
            openBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
        }

        setTimeout(() => {
            // Show popup
            popupOverlay.classList.add('active');
            popupOverlay.style.display = 'block';
            document.body.classList.add('popup-open');
            lockBodyScroll();
            isPopupOpen = true;

            // Restore button
            if (openBtn) {
                openBtn.disabled = false;
                openBtn.innerHTML = '<i class="fa-solid fa-table-cells-large"></i> Show More Parts';
            }

            // Smooth scroll to top of popup
            popupOverlay.scrollTop = 0;

            // Focus first focusable element
            if (CONFIG.focusTrap) {
                setTimeout(() => {
                    const focusable = popupOverlay.querySelector(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (focusable) focusable.focus();
                }, 100);
            }

            // Custom event
            document.dispatchEvent(new CustomEvent('popup:opened'));

            log('Popup opened ✅');
        }, CONFIG.loadingTime);
    }

    // ============================================================
    // POPUP CLOSE
    // ============================================================
    function closePopup() {
        if (!popupOverlay || !isPopupOpen) return;

        log('Closing popup...');

        // Add closing animation class
        popupOverlay.classList.add('closing');

        setTimeout(() => {
            popupOverlay.classList.remove('active');
            popupOverlay.classList.remove('closing');
            popupOverlay.style.display = '';
            document.body.classList.remove('popup-open');
            unlockBodyScroll();
            isPopupOpen = false;

            // Return focus to Show More button
            if (openBtn && CONFIG.focusTrap) {
                openBtn.focus();
            }

            // Custom event
            document.dispatchEvent(new CustomEvent('popup:closed'));

            log('Popup closed ✅');
        }, CONFIG.animationSpeed);
    }

    // ============================================================
    // TOGGLE POPUP
    // ============================================================
    function togglePopup() {
        if (isPopupOpen) {
            closePopup();
        } else {
            openPopup();
        }
    }

    // ============================================================
    // FOCUS TRAP
    // ============================================================
    function trapFocus(e) {
        if (!isPopupOpen || !CONFIG.focusTrap) return;
        if (e.key !== 'Tab') return;

        const focusables = popupOverlay.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last  = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    // ============================================================
    // EVENT BINDING
    // ============================================================
    function bindEvents() {
        // Show More Button Click
        if (openBtn) {
            openBtn.addEventListener('click', function (e) {
                e.preventDefault();
                openPopup();
            });
        }

        // Close Button Click
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                closePopup();
            });
        }

        // Click Outside (Overlay)
        if (popupOverlay && CONFIG.closeOnOverlay) {
            popupOverlay.addEventListener('click', function (e) {
                if (e.target === popupOverlay) {
                    closePopup();
                }
            });
        }

        // ESC Key
        if (CONFIG.closeOnEsc) {
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && isPopupOpen) {
                    closePopup();
                }
                trapFocus(e);
            });
        }

        // Prevent clicks inside popup-box from closing
        const popupBox = popupOverlay ? popupOverlay.querySelector('.popup-box') : null;
        if (popupBox) {
            popupBox.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
    }

    // ============================================================
    // LAZY LOAD IMAGES (Performance Boost)
    // ============================================================
    function lazyLoadImages() {
        if (!popupGrid) return;
        const images = popupGrid.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
        log(`Lazy loading enabled for ${images.length} images`);
    }

    // ============================================================
    // INIT
    // ============================================================
    function init() {
        log('Initializing Advanced Popup System...');

        // Grab elements
        popupOverlay = qsId(CONFIG.popupId);
        openBtn      = qsId(CONFIG.openBtnId);
        closeBtn     = qsId(CONFIG.closeBtnId);
        popupGrid    = qsId(CONFIG.popupGridId);

        // Check if all elements exist
        if (!popupOverlay) {
            console.warn('[Popup] popupOverlay element not found!');
            return;
        }
        if (!openBtn) {
            console.warn('[Popup] Show More button not found!');
            return;
        }
        if (!closeBtn) {
            console.warn('[Popup] Close button not found!');
        }

        // Set initial state
        popupOverlay.style.display = '';
        popupOverlay.classList.remove('active');

        // Bind all events
        bindEvents();

        // Optimize images
        lazyLoadImages();

        log('✅ Popup System Ready');
    }

    // ============================================================
    // RUN ON DOM READY
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ============================================================
    // PUBLIC API (Access from console or other scripts)
    // ============================================================
    window.LexusPopup = {
        open:  openPopup,
        close: closePopup,
        toggle: togglePopup,
        isOpen: () => isPopupOpen
    };

})();


