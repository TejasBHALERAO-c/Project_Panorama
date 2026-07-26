import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ShieldCheck, Download, PlusCircle, FileText, Factory } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import KnobBlueprint from "../components/KnobBlueprint";
import LinkageBlueprint from "../components/LinkageBlueprint";
import { PRODUCTS } from "../data/companyData";
import { useRfq } from "../context/RfqContext";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToRfq, rfqItems } = useRfq();

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const isInRfq = rfqItems.some((item) => item.id === product.id);

  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs
          items={[
            { label: "Product Catalogue", link: "/products" },
            { label: product.title },
          ]}
        />

        <button
          onClick={() => navigate(-1)}
          className="font-mono text-xs uppercase tracking-wider text-[#181c21]/60 hover:text-[#e8590c] flex items-center gap-1.5 mb-6"
        >
          <ArrowLeft size={14} /> Back to Products List
        </button>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Blueprint Preview */}
          <div className="lg:col-span-6 space-y-6">
            {product.category === "gear-knobs" ? (
              <KnobBlueprint interactive={true} />
            ) : (
              <LinkageBlueprint />
            )}

            <div className="bg-white border border-[#181c21]/15 p-6 shadow-sm font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-[#e8590c] font-bold">
                <span>DRAWING CODE: {product.tag}</span>
                <span>ISO 9001 / IATF COMPLIANT</span>
              </div>
              <p className="text-[#181c21]/70 font-sans text-xs">
                All component drawings are maintained under strict configuration management. 2D PDF blueprints and 3D STEP solid models are available for authorized OEM design engineers.
              </p>
              <button
                onClick={() => alert(`Simulated CAD file download for ${product.tag}.`)}
                className="w-full font-mono text-xs uppercase bg-[#181c21] text-white py-2.5 hover:bg-[#e8590c] hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Download size={14} /> Download CAD Drawing (.STEP)
              </button>
            </div>
          </div>

          {/* Right Column: Specifications & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
                {product.tag}
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-[#181c21] mt-3">
                {product.title}
              </h1>
              <p className="text-base text-[#181c21]/70 mt-2 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Specifications Matrix Table */}
            <div className="bg-white border border-[#181c21]/15 p-6 shadow-sm space-y-3">
              <h3 className="font-mono text-xs font-bold text-[#e8590c] uppercase tracking-wider border-b border-[#181c21]/10 pb-2">
                Technical Specification Parameters
              </h3>
              <div className="space-y-2 font-mono text-xs">
                {product.specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between border-b border-[#181c21]/5 pb-1.5">
                    <span className="text-[#181c21]/60">{s.label}:</span>
                    <span className="text-[#181c21] font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-[#e8e5da] border border-[#181c21]/15 p-6 space-y-3">
              <h3 className="font-mono text-xs font-bold text-[#181c21] uppercase tracking-wider">
                Engineering Highlights &amp; Features:
              </h3>
              <ul className="space-y-2 text-xs text-[#181c21]/80">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e8590c] mt-1 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => addToRfq(product)}
                className={`font-mono text-xs uppercase tracking-widest py-4 px-6 font-bold flex-1 flex items-center justify-center gap-2 transition-all ${
                  isInRfq
                    ? "bg-green-700 text-white"
                    : "bg-[#e8590c] text-black hover:bg-[#181c21] hover:text-white"
                }`}
              >
                {isInRfq ? (
                  <>
                    <Check size={16} /> Added to RFQ Cart
                  </>
                ) : (
                  <>
                    <PlusCircle size={16} /> Add to Technical RFQ
                  </>
                )}
              </button>

              <Link
                to="/contact"
                className="font-mono text-xs uppercase tracking-widest border border-[#181c21] py-4 px-6 font-semibold text-center hover:bg-[#181c21] hover:text-white transition-colors"
              >
                Request Custom Sample
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
