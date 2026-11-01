"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? undefined : { y: [14, 0] }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

export function Board({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState("MCU");
  return (
    <div className={`board-scene ${compact ? "compact" : ""}`}>
      <svg
        viewBox="0 0 640 500"
        role="img"
        aria-label="Illustrative embedded development board with microcontroller, power, and communication interfaces"
      >
        <defs>
          <linearGradient id="pcb" x2="1" y2="1">
            <stop stopColor="#133a39" />
            <stop offset="1" stopColor="#0a2028" />
          </linearGradient>
          <pattern
            id="dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="9" cy="9" r=".8" fill="#65a997" opacity=".2" />
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <g className="pcb-body" transform="translate(30 26) rotate(-8 280 220)">
          <rect
            x="35"
            y="43"
            width="500"
            height="362"
            rx="21"
            fill="#020b13"
            transform="translate(0 13)"
          />
          <rect
            x="35"
            y="43"
            width="500"
            height="362"
            rx="21"
            fill="url(#pcb)"
            stroke="#3c7669"
            strokeWidth="2"
          />
          <rect
            x="35"
            y="43"
            width="500"
            height="362"
            rx="21"
            fill="url(#dots)"
          />
          {[
            [58, 66],
            [512, 66],
            [58, 382],
            [512, 382],
          ].map(([x, y]) => (
            <g key={x + "," + y}>
              <circle
                cx={x}
                cy={y}
                r="9"
                fill="#071923"
                stroke="#9fa994"
                strokeWidth="4"
              />
              <circle cx={x} cy={y} r="3" fill="#050c15" />
            </g>
          ))}
          <g fill="none" stroke="#4f8c78" strokeWidth="2" opacity=".6">
            {Array.from({ length: 9 }, (_, i) => (
              <g key={i}>
                <path
                  d={`M ${258 + i * 10} 175 V ${120 - i * 6} H ${435 + i * 4} V 90`}
                />
                <path
                  d={`M 245 ${190 + i * 9} H ${150 - i * 7} V ${303 + i * 5} H 95`}
                />
                <path
                  d={`M ${269 + i * 10} 281 V ${330 + i * 5} H ${420 + i * 6} V 365`}
                />
                <path
                  d={`M 365 ${190 + i * 9} H ${420 + i * 8} V ${160 + i * 5} H 490`}
                />
              </g>
            ))}
          </g>
          <g
            fill="none"
            stroke="#67e8cb"
            strokeWidth="2"
            className="signal-trace"
          >
            <path d="M 95 315 H 154 V 222 H 245" />
            <path d="M 300 175 V 102 H 450 V 90" />
            <path d="M 365 240 H 458 V 354" />
          </g>
          <g fill="#9da995">
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i}>
                <rect x={253 + i * 9} y="167" width="4" height="18" />
                <rect x={253 + i * 9} y="277" width="4" height="18" />
                <rect x="233" y={184 + i * 8} width="18" height="4" />
                <rect x="358" y={184 + i * 8} width="18" height="4" />
              </g>
            ))}
          </g>
          <rect
            x="247"
            y="181"
            width="113"
            height="100"
            rx="4"
            fill="#101820"
            stroke="#7b8c8b"
          />
          <circle cx="258" cy="192" r="3" fill="#c0c9c6" />
          <text
            x="303"
            y="222"
            textAnchor="middle"
            fill="#c4d7d2"
            fontSize="17"
            fontFamily="monospace"
          >
            STM32
          </text>
          <text
            x="303"
            y="244"
            textAnchor="middle"
            fill="#7c9b95"
            fontSize="11"
            fontFamily="monospace"
          >
            ARM CORTEX-M
          </text>
          <g>
            {[100, 155, 210, 265, 320, 375, 430].map((x) => (
              <g key={x}>
                <rect
                  x={x}
                  y="77"
                  width="38"
                  height="23"
                  rx="3"
                  fill="#10191d"
                />
                {[0, 1, 2].map((i) => (
                  <rect
                    key={i}
                    x={x + 5 + i * 11}
                    y="83"
                    width="6"
                    height="11"
                    fill="#c1a568"
                  />
                ))}
              </g>
            ))}
          </g>
          <g>
            {[120, 148, 176, 204, 290, 318].map((y) => (
              <g key={y}>
                <rect
                  x="83"
                  y={y}
                  width="33"
                  height="14"
                  rx="2"
                  fill="#4b5350"
                />
                <rect x="89" y={y} width="21" height="14" fill="#252a28" />
              </g>
            ))}
          </g>
          <rect
            x="17"
            y="199"
            width="66"
            height="54"
            rx="6"
            fill="#9ba5aa"
            stroke="#dce3e3"
          />
          <rect x="16" y="208" width="37" height="36" rx="4" fill="#131d26" />
          <rect x="177" y="338" width="60" height="24" rx="6" fill="#9ca7a6" />
          <text x="207" y="354" fill="#283b3c" textAnchor="middle" fontSize="9">
            8.000 MHz
          </text>
          <rect
            x="403"
            y="322"
            width="81"
            height="42"
            rx="3"
            fill="#276d5b"
            stroke="#5da589"
          />
          {[416, 441, 466].map((x) => (
            <circle
              key={x}
              cx={x}
              cy="342"
              r="8"
              fill="#aebba6"
              stroke="#152c27"
              strokeWidth="3"
            />
          ))}
          <circle
            cx="462"
            cy="131"
            r="5"
            fill="#71efd0"
            className="board-led"
          />
          <circle
            cx="462"
            cy="131"
            r="10"
            fill="#71efd0"
            opacity=".4"
            filter="url(#glow)"
          />
          <text
            x="139"
            y="130"
            fill="#8fbdad"
            fontSize="11"
            fontFamily="monospace"
          >
            AADITHYA / EMBEDDED LAB
          </text>
          <text
            x="281"
            y="383"
            fill="#75a794"
            fontSize="10"
            fontFamily="monospace"
          >
            HARDWARE ↔ FIRMWARE
          </text>
        </g>
      </svg>
      {!compact && (
        <>
          <div className="board-top">
            <span className="live-dot" /> SYSTEM ARCHITECTURE / 01
          </div>
          <div className="board-controls">
            {["MCU", "I/O", "POWER"].map((label) => (
              <button
                key={label}
                className={selected === label ? "selected" : ""}
                onClick={() => setSelected(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="board-caption">
            <span className="live-dot" />
            {selected === "MCU"
              ? "ARM Cortex-M · Embedded control"
              : selected === "I/O"
                ? "UART / SPI / I2C · Peripheral interfaces"
                : "Regulated power · Board supply"}
            <small>Interactive technical illustration</small>
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectVisual({
  type,
  index = 0,
}: {
  type: string;
  index?: number;
}) {
  if (type === "board") return <Board compact />;
  if (type === "wave")
    return (
      <div className="wave-visual">
        <svg
          viewBox="0 0 600 250"
          role="img"
          aria-label="Illustrative signal waveform"
        >
          <defs>
            <pattern
              id={`grid-${index}`}
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 25 0 H 0 V 25"
                fill="none"
                stroke="currentColor"
                strokeWidth=".5"
                opacity=".2"
              />
            </pattern>
          </defs>
          <rect width="600" height="250" fill={`url(#grid-${index})`} />
          <path
            className="signal-trace"
            d="M0 135 H70 L82 126 L93 135 H125 L139 148 L151 65 L165 190 L178 119 L191 135 H245 Q265 85 287 135 H370 L382 126 L393 135 H425 L439 148 L451 65 L465 190 L478 119 L491 135 H545 Q565 85 587 135 H600"
            stroke="currentColor"
            fill="none"
            strokeWidth="2.5"
          />
        </svg>
        <span>SIGNAL DEVELOPMENT / ILLUSTRATION</span>
      </div>
    );
  return (
    <div className={`interface-visual ${type}`}>
      <div className="screen-shell">
        <div className="screen-top">
          <i />
          <i />
          <i />
          <span>
            {type === "software"
              ? "ENGINEERING WORKSPACE"
              : "RTMS / DEVICE INTERFACE"}
          </span>
        </div>
        <div className="screen-content">
          <aside>
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i} />
            ))}
          </aside>
          <div className="screen-main">
            <div className="screen-tiles">
              <i />
              <i />
              <i />
            </div>
            <svg viewBox="0 0 240 70" aria-hidden="true">
              <path
                d="M0 55 L20 50 L35 58 L55 30 L70 37 L90 20 L115 35 L140 15 L160 23 L185 10 L210 20 L240 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <div className="screen-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <span>CONCEPTUAL INTERFACE / ILLUSTRATION</span>
    </div>
  );
}

export function Architecture({ nodes }: { nodes: string[] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="architecture" aria-label="Conceptual system architecture">
      {nodes.map((node, i) => (
        <div className="arch-step" key={node}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            className={active === i ? "active" : ""}
            aria-pressed={active === i}
          >
            <span>0{i + 1}</span>
            <strong>{node}</strong>
            {active === i && (
              <small>
                Architecture block {i + 1} of {nodes.length}
              </small>
            )}
          </button>
          {i < nodes.length - 1 && (
            <svg viewBox="0 0 50 24" aria-hidden="true">
              <path d="M0 12 H45 M36 5 L45 12 L36 19" />
              <circle className="signal-dot" r="2" cy="12" cx="4" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
