import React from "react";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, CheckCircle2, Factory, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import { CLIENTS } from "../data/companyData";

export default function ClientsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: "OEM Clients & Partners" }]} />

        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
            TIER-1 OEM PARTNERSHIPS
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#181c21] mt-3">
            Trusted by Automotive Leaders
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#181c21]/70 max-w-3xl">
            For decades, Panorama Automotive has served as a direct Tier-1 supplier to India's and the world's most prestigious vehicle manufacturers and industrial equipment OEMs.
          </p>
        </div>

        {/* Clients Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#181c21]/15 p-8 relative hover:border-[#e8590c] transition-all shadow-sm group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-black text-2xl tracking-wide text-[#181c21] group-hover:text-[#e8590c] transition-colors">
                  {client.logoText}
                </span>
                <span className="font-mono text-[10px] font-bold uppercase bg-[#181c21] text-white px-2.5 py-1">
                  {client.category}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#181c21] mb-1">{client.name}</h3>
              <p className="text-sm text-[#181c21]/60 mb-4">{client.tagline}</p>

              <div className="pt-4 border-t border-[#181c21]/10 flex items-center justify-between font-mono text-xs text-[#e8590c] font-bold">
                <span>{client.relationship}</span>
                <ShieldCheck size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Excellence Banner */}
        <div className="bg-[#14171a] text-white p-8 sm:p-12 border border-white/15">
          <SectionHeader
            index="01"
            title="Supply Chain & JIT Logistics Excellence"
            subtitle="Meeting demanding OEM assembly line delivery schedules with zero line stoppage."
            dark={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 font-mono">
            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="font-display font-black text-4xl text-[#e8590c] mb-1">99.8%</div>
              <div className="text-xs uppercase text-white/70">On-Time Delivery Rating</div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="font-display font-black text-4xl text-white mb-1">0 PPM</div>
              <div className="text-xs uppercase text-white/70">Target Defect Performance</div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="font-display font-black text-4xl text-[#e8590c] mb-1">24/7</div>
              <div className="text-xs uppercase text-white/70">Vendor Park JIT Supply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
