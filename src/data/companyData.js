// Data repository for Panorama Automotive Industries Pvt. Ltd.
// Accurate information pulled from website & enhanced for tier-1 automotive enterprise showcase.

export const COMPANY = {
  name: "Panorama Automotive Industries Pvt. Ltd.",
  shortName: "Panorama Automotive",
  established: 1977,
  tagline: "Tier-1 Supplier for Automotive O.E.M.s",
  summary:
    "Manufacturers of Specialized Fabricated Assemblies, Precision Machined Parts for Hydraulic Systems, and Allied Rubber Bonded Components.",
  mission:
    "To manufacture and deliver zero-defect precision automotive components using cutting-edge engineering, sustainable practices, and strict quality compliance for global OEM leaders.",
  vision:
    "To be the premier global Tier-1 automotive component manufacturer, recognized for innovation in gear shift systems, hydraulic precision, and metal-to-rubber bonding technology.",
  certs: [
    {
      title: "IATF 16949 / TS Certification",
      code: "TS Certificate",
      desc: "International Automotive Quality Management System Standards for design, development, and manufacturing.",
      pdfUrl: "/docs/IATF_16949_TS_Certificate_Panorama.pdf",
    },
    {
      title: "DUNS Certification",
      code: "D-U-N-S Registered",
      desc: "Globally recognized business identity verification for international automotive trade.",
      pdfUrl: "/docs/DUNS_Certification_Panorama.pdf",
    },
    {
      title: "ISO 9001:2015 Quality System",
      code: "ISO 9001",
      desc: "Rigorous quality management protocols across design, production, and testing processes.",
      pdfUrl: "/docs/ISO_9001_Quality_System_Panorama.pdf",
    },
  ],
  stats: [
    { value: "1977", label: "Year Established", suffix: "" },
    { value: "48+", label: "Years of Engineering Excellence", suffix: "" },
    { value: "2", label: "State-of-the-Art Manufacturing Plants", suffix: "" },
    { value: "9+", label: "Major Global OEM Clients", suffix: "" },
    { value: "500+", label: "Active Component SKUs Produced", suffix: "" },
    { value: "99.8%", label: "On-Time Delivery & Quality Score", suffix: "" },
  ],
  milestones: [
    { year: "1977", title: "Inception in Pune", desc: "Started operations as a specialized precision machining unit for local industrial equipment." },
    { year: "1988", title: "Tier-1 OEM Entry", desc: "Secured first direct Tier-1 supplier contract with TATA Motors for gear shift linkage components." },
    { year: "1999", title: "Rubber-to-Metal Division", desc: "Expanded manufacturing with dedicated rubber moulding & metal bonding facilities." },
    { year: "2008", title: "TS Certification", desc: "Achieved prestigious automotive quality certification (TS Certification & D-U-N-S registration)." },
    { year: "2015", title: "Sidcul Plant Expansion", desc: "Commissioned Plant 02 in TATA Vendor Park, Sidcul, Uttarakhand for high-capacity OEM delivery." },
    { year: "2024", title: "AMT & Hybrid Systems", desc: "Introduced advanced Automated Manual Transmission (AMT) gear shift assemblies & lightweight composite knobs." },
  ]
};

export const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "gear-knobs", name: "Gear Shifter Knobs" },
  { id: "gear-linkage", name: "Gear Shift Linkages" },
  { id: "hydraulic-parts", name: "Precision Hydraulic Parts" },
  { id: "rubber-metal", name: "Rubber-to-Metal Bonded" },
  { id: "tensioning-rods", name: "Tensioning Rod Assemblies" },
  { id: "tractors-exports", name: "2-Wheeler, Tractor & Export" },
];

