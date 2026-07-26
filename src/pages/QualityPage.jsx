import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, FileCheck, Search, Activity, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import { COMPANY } from "../data/companyData";

export default function QualityPage() {
  const labEquipment = [
    { name: "3D Coordinate Measuring Machine (CMM)", brand: "Mitutoyo Japan", desc: "Micron-level 3D spatial scanning for complex machined housings and link geometries." },
    { name: "Rubber Oscillating Disc Rheometer", brand: "Alpha Technologies", desc: "Verifies elastomer vulcanization torque, scorch time, and cure rate for rubber-metal bonding." },
    { name: "Salt Spray Corrosion Test Chamber", brand: "Ascott UK", desc: "Continuous salt spray test evaluating electroplating and zinc-nickel coating endurance up to 1000 hrs." },
    { name: "Computerized Universal Tensile Tester", brand: "Instron USA", desc: "Measures rubber-to-metal peel strength (ASTM D429) and tensile break limit up to 50 kN." },
    { name: "Digital Optical Profile Projector", brand: "Mitutoyo Japan", desc: "High-magnification shadowgraph contour measurement for thread profiles and micro radii." },
    { name: "Surface Roughness Tester", brand: "Taylor Hobson", desc: "Quantifies surface finish Ra, Rz values down to 0.05 µm for hydraulic sealing surfaces." },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: "Quality & Certifications" }]} />

        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
            IATF 16949 / TS &amp; DUNS ACCREDITATION
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#181c21] mt-3">
            Zero-Defect Quality Engineering
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#181c21]/70 max-w-3xl">
            Our quality management system is built to satisfy stringent automotive OEM standards with rigorous APQP, FMEA, PPAP Level 3 documentation, and full batch traceability.
          </p>
        </div>

        {/* Certifications Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {COMPANY.certs.map((c, idx) => (
            <div key={idx} className="bg-[#14171a] text-white border border-white/15 p-6 relative shadow-lg">
              <ShieldCheck className="text-[#e8590c] mb-3" size={32} />
              <h3 className="font-display font-bold text-xl text-white mb-1">{c.title}</h3>
              <div className="font-mono text-xs text-[#e8590c] font-bold mb-3">{c.code}</div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Metrology & Testing Lab Section */}
        <div className="mb-20">
          <SectionHeader
            index="01"
            title="In-House Metrology & Testing Lab"
            subtitle="State-of-the-art testing equipment ensuring zero-defect component delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labEquipment.map((eq, i) => (
              <div key={i} className="bg-white border border-[#181c21]/15 p-6 hover:border-[#e8590c] transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#e8590c] bg-[#e8590c]/10 px-2 py-0.5 border border-[#e8590c]/30">
                    {eq.brand}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#181c21] mb-2">{eq.name}</h3>
                <p className="text-xs text-[#181c21]/75 leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Control Protocols */}
        <div className="bg-[#e8e5da] border border-[#181c21]/15 p-8 sm:p-12">
          <SectionHeader
            index="02"
            title="OEM Quality Control Protocols"
            subtitle="Standardized quality procedures executed on every production batch."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-5 border border-[#181c21]/15">
              <div className="font-mono text-xs text-[#e8590c] font-bold uppercase mb-1">APQP</div>
              <div className="font-display font-bold text-base mb-2">Advanced Product Quality Planning</div>
              <p className="text-xs text-[#181c21]/70">Proactive quality planning starting from drawing analysis and initial prototype sampling.</p>
            </div>

            <div className="bg-white p-5 border border-[#181c21]/15">
              <div className="font-mono text-xs text-[#e8590c] font-bold uppercase mb-1">PPAP LEVEL 3</div>
              <div className="font-display font-bold text-base mb-2">Production Part Approval Process</div>
              <p className="text-xs text-[#181c21]/70">Full dimensional results, material test reports, and process flow diagrams provided for OEM sign-off.</p>
            </div>

            <div className="bg-white p-5 border border-[#181c21]/15">
              <div className="font-mono text-xs text-[#e8590c] font-bold uppercase mb-1">SPC MONITORING</div>
              <div className="font-display font-bold text-base mb-2">Statistical Process Control</div>
              <p className="text-xs text-[#181c21]/70">Real-time control charts monitoring critical-to-quality (CTQ) dimensions during machining.</p>
            </div>

            <div className="bg-white p-5 border border-[#181c21]/15">
              <div className="font-mono text-xs text-[#e8590c] font-bold uppercase mb-1">POKA-YOKE</div>
              <div className="font-display font-bold text-base mb-2">Mistake Proofing Fixtures</div>
              <p className="text-xs text-[#181c21]/70">Automated optical and mechanical interlocks preventing defective sub-assemblies on assembly lines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
