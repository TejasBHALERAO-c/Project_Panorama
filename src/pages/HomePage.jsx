import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck, ArrowUpRight, Factory, ChevronRight, Award,
  Cpu, Sliders, Flame, Sparkles, Wrench, CheckCircle2, Download, Layers, FileText
} from "lucide-react";
import KnobBlueprint from "../components/KnobBlueprint";
import LinkageBlueprint from "../components/LinkageBlueprint";
import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import PdfViewerModal from "../components/PdfViewerModal";
import { COMPANY, PRODUCTS, CLIENTS, PLANTS, CAPABILITIES } from "../data/companyData";
import { useRfq } from "../context/RfqContext";

export default function HomePage() {
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [pdfModalData, setPdfModalData] = useState(null); // { product, cert }
  const { addToRfq } = useRfq();

  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="bg-[#f3f1ea] text-[#181c21]">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-[#101418] text-[#f3f1ea] overflow-hidden border-b border-white/10">
        {/* Blueprint background lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,89,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,89,12,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-[#e8590c] text-[#e8590c] bg-[#e8590c]/10 px-3.5 py-1.5 rounded-xs">
              <Factory size={14} /> Est. {COMPANY.established} · TS &amp; DUNS Certified Tier-1 Supplier
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-white">
              Precision-Engineered Parts for <span className="text-[#e8590c]">Global Automotive OEMs.</span>
            </h1>

            <p className="text-[#c7cdd3] text-base sm:text-xl max-w-2xl leading-relaxed font-sans">
              Specialized in <strong className="text-white">Gear Shifter Assemblies</strong>, <strong className="text-white">Precision Machined Hydraulic Parts</strong>, and <strong className="text-white">Metal-to-Rubber Bonded Components</strong> engineered for high-performance passenger, commercial, and heavy-duty vehicles.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/products"
                className="font-mono text-xs tracking-widest uppercase bg-[#e8590c] text-black font-bold px-7 py-4 hover:bg-white transition-all flex items-center gap-2 shadow-lg"
              >
                Explore Product Line <ChevronRight size={16} />
              </Link>
              <button
                onClick={() => setPdfModalData({ product: PRODUCTS[0] })}
                className="font-mono text-xs tracking-widest uppercase border border-white/30 text-white font-semibold px-6 py-4 hover:border-[#e8590c] hover:text-[#e8590c] transition-all flex items-center gap-2"
              >
                <FileText size={15} className="text-[#e8590c]" /> Get PDF Data Sheet
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">48+</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Years Manufacturing</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#e8590c]">2</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">High-Tech Plants</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-white">99.8%</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Quality Score</div>
              </div>
            </div>
          </div>

          {/* Right CAD Interactive Diagram */}
          <div className="lg:col-span-5">
            <KnobBlueprint interactive={true} />
          </div>
        </div>
      </section>

      {/* ---------------- OEM CLIENT LOGOS TICKER ---------------- */}
      <section className="bg-[#0b0d0f] text-white py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center font-mono text-xs tracking-widest uppercase text-white/50 mb-6">
            TRUSTED TIER-1 PARTNER TO LEADING AUTOMOTIVE &amp; INDUSTRIAL OEMS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="bg-[#14171a] p-5 flex flex-col items-center justify-center hover:bg-[#e8590c] hover:text-black transition-all group cursor-pointer"
              >
                <span className="font-display font-black text-base sm:text-lg tracking-wider text-center">
                  {c.logoText}
                </span>
                <span className="font-mono text-[9px] text-white/50 group-hover:text-black/70 uppercase tracking-tight mt-1">
                  {c.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COMPANY OVERVIEW / HISTORY SUMMARY ---------------- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          index="01"
          title="Engineering Excellence Since 1977"
          subtitle="Tier-1 Automotive Component Manufacturing with TS & DUNS Accreditation"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-[#181c21]/80 leading-relaxed font-sans">
              Operating continuously since <strong>1977</strong>, Panorama Automotive Industries Pvt. Ltd. has built an unbroken legacy of precision manufacturing for global Original Equipment Manufacturers (OEMs).
            </p>

            <p className="text-[#181c21]/70 leading-relaxed">
              We specialize in custom design, tool development, precision machining, gear shift assemblies (including AMT variants), and specialized rubber-to-metal vulcanized components. Our dual production plants in <strong>Pune, Maharashtra</strong> and <strong>Sidcul, Uttarakhand</strong> are equipped with state-of-the-art machinery and 3D CMM inspection systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {COMPANY.certs.map((cert) => (
                <div key={cert.code} className="bg-white border border-[#181c21]/15 p-4 rounded-xs shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#e8590c] font-mono text-xs font-bold mb-1">
                      <ShieldCheck size={16} /> {cert.code}
                    </div>
                    <div className="font-display font-bold text-sm text-[#181c21]">{cert.title}</div>
                  </div>
                  <button
                    onClick={() => setPdfModalData({ cert })}
                    className="font-mono text-[10px] text-[#e8590c] hover:underline font-bold mt-3 text-left flex items-center gap-1"
                  >
                    <FileText size={12} /> Download PDF Cert
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#181c21] text-[#f3f1ea] px-6 py-3.5 hover:bg-[#e8590c] hover:text-black transition-colors"
              >
                Read Full Enterprise History &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <LinkageBlueprint />
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PRODUCTS CATALOGUE ---------------- */}
      <section className="bg-[#e8e5da] py-24 border-t border-b border-[#181c21]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              index="02"
              title="Product Capabilities Catalogue"
              subtitle="OEM-Engineered Gear Shift Assemblies, Machined Hydraulics & Rubber Bonded Parts"
            />
            <Link
              to="/products"
              className="font-mono text-xs uppercase tracking-widest bg-[#181c21] text-white px-5 py-3 hover:bg-[#e8590c] hover:text-black transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              View Full Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProductForModal(p)}
                onOpenPdf={(p) => setPdfModalData({ product: p })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MANUFACTURING CAPABILITIES GRID ---------------- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          index="03"
          title="In-House Engineering Capabilities"
          subtitle="Advanced Tool Room, CNC Machining, Electroplating & Metrology Testing"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#181c21]/15 p-6 hover:border-[#e8590c] transition-all shadow-sm group"
            >
              <div className="w-12 h-12 bg-[#181c21] text-[#e8590c] flex items-center justify-center mb-4 group-hover:bg-[#e8590c] group-hover:text-black transition-all">
                {idx === 0 && <Cpu size={24} />}
                {idx === 1 && <Flame size={24} />}
                {idx === 2 && <Sliders size={24} />}
                {idx === 3 && <Sparkles size={24} />}
                {idx === 4 && <Wrench size={24} />}
                {idx === 5 && <ShieldCheck size={24} />}
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-[#181c21]">{cap.title}</h3>
              <p className="text-sm text-[#181c21]/70 leading-relaxed font-sans">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black font-bold px-8 py-4 hover:bg-[#181c21] hover:text-white transition-colors"
          >
            Inspect Infrastructure &amp; Machinery &rarr;
          </Link>
        </div>
      </section>

      {/* ---------------- MANUFACTURING PLANTS HIGHLIGHT ---------------- */}
      <section className="bg-[#101418] text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="04"
            title="Dual Manufacturing Plants"
            subtitle="Strategically located facilities in Pune (Maharashtra) & Sidcul (Uttarakhand)"
            dark={true}
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {PLANTS.map((plant) => (
              <div
                key={plant.id}
                className="bg-[#171c21] border border-white/15 p-8 relative hover:border-[#e8590c] transition-colors"
              >
                <div className="font-mono text-xs text-[#e8590c] font-bold tracking-wider uppercase mb-2">
                  {plant.label}
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{plant.name}</h3>
                <p className="text-sm text-white/70 mb-6 font-mono">{plant.address}</p>

                {plant.image && (
                  <div className="mb-6 overflow-hidden border border-white/10 rounded-xs h-44">
                    <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/10 font-mono text-xs">
                  <div>
                    <div className="text-white/40 uppercase">Monthly Capacity</div>
                    <div className="text-white font-bold">{plant.capacity}</div>
                  </div>
                  <div>
                    <div className="text-white/40 uppercase">Built-Up Area</div>
                    <div className="text-white font-bold">{plant.builtUpArea}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-[11px] text-white/50 uppercase">Key Plant Highlights:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80 font-sans">
                    {plant.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#e8590c]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- QUICK SPEC MODAL IF TRIGGERED ---------------- */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#14171a] text-white border border-white/20 max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>

            <div className="font-mono text-xs text-[#e8590c]">{selectedProductForModal.tag}</div>
            <h3 className="font-display font-bold text-2xl">{selectedProductForModal.title}</h3>
            <p className="text-sm text-white/70">{selectedProductForModal.fullDesc}</p>

            <div className="border-t border-b border-white/10 py-4">
              <div className="font-mono text-xs text-white/50 uppercase mb-3">Technical Specifications Matrix:</div>
              <div className="space-y-2 font-mono text-xs">
                {selectedProductForModal.specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-white/60">{s.label}:</span>
                    <span className="text-white font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  setPdfModalData({ product: selectedProductForModal });
                  setSelectedProductForModal(null);
                }}
                className="font-mono text-xs uppercase px-4 py-2.5 bg-white/10 text-white hover:bg-white/20 flex items-center gap-1.5"
              >
                <FileText size={14} className="text-[#e8590c]" /> PDF Data Sheet
              </button>
              <button
                onClick={() => {
                  addToRfq(selectedProductForModal);
                  setSelectedProductForModal(null);
                }}
                className="font-mono text-xs uppercase px-5 py-2.5 bg-[#e8590c] text-black font-bold hover:bg-white"
              >
                Add to RFQ Basket
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- PDF DATA SHEET VIEWER MODAL ---------------- */}
      {pdfModalData && (
        <PdfViewerModal
          product={pdfModalData.product}
          cert={pdfModalData.cert}
          onClose={() => setPdfModalData(null)}
        />
      )}
    </div>
  );
}
