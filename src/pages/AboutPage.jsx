import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Factory, Clock, CheckCircle2, FileText, ChevronRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import { COMPANY } from "../data/companyData";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: "About Enterprise" }]} />

        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
            COMPANY PROFILE &amp; HERITAGE
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#181c21] mt-3">
            Over Four Decades of Automotive Precision
          </h1>
          <p className="mt-3 text-lg text-[#181c21]/70 max-w-3xl">
            Established in 1977, Panorama Automotive Industries Pvt. Ltd. is a premier Tier-1 OEM supplier specializing in gear shift assemblies, precision hydraulic machining, and rubber-to-metal bonding.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-[#181c21]/15 p-8 relative shadow-sm">
            <span className="font-mono text-xs text-[#e8590c] font-bold tracking-wider uppercase mb-2 block">
              OUR MISSION
            </span>
            <h3 className="font-display font-bold text-2xl mb-3 text-[#181c21]">Zero-Defect Tier-1 Manufacturing</h3>
            <p className="text-[#181c21]/80 leading-relaxed font-sans">{COMPANY.mission}</p>
          </div>

          <div className="bg-[#14171a] text-white border border-white/15 p-8 relative shadow-xl">
            <span className="font-mono text-xs text-[#e8590c] font-bold tracking-wider uppercase mb-2 block">
              OUR VISION
            </span>
            <h3 className="font-display font-bold text-2xl mb-3 text-white">Global Automotive Supremacy</h3>
            <p className="text-white/80 leading-relaxed font-sans">{COMPANY.vision}</p>
          </div>
        </div>

        {/* Heritage Timeline */}
        <div className="mb-20">
          <SectionHeader
            index="01"
            title="Corporate Milestones (1977 – Present)"
            subtitle="The evolution of Panorama Automotive from a local precision machining unit to an international Tier-1 OEM supplier."
          />

          <div className="relative border-l-2 border-[#e8590c] ml-4 md:ml-32 space-y-12 py-4">
            {COMPANY.milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#181c21] border-2 border-[#e8590c] group-hover:bg-[#e8590c] transition-colors" />

                {/* Year tag for larger screens */}
                <div className="md:absolute md:-left-32 md:top-1 font-mono text-sm font-bold text-[#e8590c] tracking-widest bg-white md:bg-transparent px-2 md:px-0 py-0.5 inline-block md:block mb-2 md:mb-0">
                  {m.year}
                </div>

                <div className="bg-white border border-[#181c21]/15 p-6 hover:border-[#e8590c] transition-colors shadow-sm">
                  <h3 className="font-display font-bold text-xl text-[#181c21] mb-2">{m.title}</h3>
                  <p className="text-sm text-[#181c21]/75 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Certifications Detail */}
        <div className="bg-[#e8e5da] border border-[#181c21]/15 p-8 sm:p-12 mb-16">
          <SectionHeader
            index="02"
            title="Quality Accreditations & Compliance"
            subtitle="Our systems are audited and certified to meet global OEM automotive standards."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {COMPANY.certs.map((c, i) => (
              <div key={i} className="bg-[#f3f1ea] border border-[#181c21]/15 p-6 space-y-3">
                <div className="w-10 h-10 bg-[#181c21] text-[#e8590c] flex items-center justify-center font-mono font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#181c21]">{c.title}</h3>
                <div className="font-mono text-xs text-[#e8590c] font-bold">{c.code}</div>
                <p className="text-xs text-[#181c21]/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#101418] text-white p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">Partner with Panorama Automotive</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base">
            Whether you are launching a new passenger vehicle platform, upgrading commercial shift linkages, or seeking reliable high-volume hydraulic precision machining, our engineering team is ready.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black font-bold px-8 py-4 hover:bg-white transition-colors"
            >
              Initiate Technical Discussion <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
