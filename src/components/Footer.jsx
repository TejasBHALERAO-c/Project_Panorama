import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight, Factory } from "lucide-react";
import { COMPANY, PLANTS, PHONES, EMAIL } from "../data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d0f] text-[#9aa5b1] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Branding & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#e8590c] flex items-center justify-center font-mono text-xs font-bold text-white">
                PA
              </div>
              <span className="font-display font-black text-lg text-white tracking-wide">
                PANORAMA <span className="text-[#e8590c]">AUTOMOTIVE</span>
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Tier-1 Supplier for Automotive O.E.M.s — Specialists in Gear Shifter Assemblies, Hydraulic System Components, Precision Machining, and Metal-to-Rubber Bonded Parts.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-[#e8590c] border border-[#e8590c]/40 px-2 py-1 bg-[#e8590c]/10">
                <ShieldCheck size={12} /> IATF 16949 / TS Certified
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-white/70 border border-white/20 px-2 py-1 bg-white/5">
                DUNS Certified Supplier
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="font-mono text-xs text-[#e8590c] uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                  &rarr; Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1">
                  &rarr; Enterprise Profile
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1">
                  &rarr; Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors flex items-center gap-1">
                  &rarr; Plants &amp; Machinery
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white transition-colors flex items-center gap-1">
                  &rarr; Quality Standards
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-white transition-colors flex items-center gap-1">
                  &rarr; OEM Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Capabilities */}
          <div>
            <h4 className="font-mono text-xs text-[#e8590c] uppercase tracking-widest mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 font-sans text-xs text-white/70">
              <li>Gear Shift Knobs &amp; AMT Systems</li>
              <li>Assembly Gear Shift Linkages</li>
              <li>Precision Machined Hydraulic Parts</li>
              <li>Rubber-to-Metal Bonded Bushings</li>
              <li>Complete Tensioning Rods</li>
              <li>2-Wheeler &amp; Tractor OEM Parts</li>
              <li>Export Sub-Assemblies</li>
            </ul>
          </div>

          {/* Col 4: Manufacturing Facilities */}
          <div>
            <h4 className="font-mono text-xs text-[#e8590c] uppercase tracking-widest mb-4">
              Manufacturing Facilities
            </h4>
            <div className="space-y-4 text-xs">
              {PLANTS.map((plant) => (
                <div key={plant.id} className="space-y-1 border-l-2 border-[#e8590c] pl-3">
                  <div className="font-bold text-white font-mono">{plant.label}</div>
                  <p className="text-white/60 line-clamp-2">{plant.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAD Blueprint Title Block Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-mono text-[11px] text-white/50">
          <div className="flex items-center gap-2">
            <Factory size={14} className="text-[#e8590c]" />
            <span>ESTABLISHED 1977 · HADAPSAR &amp; SIDCUL UNITS</span>
          </div>

          <div className="text-center md:text-center text-white/70">
            © {new Date().getFullYear()} {COMPANY.name}
          </div>

          <div className="flex items-center justify-start md:justify-end gap-3">
            <a href={`mailto:${EMAIL}`} className="hover:text-white flex items-center gap-1">
              <Mail size={12} className="text-[#e8590c]" /> {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
