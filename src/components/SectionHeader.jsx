import React from "react";

export default function SectionHeader({ index, title, subtitle, dark = false }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`font-mono text-xs font-bold tracking-widest px-2.5 py-1 border ${
            dark ? "border-[#e8590c] text-[#e8590c] bg-[#e8590c]/10" : "border-[#1c3d5a] text-[#1c3d5a] bg-[#1c3d5a]/5"
          }`}
        >
          {index}
        </span>
        <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-[#181c21]/15"}`} />
        <span className={`font-mono text-xs tracking-[0.2em] uppercase ${dark ? "text-white/50" : "text-[#181c21]/60"}`}>
          OEM SPECIFICATION
        </span>
      </div>
      {title && (
        <h2 className={`font-display font-black text-3xl sm:text-4xl tracking-tight ${dark ? "text-white" : "text-[#181c21]"}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-2 text-base sm:text-lg max-w-2xl ${dark ? "text-white/70" : "text-[#181c21]/70"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
