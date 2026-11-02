export type SoftwareTool = {
  name: string;
  category: "EDA & PCB" | "Embedded IDEs" | "Software & Apps" | "Databases" | "Hardware Debugging";
  icon: string;
  description: string;
  highlight?: string;
};

export const softwareCategories = [
  "All Tools",
  "EDA & PCB",
  "Embedded IDEs",
  "Software & Apps",
  "Databases",
  "Hardware Debugging",
] as const;

export const softwareTools: SoftwareTool[] = [
  // EDA & PCB Design
  {
    name: "KiCad",
    category: "EDA & PCB",
    icon: "/images/software-logos/kicad.svg",
    description: "Primary PCB layout, schematic capture, multi-layer routing & DRC",
    highlight: "Primary EDA Tool",
  },
  {
    name: "Cadence Allegro & OrCAD",
    category: "EDA & PCB",
    icon: "/images/software-logos/cadence.svg",
    description: "Schematic design, high-speed routing & board packaging",
  },
  {
    name: "Proteus Design Suite",
    category: "EDA & PCB",
    icon: "/images/software-logos/proteus.svg",
    description: "Interactive circuit simulation, SPICE modeling & virtual instrumentation",
  },

  // Embedded IDEs & Toolchains
  {
    name: "STM32CubeIDE",
    category: "Embedded IDEs",
    icon: "/images/software-logos/stmicroelectronics.svg",
    description: "HAL / LL firmware development & SWD debugging for STM32F1/F3/F4",
    highlight: "STM32 Toolchain",
  },
  {
    name: "NXP MCUXpresso",
    category: "Embedded IDEs",
    icon: "/images/software-logos/nxp.svg",
    description: "LPC1768 Cortex-M MCU firmware & RS485 network engineering",
  },
  {
    name: "TI Code Composer Studio",
    category: "Embedded IDEs",
    icon: "/images/software-logos/texasinstruments.svg",
    description: "MSP430FR ultra-low-power MCU firmware & real-time register debug",
  },
  {
    name: "Microchip Studio / MPLAB X",
    category: "Embedded IDEs",
    icon: "/images/software-logos/microchip.svg",
    description: "WFI32E03 Wi-Fi & WBZ350 BLE/Zigbee industrial firmware development",
  },
  {
    name: "ESP-IDF",
    category: "Embedded IDEs",
    icon: "/images/software-logos/espressif.svg",
    description: "FreeRTOS-based IoT firmware development & Wi-Fi/BLE integration",
  },
  {
    name: "Nordic nRF Connect SDK",
    category: "Embedded IDEs",
    icon: "/images/software-logos/nordicsemiconductor.svg",
    description: "Zephyr RTOS & BLE stack development for nRF52840 cycler controller",
  },
  {
    name: "ARM Keil MDK",
    category: "Embedded IDEs",
    icon: "/images/software-logos/arm.svg",
    description: "ARM Cortex-M compilation, CMSIS packs & hardware trace",
  },

  // Desktop, Mobile & Languages
  {
    name: ".NET / C#",
    category: "Software & Apps",
    icon: "/images/software-logos/dotnet.svg",
    description: "Industrial Windows desktop testing & navigation apps for factory floor",
    highlight: "Industrial GUI",
  },
  {
    name: "Android Studio",
    category: "Software & Apps",
    icon: "/images/software-logos/androidstudio.svg",
    description: "Native Android BLE companion app engineering for medical cycler",
  },
  {
    name: "Kotlin",
    category: "Software & Apps",
    icon: "/images/software-logos/kotlin.svg",
    description: "Modern Android BLE peripheral communication & UI architecture",
  },
  {
    name: "Qt Framework",
    category: "Software & Apps",
    icon: "/images/software-logos/qt.svg",
    description: "Cross-platform industrial GUI & serial communication interfaces",
  },
  {
    name: "VS Code & Visual Studio",
    category: "Software & Apps",
    icon: "/images/software-logos/vscode.svg",
    description: "Embedded C/C++, firmware scripts & desktop application engineering",
  },
  {
    name: "Python",
    category: "Software & Apps",
    icon: "/images/software-logos/python.svg",
    description: "Tkinter desktop tools, automated test scripts & serial data loggers",
  },

  // Databases & Cloud
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: "/images/software-logos/postgresql.svg",
    description: "Relational database for industrial telemetry & inspection test logs",
  },
  {
    name: "Microsoft SQL Server",
    category: "Databases",
    icon: "/images/software-logos/mssql.svg",
    description: "Enterprise SQL database integration for factory automation records",
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: "/images/software-logos/mongodb.svg",
    description: "Document database for IoT telemetry records & machine parameters",
  },
  {
    name: "SQLite",
    category: "Databases",
    icon: "/images/software-logos/sqlite.svg",
    description: "Lightweight embedded on-device database for edge controllers",
  },
  {
    name: "Firebase",
    category: "Databases",
    icon: "/images/software-logos/firebase.svg",
    description: "Realtime database & cloud backend for connected mobile telemetry",
  },

  // Hardware Instrumentation & Testing
  {
    name: "Saleae Logic",
    category: "Hardware Debugging",
    icon: "/images/software-logos/saleae.svg",
    description: "Digital logic capture & protocol decoding (UART, SPI, I2C, RS485, CAN)",
    highlight: "Protocol Debugger",
  },
];

