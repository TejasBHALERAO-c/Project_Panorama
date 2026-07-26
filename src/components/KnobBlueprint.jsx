import React, { useState } from "react";
import { Layers, Eye, RefreshCw } from "lucide-react";

export default function KnobBlueprint({ interactive = true }) {
  const [activeLayer, setActiveLayer] = useState("all");

  const layers = [
    { id: "all", name: "Full CAD Assembly" },
    { id: "chrome", name: "Chrome Plating Layer" },
    { id: "leather", name: "Leather Stitching" },
    { id: "insert", name: "Threaded Insert Core" },
  ];

  const callouts = [
    { y: 55, label: "CHROME PLATING (Cr3+ Passivated)", x1: 168, y1: 55, x2: 250, layer: "chrome" },
    { y: 95, label: "LEATHER HAND STITCHING", x1: 176, y1: 95, x2: 250, layer: "leather" },
    { y: 135, label: "PRESS-FIT NYLON CORE", x1: 150, y1: 135, x2: 250, layer: "all" },
    { y: 175, label: "SELF-TIGHTENING BRASS INSERT", x1: 160, y1: 175, x2: 250, layer: "insert" },
    { y: 215, label: "OVER-MOULDED TACTILE GRIP", x1: 140, y1: 215, x2: 250, layer: "all" },
  ];

  return (
    <div className="relative bg-[#0f1318] border border-white/15 rounded-sm p-4 text-[#e2e8ec] shadow-2xl">
      {/* Blueprint grid background */}
      <div
        className="pointer-events-none absolute inset-0 rounded-sm opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 89, 12, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 89, 12, 0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-[#e8590c] font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#e8590c] animate-ping" />
          FIG. 01 — GEAR SHIFT KNOB (DWG-01/GSK)
        </div>
        <div className="text-white/40">TOLERANCE: ±0.01mm | SCALE 1:1</div>
      </div>

      {/* SVG Diagram */}
      <div className="relative z-10">
        <svg
          viewBox="0 0 500 320"
          className="w-full h-auto max-w-lg mx-auto filter drop-shadow-lg"
          role="img"
          aria-label="Technical blueprint diagram of gear shifter knob"
        >
          <defs>
            <radialGradient id="knobGradient" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#3a4451" />
              <stop offset="60%" stopColor="#1e242c" />
              <stop offset="100%" stopColor="#0c0e11" />
            </radialGradient>
            <linearGradient id="chromeShine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#9aa5b1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Outer Border Frame */}
          <rect
            x="4"
            y="4"
            width="492"
            height="312"
            fill="none"
            stroke="#9aa5b1"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Cross section knob body */}
          <path
            d="M170 60 C170 38, 210 22, 240 22 C270 22, 310 38, 310 60 L316 190 C316 230, 280 258, 240 258 C200 258, 164 230, 164 190 Z"
            fill="url(#knobGradient)"
            stroke={activeLayer === "chrome" ? "#ffffff" : "#9aa5b1"}
            strokeWidth={activeLayer === "chrome" ? "2.5" : "1.5"}
          />

          {/* Top Emblem Chrome Ring */}
          <ellipse
            cx="240"
            cy="52"
            rx="45"
            ry="18"
            fill="url(#chromeShine)"
            stroke="#e8590c"
            strokeWidth="1"
          />
          <text
            x="240"
            y="55"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="bold"
            fill="#14171a"
          >
            R 1 3 5 / 2 4 6 R
          </text>

          {/* Leather Stitching lines (Visible if all or leather layer) */}
          {(activeLayer === "all" || activeLayer === "leather") && (
            <>
              <path
                d="M178 92 C208 80, 272 80, 302 92"
                fill="none"
                stroke="#e8590c"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M182 140 C212 128, 268 128, 298 140"
                fill="none"
                stroke="#e8590c"
                strokeWidth="1.8"
                strokeDasharray="3 3"
              />
            </>
          )}

          {/* Threaded Insert (Highlight if insert layer) */}
          <g opacity={activeLayer === "leather" ? 0.3 : 1}>
            <rect
              x="220"
              y="235"
              width="40"
              height="35"
              fill={activeLayer === "insert" ? "#e8590c" : "#1a2129"}
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1="220"
                y1={239 + i * 5}
                x2="260"
                y2={239 + i * 5}
                stroke={activeLayer === "insert" ? "#ffffff" : "#9aa5b1"}
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Center axis line */}
          <line
            x1="240"
            y1="10"
            x2="240"
            y2="310"
            stroke="#e8590c"
            strokeOpacity="0.5"
            strokeDasharray="8 4"
            strokeWidth="1"
          />

          {/* Dimension arrows */}
          <line x1="140" y1="22" x2="140" y2="258" stroke="#9aa5b1" strokeWidth="0.8" strokeDasharray="2 2" />
          <text x="125" y="145" fontFamily="monospace" fontSize="9" fill="#9aa5b1" transform="rotate(-90 125,145)">
            H = 98.5 mm
          </text>

          {/* Leader Lines and Callouts */}
          {callouts.map((c, i) => {
            const isHighlighted = activeLayer === "all" || activeLayer === c.layer;
            return (
              <g key={i} opacity={isHighlighted ? 1 : 0.25} className="transition-opacity duration-300">
                <line x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y1} stroke="#9aa5b1" strokeWidth="1" />
                <circle cx={c.x1} cy={c.y1} r="3" fill="#e8590c" />
                <text
                  x={c.x2 + 8}
                  y={c.y1 + 3}
                  fontFamily="monospace"
                  fontSize="9.5"
                  fontWeight={isHighlighted ? "bold" : "normal"}
                  fill={isHighlighted ? "#ffffff" : "#9aa5b1"}
                  letterSpacing="0.5"
                >
                  {c.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Layer selector bar */}
      {interactive && (
        <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/60">
            <Layers size={13} className="text-[#e8590c]" /> Inspect CAD Layer:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {layers.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveLayer(l.id)}
                className={`font-mono text-[10px] uppercase px-2.5 py-1 transition-colors border ${
                  activeLayer === l.id
                    ? "bg-[#e8590c] text-black border-[#e8590c] font-bold"
                    : "bg-white/5 text-white/70 border-white/15 hover:border-white/40"
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