export const PRODUCTS = [
  {
    id: "gsk-01",
    tag: "DWG-01 / GSK",
    category: "gear-knobs",
    title: "Gear Shifter Knobs & AMT Assemblies",
    image: "/images/gear_shift_knob.png",
    pdfDoc: {
      docNo: "PDF-TDS-GSK-2026",
      revision: "Rev 4.2",
      title: "Technical Data Sheet — Gear Shifter Knobs (AMT & Manual)",
      issuedBy: "Panorama QA & Engineering Dept.",
      standard: "IATF 16949 / OEM Spec 987-PA",
    },
    shortDesc: "Including AMT (Automated Manual Transmission) variants with custom ergonomics and high-grade finishes.",
    fullDesc:
      "Panorama Automotive is a pioneer in manufacturing ergonomic gear shift knobs for passenger cars, commercial vehicles, and heavy trucks. Our capabilities encompass full internal plastic/metal threaded inserts, press-fit assemblies, real leather hand-stitching, multi-color decorative inserts, and electroplated chrome finishes.",
    applications: ["Passenger Vehicles", "Commercial Trucks", "Automated Manual Transmission (AMT)", "Electric Vehicles"],
    features: [
      "High-grade ABS / Nylon glass-filled inner core",
      "Self-tightening plastic threaded insert or heavy-duty metal threaded insert",
      "Premium chrome electroplating & anti-scratch painting",
      "Genuine leather hand-stitched & synthetic texture wraps",
      "Over-moulding for tactile soft-grip feel",
      "Vibration dampening and fatigue testing up to 1,000,000 shift cycles",
    ],
    specs: [
      { label: "Material Options", value: "Polyamide (PA66-GF30), ABS, Polyurethane, Genuine Leather, Aluminum" },
      { label: "Insert Types", value: "Self-tightening plastic thread, M8/M10/M12 brass/steel insert, Press-fit" },
      { label: "Surface Finish", value: "Tri-chrome electroplating, soft-touch paint, leather stitch, laser etched emblem" },
      { label: "Operating Temp", value: "-40°C to +110°C" },
      { label: "Quality Standard", value: "OEM Spec / IATF 16949 compliant" },
    ],
    cadAvailable: true,
  },
  {
    id: "agl-02",
    tag: "DWG-02 / AGL",
    category: "gear-linkage",
    title: "Assembly Gear Shift Linkage",
    image: "/images/shift_linkage.png",
    pdfDoc: {
      docNo: "PDF-TDS-AGL-2026",
      revision: "Rev 3.1",
      title: "Technical Data Sheet — Gear Shift Linkage Assemblies",
      issuedBy: "Panorama Chassis R&D Division",
      standard: "SAE J1939 / ISO 9001:2015",
    },
    shortDesc: "Complete linkage systems engineered for precise gear engagement across passenger cars and commercial vehicles.",
    fullDesc:
      "High-precision gear shift linkage assemblies designed to withstand continuous stress and deliver smooth gear selection. Manufactured with rigid fabricated steel tubes, precision ball joints, anti-backlash nylon bushings, and corrosion-resistant surface coatings.",
    applications: ["Passenger Cars", "Light Commercial Vehicles (LCV)", "Heavy Commercial Vehicles (HCV)", "Off-Highway Equipment"],
    features: [
      "Rigid tubular steel & solid alloy rod construction",
      "Integrated low-friction ball sockets & spherical bearings",
      "Zinc-nickel plating for 720+ hour salt spray resistance",
      "Custom anti-vibration damping bushings",
      "Pre-adjusted length setting for quick OEM assembly line drop-in",
    ],
    specs: [
      { label: "Tube Material", value: "ST37 / ST52 precision seamless steel tubing" },
      { label: "Joint Type", value: "Hardened steel ball studs with POM self-lubricating race" },
      { label: "Coating", value: "Zinc-Trivalent Passivation (Cr3+), Black E-Coat" },
      { label: "Load Capacity", value: "Tensile proof load up to 15 kN" },
      { label: "Articulating Angle", value: "Up to ±35° multi-axis rotation" },
    ],
    cadAvailable: true,
  },
  {
    id: "pmp-03",
    tag: "DWG-03 / PMP",
    category: "hydraulic-parts",
    title: "Precision Machined Hydraulic System Parts",
    image: "/images/hydraulic_part.png",
    pdfDoc: {
      docNo: "PDF-TDS-PMP-2026",
      revision: "Rev 5.0",
      title: "Technical Data Sheet — High-Pressure Hydraulic Valve Spools & Pistons",
      issuedBy: "Panorama Precision Metrology Lab",
      standard: "DIN 24340 / ISO 4401 Hydraulic Standards",
    },
    shortDesc: "Ultra-tight tolerance machined components for automotive hydraulic breaking, steering, and transmission systems.",
    fullDesc:
      "Crafted on state-of-the-art CNC and VMC turning centers, our precision hydraulic parts serve critical roles in vehicle steering units, brake master cylinders, and transmission control valves. Inspected with 3D Coordinate Measuring Machines (CMM) to ensure micron-level accuracy.",
    applications: ["Hydraulic Braking Systems", "Power Steering Units", "Hydro-Mechanical Transmissions", "Industrial Hydraulics"],
    features: [
      "Micron-level dimensional tolerances (down to ±0.005 mm)",
      "High-grade alloy steel, stainless steel, and forged aluminum alloys",
      "Induction hardening and stress-relieved heat treatment",
      "Micro-honed internal bores for minimal friction and fluid leak prevention",
      "100% optical sorting & ultrasonic cleaning post-machining",
    ],
    specs: [
      { label: "Machining Accuracy", value: "Tolerance within ±0.005 mm" },
      { label: "Surface Roughness", value: "Ra 0.2 to Ra 0.8 µm micro-finish" },
      { label: "Raw Materials", value: "EN8, EN19, SS316, Al6061-T6, C45 Steel" },
      { label: "Inspection Tool", value: "Mitutoyo 3D CMM & Laser Micrometer" },
      { label: "Pressure Rating", value: "Tested up to 350 bar fluid pressure" },
    ],
    cadAvailable: true,
  },
  {
    id: "mtr-04",
    tag: "DWG-04 / MTR",
    category: "rubber-metal",
    title: "Metal-to-Rubber Bonded Components",
    image: "/images/factory_plant.png",
    pdfDoc: {
      docNo: "PDF-TDS-MTR-2026",
      revision: "Rev 2.4",
      title: "Technical Data Sheet — Elastomeric Vulcanized Rubber Mounts",
      issuedBy: "Panorama Rubber Polymer Division",
      standard: "ASTM D429 Bond Strength Standard",
    },
    shortDesc: "Vibration isolation mounts, heavy-duty engine bushings, and shock absorber bonded parts.",
    fullDesc:
      "Our specialized rubber-to-metal bonding division utilizes advanced chemical surface primers, shot-blasting, and transfer moulding machines. We bond natural, EPDM, Nitrile, and Silicone rubbers to steel and aluminum components to isolate NVH (Noise, Vibration, Harshness).",
    applications: ["Engine & Powertrain Mounts", "Suspension Bushings", "Cab Isolation Damping", "Hydraulic Pump Mounts"],
    features: [
      "Superior vulcanization bonding strength exceeding rubber tear limits",
      "Custom elastomeric compounding for extreme thermal and oil environments",
      "Zero-delamination guarantee under high cyclic shear stress",
      "Shot-blasted and phosphated metal substrate preparation",
      "Full rheometer & Mooney viscosity compound verification",
    ],
    specs: [
      { label: "Elastomer Types", value: "NR, EPDM, NBR, HNBR, Silicone, Neoprene" },
      { label: "Metal Substrates", value: "Mild Steel, Stainless Steel, Forged Aluminum, Brass" },
      { label: "Hardness Range", value: "40 to 90 Shore A" },
      { label: "Bond Strength", value: "ASTM D429 Method B (Peel test > 15 N/mm)" },
      { label: "NVH Reduction", value: "Optimized loss factor for dampening" },
    ],
    cadAvailable: true,
  },
  {
    id: "atr-05",
    tag: "DWG-05 / ATR",
    category: "tensioning-rods",
    title: "Assembly Tensioning Rod, Complete",
    image: "/images/shift_linkage.png",
    pdfDoc: {
      docNo: "PDF-TDS-ATR-2026",
      revision: "Rev 1.8",
      title: "Technical Data Sheet — Forged Tensioning Rod Assemblies",
      issuedBy: "Panorama Heavy Machinery Division",
      standard: "ISO 898-1 Tensile Standard",
    },
    shortDesc: "Heavy-duty tensioning assemblies for suspension, drive train alignment, and agricultural chassis systems.",
    fullDesc:
      "Fully integrated tensioning rod assemblies engineered for extreme tensile and compression loads in heavy trucks, tractors, and off-road machinery. Supplied as ready-to-fit OEM assemblies with turnbuckle adjustment mechanisms, forged eyelets, and locknuts.",
    applications: ["Chassis Suspension Damping", "Tractor Rear Linkages", "Heavy Commercial Axle Locators", "Industrial Conveyors"],
    features: [
      "High-tensile forged steel eyes & threaded rod bodies",
      "Precision thread rolling for enhanced fatigue endurance",
      "Corrosion resistant finish suitable for outdoor agricultural environments",
      "Integrated rubber/polyurethane bush dampers",
      "Calibrated torque retention locking system",
    ],
    specs: [
      { label: "Thread Sizes", value: "M14 x 1.5 to M36 x 3.0 (Left/Right hand threads)" },
      { label: "Tensile Strength", value: "Grade 8.8 / Grade 10.9 forged alloy steel" },
      { label: "Length Range", value: "250 mm to 1500 mm adjustable" },
      { label: "Coating", value: "Hot-dip Galvanized or Electro-Black Oxide" },
    ],
    cadAvailable: true,
  },
  {
    id: "exp-06",
    tag: "DWG-06 / EXP",
    category: "tractors-exports",
    title: "2-Wheeler, Tractor & Export Components",
    image: "/images/gear_shift_knob.png",
    pdfDoc: {
      docNo: "PDF-TDS-EXP-2026",
      revision: "Rev 4.0",
      title: "Technical Data Sheet — Export Sub-Assemblies & 2-Wheeler Components",
      issuedBy: "Panorama Export & International Compliance Desk",
      standard: "RoHS / REACH Compliant",
    },
    shortDesc: "Specialized precision assemblies and export-grade automotive components meeting international OEM specs.",
    fullDesc:
      "Export-ready component lines manufactured for global OEM standards across Europe, Americas, and South-East Asia. Includes custom footrests, lever pivot assemblies, tractor linkage pins, bracket fabrications, and specialized rubber dampening units.",
    applications: ["Motorcycles & Scooters", "Agricultural Tractors", "Global Export Spare Parts", "Industrial Machinery"],
    features: [
      "Custom OEM blueprint compliance & reverse engineering capability",
      "Heavy-duty sea-freight protective packaging (VCI anti-corrosion)",
      "Full material test certificate (3.1 MTR) with every consignment",
      "Rigid robotic MIG / TIG welding and weld seam inspection",
    ],
    specs: [
      { label: "Compliance", value: "RoHS, REACH, IATF 16949, ISO 14001" },
      { label: "Packaging", value: "VCI corrosion-inhibitor poly bags, seaworthy wooden crates" },
      { label: "Export Markets", value: "North America, Europe, SE Asia, Middle East" },
    ],
    cadAvailable: true,
  },
];

