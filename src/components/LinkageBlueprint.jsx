import React from "react";

export default function LinkageBlueprint() {
  return (
    <div className="relative bg-[#0f1318] border border-white/15 rounded-sm p-4 text-[#e2e8ec] shadow-2xl">
      <div
        className="pointer-events-none absolute inset-0 rounded-sm opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 89, 12, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 89, 12, 0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-[11px]">
        <div className="text-[#e8590c] font-bold uppercase tracking-wider">
          FIG. 02 — SHIFT LINKAGE ASSEMBLY (DWG-02/AGL)
        </div>
        <div className="text-white/40">TENSILE RATING: 15 kN</div>
      </div>

      <div className="relative z-10">
        <svg viewBox="0 0 500 240" className="w-full h-auto" role="img" aria-label="Gear shift linkage schematic">
          {/* Frame */}
          <rect x="4" y="4" width="492" height="232" fill="none" stroke="#9aa5b1" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Main Tubular Shaft */}
          <rect x="120" y="105" width="260" height="14" fill="#2d3748" stroke="#9aa5b1" strokeWidth="1.5" />
          <line x1="120" y1="112" x2="380" y2="112" stroke="#e8590c" strokeWidth="1" strokeDasharray="4 4" />

          {/* Left Ball Socket Joint */}
          <circle cx="90" cy="112" r="22" fill="#1a202c" stroke="#e8590c" strokeWidth="2" />
          <circle cx="90" cy="112" r="10" fill="#e8590c" />
          <path d="M70 112 L90 112" stroke="#ffffff" strokeWidth="2" />
          <text x="45" y="80" fontFamily="monospace" fontSize="9" fill="#e2e8ec">POM BALL SOCKET</text>
          <line x1="75" y1="85" x2="90" y2="100" stroke="#9aa5b1" strokeWidth="1" />

          {/* Right Pivot Arm */}
          <path d="M380 90 L440 60 L460 75 L395 125 Z" fill="#1a202c" stroke="#9aa5b1" strokeWidth="1.5" />
          <circle cx="445" cy="70" r="8" fill="#e8590c" />

          {/* Center Bushing Mount */}
          <rect x="230" y="95" width="40" height="34" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="250" y1="75" x2="250" y2="150" stroke="#e8590c" strokeWidth="1" strokeDasharray="4 2" />
          <text x="200" y="165" fontFamily="monospace" fontSize="9" fill="#e8590c">ANTI-VIBRATION EPDM BUSH</text>

          {/* Force vectors */}
          <path d="M 60 112 L 40 112" stroke="#e8590c" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="25" y="130" fontFamily="monospace" fontSize="9" fill="#e8590c">F = ± 3.5 kN</text>

          {/* Dimensions */}
          <line x1="90" y1="200" x2="445" y2="200" stroke="#9aa5b1" strokeWidth="1" />
          <line x1="90" y1="190" x2="90" y2="205" stroke="#9aa5b1" strokeWidth="1" />
          <line x1="445" y1="190" x2="445" y2="205" stroke="#9aa5b1" strokeWidth="1" />
          <text x="240" y="215" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#ffffff">L = 425 mm ± 0.5 mm</text>
        </svg>
      </div>
    </div>
  );
}
