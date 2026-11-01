export type ProjectImage = {
  src: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectVideo = {
  src: string;
  caption: string;
};

export type Project = {
  title: string;
  slug: string;
  organization?: string;
  category: string;
  description: string;
  mediaNotes?: string;
  video?: string;
  videos?: ProjectVideo[];
  images: ProjectImage[];
  hardware: string[];
  software: string[];
  protocols: string[];
  features: string[];
  developmentStatus: string;
  featured: boolean;
  visual: "board" | "monitor" | "wave" | "software";
  architecture: string[];
  projectDetails: { title: string; content: string }[];
  featureStatus?: {
    name: string;
    status: "Implemented" | "Planned" | "To be confirmed";
  }[];
};

export const categories = [
  "All Projects",
  "Medical Electronics",
  "Industrial Automation",
  "IoT & Monitoring",
] as const;

export const projects: Project[] = [
  // 1) Wiring Harness - pakka no changes required
  {
    title: "Wiring Harness Navigation & Continuity System",
    slug: "wiring-harness-navigation",
    organization: "Phoenix Process Automation",
    category: "Industrial Automation",
    description:
      "Multi-controller industrial guidance and continuity testing system integrating LPC1768 motherboard, distributed LED indicator cards, proximity sensing, and C# .NET desktop software.",
    mediaNotes:
      "Hardware & Software Imagery: Complete visual overview covering custom PCB cards (motherboard, 1/20/96 LED cards, 40-ch continuity tester, 7-segment display, mmWave sensor board), firmware workspace, and on-site factory assembly floor software.",
    images: [
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/Motherboard.png",
        caption: "Main Controller Motherboard — LPC1768 MCU, RS485 bus hub, and power regulation",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/1_LED_Card.png",
        caption: "1-LED Indicator Card — Compact pin-point assembly guide",
        width: 1774,
        height: 887,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/20_LED_Card.png",
        caption: "20-LED Indicator Navigation Card — Multi-channel visual guidance module",
        width: 1254,
        height: 1254,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/96_LED_Card.png",
        caption: "96-LED High-Density Indication Card — High-channel-count assembly board",
        width: 1254,
        height: 1254,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/Continuity_Card_40.png",
        caption: "40-Channel Continuity Card — Automated multi-point harness integrity verification",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/Seven_Segment_card.png",
        caption: "Seven-Segment Display Card — Numerical operator readout module",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/Servo_Controller_mmWaveSensor.png",
        caption: "Servo Controller & mmWave Sensor Card — Mechanical actuation and proximity sensing",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/Proximitysensor.png",
        caption: "Optical Proximity Sensor Card — Component presence detection",
        width: 1774,
        height: 887,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/Firmware Development in MCUXpresso.jpg",
        caption: "Firmware Development Environment in MCUXpresso IDE — LPC1768 embedded firmware",
        width: 1280,
        height: 662,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/GTI App Login Page.jpeg",
        caption: "GTI Desktop Application — Secure operator and supervisor login screen",
        width: 1280,
        height: 716,
      },
      {
        src: "/ImagesFolder/PhoeneixProcessAutomation_WiringHarnessNavigationSystem/GTI App in Site.jpeg",
        caption: "GTI Application In-Site — Live deployment on the manufacturing assembly floor",
        width: 1280,
        height: 960,
      },
    ],
    hardware: [
      "LPC1768",
      "STM8S003",
      "STM32F302",
      "MSP430FR",
      "VCNL4040",
      "RS485 Bus",
    ],
    software: ["Embedded C", "FreeRTOS", "C# .NET", "SQL Server"],
    protocols: ["RS485", "UART", "I2C", "SPI"],
    features: [
      "Distributed multi-controller hardware network",
      "Visual LED navigation for harness route assembly",
      "Multi-channel continuity and fault testing",
      "PC-to-controller sync with real-time assembly logging",
    ],
    developmentStatus: "Engineering development & on-site deployment",
    featured: true,
    visual: "board",
    architecture: [
      "Desktop Application (C# .NET)",
      "LPC1768 Main Controller",
      "RS485 Industrial Bus",
      "Modular LED & Continuity Cards",
    ],
    projectDetails: [
      {
        title: "Hardware & System Design",
        content:
          "Custom-designed LPC1768 motherboard communicating over RS485 with distributed STM8S LED drivers, STM32 continuity testers, and optical proximity sensors to guide manual wire harness routing with zero defects.",
      },
    ],
  },

  // 2) ICIA - SmartRTMS alone
  {
    title: "ICIA — Smart RTMS (Real-Time Monitoring System)",
    slug: "smart-rtms",
    organization: "Industrial Connect Innovation & Automation",
    category: "IoT & Monitoring",
    description:
      "Industrial IoT monitoring and access control platform combining capacitive touchscreen, RFID, QR engine, tower lamp control, and AC power monitoring.",
    mediaNotes:
      "PCB Design Imagery: 4 custom PCB board designs (capacitive display connector & QR engine, MCP39F511A power monitoring, WBZ350-I RFID board, and WFI32E03 tower lamp controller).",
    images: [
      {
        src: "/ImagesFolder/ICIA_SmartRTMS/SmartRTMS_DisplayConnector_QR_Engine_Board.png",
        caption: "Display Connector & QR Engine Board — HMI touchscreen interface and DE2120 QR reader",
        width: 1395,
        height: 1127,
      },
      {
        src: "/ImagesFolder/ICIA_SmartRTMS/SmartRTMS_PowerMonitoringBoardMCP39F511A-EMQ_front.png",
        caption: "Power Monitoring Board MCP39F511A — Real-time AC voltage, current, and power calculation",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/ICIA_SmartRTMS/SmartRTMS_RFID_Board_WBZ350-I.png",
        caption: "RFID Board WBZ350-I — Secure wireless authentication and personnel identification",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/ICIA_SmartRTMS/SmartRTMS_WFI32E03_TowerLampController_Board.png",
        caption: "WFI32E03 Tower Lamp Controller Board — Wi-Fi telemetry and industrial visual status alert",
        width: 1536,
        height: 1024,
      },
    ],
    hardware: [
      "WFI32E03UE",
      "ESP32-S3",
      "WBZ350",
      "MCP39F511A",
      "3.5-inch Capacitive Touchscreen",
      "DE2120 QR Reader",
      "YRM1001 RFID",
    ],
    software: ["Embedded C/C++", "FreeRTOS", "MQTT"],
    protocols: ["MQTT", "UART", "SPI", "I2C", "Wi-Fi"],
    features: [
      "Capacitive touchscreen HMI interface",
      "Integrated dual authentication: 13.56 MHz RFID & QR scanning",
      "High-accuracy energy measurement with MCP39F511A",
      "Wireless telemetry and tower lamp machine status signalling",
    ],
    developmentStatus: "Engineering development",
    featured: true,
    visual: "monitor",
    architecture: [
      "WFI32E03 Wireless Host",
      "Touchscreen HMI Display",
      "RFID & QR Reader Subsystem",
      "MCP39F511A Power Monitoring",
    ],
    projectDetails: [
      {
        title: "Industrial IoT Monitoring",
        content:
          "Modular PCB architecture uniting machine state tracking, power analytics, operator access control via RFID/QR, and cloud telemetry.",
      },
    ],
  },

  // 3) ICIA - PLC Data Acquisition in which add that video alone
  {
    title: "ICIA — PLC Data Acquisition & Industrial IoT",
    slug: "icia-plc-data-acquisition",
    organization: "Industrial Connect Innovation & Automation",
    category: "IoT & Monitoring",
    description:
      "Real-time industrial telemetry acquisition interfacing directly with an Allen-Bradley PLC deployed in a textile manufacturing facility in Tirupur.",
    mediaNotes:
      "Video Demonstration: Live on-site deployment in Tirupur, capturing real-time operational data, machine states, and process variables directly from an Allen-Bradley industrial PLC.",
    video:
      "/ImagesFolder/ICIA_PLC_IOT/ReadingDataFrom_AllenBRadley_PLC_at_TextileIndustry_Tirupur.mp4",
    images: [],
    hardware: [
      "Allen-Bradley PLC",
      "Industrial Communication Gateway",
      "Industrial Sensors",
    ],
    software: ["Industrial Protocols", "Data Acquisition", "MQTT Telemetry"],
    protocols: ["EtherNet/IP", "DF1", "Modbus TCP", "MQTT"],
    features: [
      "Direct PLC data extraction from active production line",
      "Real-time textile machine telemetry logging",
      "Industrial protocol bridging for IoT dashboard integration",
    ],
    developmentStatus: "On-site industrial deployment",
    featured: true,
    visual: "monitor",
    architecture: [
      "Allen-Bradley Industrial PLC",
      "IoT Gateway Bridge",
      "Data Acquisition Pipeline",
      "Central Telemetry Dashboard",
    ],
    projectDetails: [
      {
        title: "Industrial Deployment",
        content:
          "Engineered the communications bridge and data acquisition pipeline to read operational registers from an Allen-Bradley PLC on the factory floor in Tirupur, enabling live IoT machine observability.",
      },
    ],
  },

  // 4) AED
  {
    title: "Automated External Defibrillator (AED) Electronics",
    slug: "defibrillator-electronics",
    organization: "Padmaseetha Technologies",
    category: "Medical Electronics",
    description:
      "Development-stage biphasic defibrillator control electronics and high-voltage switching circuitry engineered for emergency cardiac resuscitation.",
    mediaNotes:
      "Video Demonstration: Live bench testing displaying the biphasic switching sequence, high-voltage pulse generation, and gate driver actuation under load.",
    video: "/ImagesFolder/Padmaseetha_AED/AEDVieo.mp4",
    images: [],
    hardware: [
      "STM32F103",
      "IGBTs",
      "MOSFET Gate Drivers",
      "High-Voltage Capacitor Bank",
      "Biphasic H-Bridge",
    ],
    software: ["Embedded C", "Safety-Critical Firmware"],
    protocols: [],
    features: [
      "Biphasic waveform switching architecture",
      "High-voltage pulse control",
      "Integrated gate driver protection",
      "Differential analog sensing",
    ],
    developmentStatus: "Development prototype",
    featured: true,
    visual: "wave",
    architecture: [
      "STM32F103 Controller",
      "Gate Driver Stage",
      "Biphasic Switching Circuitry",
      "Patient Interface",
    ],
    projectDetails: [
      {
        title: "Development Context",
        content:
          "Engineering development on control electronics and biphasic pulse switching circuitry for an Automated External Defibrillator (AED) concept.",
      },
    ],
  },

  // 5) ECG Simulator
  {
    title: "ECG Waveform Simulator",
    slug: "ecg-waveform-simulator",
    organization: "Padmaseetha Technologies",
    category: "Medical Electronics",
    description:
      "Microcontroller-driven programmable ECG signal generator with DAC interfacing and analog signal conditioning for biomedical equipment validation.",
    mediaNotes:
      "Video & Hardware Photos: The video captures real-time DAC synthesis and differential ECG lead waveforms on a digital storage oscilloscope. The photographs show the STM32 board, analog signal conditioning, and active bench probing.",
    video: "/ImagesFolder/Padmaseetha_ECG_Simulator/ECG_Simulator.mp4",
    images: [
      {
        src: "/ImagesFolder/Padmaseetha_ECG_Simulator/ECGSim.jpeg",
        caption: "ECG Simulator Prototype Setup — Microcontroller hardware and differential analog lead interface",
        width: 630,
        height: 1400,
      },
      {
        src: "/ImagesFolder/Padmaseetha_ECG_Simulator/ECGSim2.jpeg",
        caption: "ECG Waveform Output Capture — Simulated lead signal verified on digital storage oscilloscope",
        width: 630,
        height: 1400,
      },
      {
        src: "/ImagesFolder/Padmaseetha_ECG_Simulator/ECGSim3.jpeg",
        caption: "ECG Board In-Circuit Testing — DAC output stage and precision operational amplifier filtering",
        width: 630,
        height: 1400,
      },
      {
        src: "/ImagesFolder/Padmaseetha_ECG_Simulator/ECGSim4.jpeg",
        caption: "ECG Signal Simulator Operation — Live bench testing and physiological waveform calibration",
        width: 630,
        height: 1400,
      },
    ],
    hardware: [
      "STM32",
      "12-bit DAC",
      "Operational Amplifiers",
      "Analog Signal Conditioning",
    ],
    software: ["Embedded C", "Waveform Synthesis Algorithms"],
    protocols: [],
    features: [
      "Programmable physiological ECG waveform generation",
      "High-precision DAC output interfacing",
      "Analog filtering and signal conditioning",
      "Direct oscilloscope and medical device testing",
    ],
    developmentStatus: "Engineering development",
    featured: true,
    visual: "wave",
    architecture: [
      "STM32 Waveform Generator",
      "12-bit DAC Stage",
      "Analog Filter & Conditioning",
      "Differential Output Lead",
    ],
    projectDetails: [
      {
        title: "System Overview",
        content:
          "Simulates precise synthetic and captured cardiac waveforms to test and calibrate patient monitoring systems and medical electronics.",
      },
    ],
  },

  // 7) BharatPD
  {
    title: "BharathPD — Portable Peritoneal Dialysis System",
    slug: "portable-peritoneal-dialysis",
    organization: "Padmaseetha Technologies",
    category: "Medical Electronics",
    description:
      "Embedded controller architecture and cycler hardware for automated portable peritoneal dialysis.",
    mediaNotes:
      "Hardware, Mechanical & Prototype Visuals: Showcases the live automated peritoneal dialysis cycler undergoing fluid cycle testing, custom embedded motherboard revisions v2.0 and v3.0, and 3D CAD mechanical models (chassis layout, actuator mounting brackets, and fluidic cassette tubing guides).",
    images: [
      {
        src: "/ImagesFolder/Padmaseetha_BharathPD/BharathPDv2.0 Working.png.jpeg",
        caption: "BharathPD v2.0 Working Prototype — Automated peritoneal dialysis cycler in test operation",
        width: 720,
        height: 1280,
      },
      {
        src: "/ImagesFolder/Padmaseetha_BharathPD/BharathPDv2.0.png",
        caption: "BharathPD v2.0 Controller Board — Custom embedded motherboard with sensor interfaces",
        width: 1086,
        height: 1448,
      },
      {
        src: "/ImagesFolder/Padmaseetha_BharathPD/BharathPDv3.0.png",
        caption: "BharathPD v3.0 Controller Board — Compact refined PCB layout for automated cycler",
        width: 1536,
        height: 1024,
      },
      {
        src: "/ImagesFolder/Padmaseetha_BharathPD/BharathPDMech1.jpeg",
        caption: "BharathPD Mechanical Design — 3D CAD internal layout showing drive motor, mounting plate, and latching mechanism",
        width: 827,
        height: 491,
      },
      {
        src: "/ImagesFolder/Padmaseetha_BharathPD/BharathPDMech2.jpeg",
        caption: "BharathPD Chassis Assembly — Isometric 3D CAD showing actuator packaging, PCB mounting, and enclosure structure",
        width: 720,
        height: 521,
      },
      {
        src: "/ImagesFolder/Padmaseetha_BharathPD/BharathPDMech3.jpeg",
        caption: "BharathPD Fluidic Cassette — Peristaltic tubing channel, valve guide routing, and transparent clamshell cover",
        width: 700,
        height: 523,
      },
    ],
    hardware: [
      "nRF52840",
      "Infrared Optical Sensors",
      "Precision Load Cells",
      "RTC",
      "Pumping & Valve Drivers",
    ],
    software: ["Embedded C", "Nordic nRF Connect SDK", "BLE"],
    protocols: ["BLE", "I2C", "SPI", "UART"],
    features: [
      "Automated peritoneal dialysis cycle timing and control",
      "Optical fluid sensor and scale weight monitoring",
      "Low-power wireless connectivity via BLE",
      "Multi-revision custom PCB design (v2.0 and v3.0)",
    ],
    developmentStatus: "Working prototype & hardware iteration",
    featured: true,
    visual: "board",
    architecture: [
      "nRF52840 Controller",
      "Fluid Balance & Optical Sensing",
      "Valve Actuator Drivers",
      "BLE Connectivity",
    ],
    projectDetails: [
      {
        title: "Medical Cycler Hardware",
        content:
          "Designed controller PCBs and sensor interfacing for a portable automated peritoneal dialysis system intended to support safe home dialysis therapy.",
      },
    ],
  },

  // 8) Anna University
  {
    title: "Code2Board — Embedded Systems Workshop",
    slug: "code2board-workshop",
    organization: "CEG, Anna University",
    category: "Industrial Automation",
    description:
      "Conducted an interactive, hands-on embedded systems workshop exploring how firmware connects with real hardware, guiding university students through microcontroller peripherals, schematic reading, and bare-metal programming.",
    mediaNotes:
      "Video & Photos: Video captures live workshop delivery and student interactions. Photographs document hands-on microcontroller wiring, laptop firmware coding, and collaborative debugging at CEG Anna University.",
    video: "/ImagesFolder/AnnaUniveristy Code2Board/Code2Board.mp4",
    images: [
      {
        src: "/ImagesFolder/Code2Board/session-1.jpg",
        caption: "Code2Board Workshop at CEG, Anna University — Group moments and student interactions",
        width: 800,
        height: 800,
      },
      {
        src: "/ImagesFolder/Code2Board/session-2.jpg",
        caption: "Interactive session discussing firmware architecture and code-to-board interaction",
        width: 800,
        height: 533,
      },
      {
        src: "/ImagesFolder/Code2Board/session-3.jpg",
        caption: "Students engaged in hands-on firmware development with embedded boards and laptops",
        width: 800,
        height: 533,
      },
      {
        src: "/ImagesFolder/Code2Board/session-4.jpg",
        caption: "Collaborative debugging and hardware-software validation during the workshop",
        width: 800,
        height: 360,
      },
    ],
    hardware: [
      "Microcontroller Boards",
      "Sensors & Actuators",
      "Digital Storage Oscilloscopes",
      "Hardware Debuggers",
    ],
    software: ["Embedded C", "Bare-Metal Firmware", "IDE Setup"],
    protocols: ["GPIO", "UART", "I2C", "SPI"],
    features: [
      "Hands-on embedded firmware development session",
      "Bridging textbook concepts with real-world electronics engineering",
      "Interactive hardware-software debugging with university students",
    ],
    developmentStatus: "Conducted Workshop",
    featured: true,
    visual: "board",
    architecture: [
      "Microcontroller Peripherals",
      "Firmware Fundamentals",
      "Hardware Interfacing",
      "Hands-On Debugging",
    ],
    projectDetails: [
      {
        title: "Workshop Context",
        content:
          "Organized and delivered an interactive workshop for students at CEG Anna University, introducing firmware-to-hardware connectivity and real embedded engineering workflows.",
      },
    ],
  },

  // 9) SA Engineering College
  {
    title: "SA Engineering College Hackathon — Technical Jury & Problem Setter",
    slug: "sa-college-hackathon-jury",
    organization: "SA Engineering College · KernelPrime 2026",
    category: "Industrial Automation",
    description:
      "Formulated electronics hackathon problem statements (hands-free assistive interface, IV drip rate monitor, vehicle safety interlock, auto-protocol logic analyzer) and evaluated student engineering prototypes as technical jury.",
    mediaNotes:
      "Jury Sessions: The 3 evaluation videos capture student presentations, circuit inspections, and live prototype testing during the hackathon. The photo documents the technical jury panel in session.",
    video: "/ImagesFolder/SA_CollegeJury/Jury2.mp4",
    videos: [
      {
        src: "/ImagesFolder/SA_CollegeJury/Jurt1.mp4",
        caption: "Session 1 — Student prototype evaluation & circuit review",
      },
      {
        src: "/ImagesFolder/SA_CollegeJury/Jury2.mp4",
        caption: "Session 2 — Interactive technical interview & hardware inspection",
      },
      {
        src: "/ImagesFolder/SA_CollegeJury/Jurt3.mp4",
        caption: "Session 3 — Live project demonstration & scoring",
      },
    ],
    images: [
      {
        src: "/ImagesFolder/SA_CollegeJury/CollegeJury5.jpeg",
        caption: "SA Engineering College KernelPrime 2026 — Technical Jury evaluation session",
        width: 720,
        height: 1600,
      },
    ],
    hardware: [
      "Embedded Systems",
      "Assistive Tech",
      "Biomedical Monitors",
      "Automotive Safety Rig",
    ],
    software: ["Problem Formulation", "Technical Judging", "Architecture Review"],
    protocols: ["UART", "SPI", "I2C", "RS485"],
    features: [
      "Authored 4 industry-aligned hardware/firmware problem statements",
      "Assessed prototype circuit design, firmware architecture, and feasibility",
      "Mentored student engineering teams across colleges during live hackathon",
    ],
    developmentStatus: "Technical Jury & Problem Setter",
    featured: true,
    visual: "board",
    architecture: [
      "Problem Statement Formulation",
      "Live Hackathon Judging",
      "Prototype Hardware Assessment",
      "Student Mentorship",
    ],
    projectDetails: [
      {
        title: "KernelPrime 2026 Hackathon Scope",
        content:
          "Defined core electronics challenges including assistive head-wearable input devices, non-invasive IV drip monitoring, automotive alcohol interlocks, and auto-detecting protocol logic analyzers, followed by comprehensive technical jury evaluation.",
      },
    ],
  },
];