export const CLIENTS = [
  {
    name: "TATA Motors",
    tagline: "Commercial & Passenger Vehicles",
    relationship: "Supplier since 1988",
    logoText: "TATA",
    category: "Automotive OEM",
  },
  {
    name: "Lucas-TVS",
    tagline: "Automotive Electrical & Systems",
    relationship: "Tier-1 Supply Partner",
    logoText: "LUCAS-TVS",
    category: "Electrical & Sub-assemblies",
  },
  {
    name: "Mahindra & Mahindra",
    tagline: "SUVs, Tractors & Commercial Vehicles",
    relationship: "OEM Strategic Vendor",
    logoText: "MAHINDRA",
    category: "Automotive & Tractor OEM",
  },
  {
    name: "Ashok Leyland",
    tagline: "Heavy Commercial Vehicles & Buses",
    relationship: "Long-term Chassis Partner",
    logoText: "ASHOK LEYLAND",
    category: "Commercial Vehicles",
  },
  {
    name: "Atlas Copco",
    tagline: "Industrial Compressors & Mining",
    relationship: "Hydraulic Components Partner",
    logoText: "ATLAS COPCO",
    category: "Industrial Equipment",
  },
  {
    name: "Inductotherm",
    tagline: "Induction Heating & Thermal Systems",
    relationship: "Machined Sub-assemblies",
    logoText: "INDUCTOTHERM",
    category: "Thermal & Heavy Machinery",
  },
  {
    name: "Fiat Chrysler (Stellantis)",
    tagline: "Global Passenger Vehicles",
    relationship: "Tier-1 Gear Shifter Supplier",
    logoText: "FIAT",
    category: "Global Automotive",
  },
  {
    name: "Beru Systems",
    tagline: "Ignition & Cold-Start Technologies",
    relationship: "Precision Metal Components",
    logoText: "BERU",
    category: "Ignition & Sensors",
  },
  {
    name: "Sonnax Industries",
    tagline: "Transmission Specialties",
    relationship: "Hydraulic Valve Supplier",
    logoText: "SONNAX",
    category: "Transmission & Drivetrain",
  },
];

