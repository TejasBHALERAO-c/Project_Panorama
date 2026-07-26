import React from "react";
import { Link } from "react-router-dom";
import { Factory, Cpu, Flame, Sliders, Sparkles, Wrench, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import { PLANTS, CAPABILITIES } from "../data/companyData";

export default function FacilitiesPage() {
  const machineryList = [
    { category: "CNC & Turning Centers", count: "18+ Units", detail: "High-precision turning centers for hydraulic spools, shafts, and bushings." },
    { category: "Vertical Machining Centers (VMC)", count: "12+ Units", detail: "4-Axis VMC machining with automatic tool changers for complex housings." },
    { category: "Rubber Injection & Transfer Presses", count: "15+ Presses", detail: "Vulcanization presses up to 350 tons for rubber-to-metal bonding." },
    { category: "Electroplating & Passivation Line", count: "Fully Automated", detail: "Tri-chrome plating and zinc-nickel passivation for 720hr salt-spray life." },
    { category: "3D Coordinate Measuring Machines", count: "Mitutoyo CMM", detail: "Sub-micron dimensional verification in climate-controlled metrology lab." },
    { category: "Surface Grinding & Honing", count: "8+ Units", detail: "Micro-honing machines producing mirror surface finish Ra 0.2 µm." },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: "Manufacturing Facilities" }]} />

        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
            PRODUCTION PLANTS &amp; INFRASTRUCTURE
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#181c21] mt-3">
            Manufacturing Units &amp; Machinery Tech
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#181c21]/70 max-w-3xl">
            Dual manufacturing plants located in Pune (Hadapsar Industrial Estate) and Sidcul (Pantnagar TATA Vendor Park) optimized for high-volume Tier-1 OEM delivery.
          </p>
        </div>

        {/* Detailed Plants Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {PLANTS.map((plant) => (
            <div key={plant.id} className="bg-[#14171a] text-white border border-white/15 p-8 relative shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#e8590c] font-bold tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
                  {plant.label}
                </span>
                <span className="font-mono text-xs text-white/50">{plant.builtUpArea}</span>
              </div>

              <h2 className="font-display font-bold text-2xl text-white mb-2">{plant.name}</h2>
              <div className="flex items-start gap-2 text-sm text-[#c7cdd3] mb-6 font-mono">
                <MapPin size={16} className="text-[#e8590c] flex-shrink-0 mt-1" />
                <span>{plant.address}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 border border-white/10 font-mono text-xs">
                <div>
                  <div className="text-white/40 uppercase">Monthly Capacity</div>
                  <div className="text-white font-bold text-sm mt-0.5">{plant.capacity}</div>
                </div>
                <div>
                  <div className="text-white/40 uppercase">State Location</div>
                  <div className="text-[#e8590c] font-bold text-sm mt-0.5">{plant.city}</div>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#e8590c] uppercase tracking-wider mb-3">Facility Capabilities:</h4>
                <ul className="space-y-2 text-sm text-white/80 font-sans">
                  {plant.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#e8590c]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Machinery Infrastructure Table */}
        <div className="mb-20">
          <SectionHeader
            index="01"
            title="Machinery & Tool Room Inventory"
            subtitle="Equipped with automated multi-axis CNC machines and rubber vulcanization presses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineryList.map((m, i) => (
              <div key={i} className="bg-white border border-[#181c21]/15 p-6 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-[#181c21]">{m.category}</span>
                  <span className="font-mono text-xs font-bold text-[#e8590c] bg-[#e8590c]/10 px-2 py-0.5 border border-[#e8590c]/30">
                    {m.count}
                  </span>
                </div>
                <p className="text-xs text-[#181c21]/70 leading-relaxed font-sans">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Process Workflow */}
        <div className="bg-[#e8e5da] border border-[#181c21]/15 p-8 sm:p-12">
          <SectionHeader
            index="02"
            title="Tier-1 Manufacturing Control Flow"
            subtitle="From APQP CAD feasibility to final 100% Poka-Yoke inspection."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 font-mono text-xs">
            <div className="bg-[#f3f1ea] p-5 border border-[#181c21]/15">
              <div className="text-[#e8590c] font-bold text-lg mb-1">01. CAD / Tooling</div>
              <div className="font-sans text-xs text-[#181c21]/80">In-house die development, progressive stamping tooling, and injection mold CAD.</div>
            </div>

            <div className="bg-[#f3f1ea] p-5 border border-[#181c21]/15">
              <div className="text-[#e8590c] font-bold text-lg mb-1">02. Machining &amp; Moulding</div>
              <div className="font-sans text-xs text-[#181c21]/80">Precision CNC turning, VMC milling, and rubber-to-metal vulcanization bonding.</div>
            </div>

            <div className="bg-[#f3f1ea] p-5 border border-[#181c21]/15">
              <div className="text-[#e8590c] font-bold text-lg mb-1">03. Surface Treatment</div>
              <div className="font-sans text-xs text-[#181c21]/80">Tri-chrome electroplating, phosphate coating, and zinc-nickel passivation.</div>
            </div>

            <div className="bg-[#f3f1ea] p-5 border border-[#181c21]/15">
              <div className="text-[#e8590c] font-bold text-lg mb-1">04. CMM &amp; JIT Dispatch</div>
              <div className="font-sans text-xs text-[#181c21]/80">3D CMM inspection, endurance cycle testing, and direct JIT line delivery.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
