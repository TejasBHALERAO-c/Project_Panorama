import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items, dark = false }) {
  return (
    <nav className={`flex items-center gap-2 font-mono text-xs mb-6 ${dark ? "text-white/60" : "text-[#181c21]/60"}`}>
      <Link to="/" className="flex items-center gap-1 hover:text-[#e8590c] transition-colors">
        <Home size={13} />
        <span>HOME</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={12} className="opacity-40" />
          {item.link ? (
            <Link to={item.link} className="uppercase hover:text-[#e8590c] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className={`uppercase font-semibold ${dark ? "text-[#e8590c]" : "text-[#181c21]"}`}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