export const PLANTS = [
  {
    id: "plant-pune",
    label: "Plant 01 (Headquarters)",
    name: "Hadapsar Manufacturing Unit",
    city: "Pune, Maharashtra",
    state: "Maharashtra",
    zip: "411013",
    address: "Plot No. 98 A / 15 A, Hadapsar Industrial Estate, Hadapsar, Pune - 411013, Maharashtra, India.",
    highlights: ["Tool Room & Die Design", "CNC & VMC Machining Center", "Rubber Compound Moulding", "R&D & Metrology Lab"],
    capacity: "Over 120,000 assemblies per month",
    builtUpArea: "45,000 sq. ft.",
    coordinates: { lat: 18.5089, lng: 73.926 },
    image: "/images/factory_plant.png",
  },
  {
    id: "plant-sidcul",
    label: "Plant 02 (OEM Dedicated)",
    name: "Sidcul TATA Vendor Park Unit",
    city: "Pantnagar / Sidcul, Uttarakhand",
    state: "Uttarakhand",
    zip: "263153",
    address: "Plot No. 10, Sector 11, TATA Vendor Park, Sidcul, Uttarakhand, India.",
    highlights: ["Just-In-Time (JIT) OEM Delivery", "Gear Shift Linkage Assembly Lines", "Automatic Electroplating Line", "Sub-assembly Warehousing"],
    capacity: "Over 200,000 linkage sets per month",
    builtUpArea: "60,000 sq. ft.",
    coordinates: { lat: 29.0274, lng: 79.4005 },
    image: "/images/factory_plant.png",
  },
];

// Specific phone numbers commented out per deployment settings
export const PHONES = [
  // { label: "Corporate Sales", number: "+91 93702 79751" },
  // { label: "Plant Manager (Pune)", number: "+91 98220 08283" },
  // { label: "OEM Enquiry", number: "+91 93702 79753" },
  // { label: "Export Desk", number: "+91 87667 80782" },
  { label: "Corporate Sales Desk", number: "Available via Contact Form Enquiry" },
];

export const EMAIL = "enquiry@panoramaauto.com";

export const CAPABILITIES = [
  {
    title: "Precision Machining",
    desc: "CNC Turning Centers & 4-Axis Vertical Machining Centers (VMC) providing tolerance accuracy down to ±0.005mm.",
    icon: "Cpu",
    image: "/images/hydraulic_part.png",
  },
  {
    title: "Rubber-to-Metal Bonding",
    desc: "High-pressure transfer & injection moulding presses for seamless vulcanization between custom elastomers and metal parts.",
    icon: "Flame",
    image: "/images/factory_plant.png",
  },
  {
    title: "Gear Shift Assembly Lines",
    desc: "Dedicated automated assembly stations equipped with poka-yoke error proofing, torque check, and shift travel force sensors.",
    icon: "Sliders",
    image: "/images/shift_linkage.png",
  },
  {
    title: "Electroplating & Surface Treatment",
    desc: "In-house tri-chrome plating, zinc-nickel passivation, and black phosphate lines for extreme salt spray corrosion resistance.",
    icon: "Sparkles",
    image: "/images/gear_shift_knob.png",
  },
  {
    title: "Tooling & Die Design",
    desc: "Complete in-house CAD/CAM tooling facility for progressive stamping dies, plastic injection moulds, and fixture fabrication.",
    icon: "Wrench",
    image: "/images/shift_linkage.png",
  },
  {
    title: "Metrology & Quality Lab",
    desc: "Mitutoyo 3D CMM, profile projectors, tensile strength testers, rubber rheometers, and salt spray corrosion chamber.",
    icon: "ShieldCheck",
    image: "/images/hydraulic_part.png",
  },
];
