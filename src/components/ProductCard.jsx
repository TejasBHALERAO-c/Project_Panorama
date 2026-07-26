import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, ArrowUpRight, Check, FileText, Download } from "lucide-react";
import { useRfq } from "../context/RfqContext";

export default function ProductCard({ product, onQuickView, onOpenPdf }) {
  const { addToRfq, rfqItems } = useRfq();
  const isInRfq = rfqItems.some((item) => item.id === product.id);

  return (
    <div className="group relative bg-[#f9f8f4] border border-[#181c21]/15 hover:border-[#e8590c] transition-all duration-300 flex flex-col justify-between p-6 shadow-sm hover:shadow-xl rounded-xs">
      {/* Corner blueprint marks */}
      <span className="absolute -top-px -left-px w-2.5 h-2.5 border-t-2 border-l-2 border-[#181c21]/30 group-hover:border-[#e8590c]" />
      <span className="absolute -top-px -right-px w-2.5 h-2.5 border-t-2 border-r-2 border-[#181c21]/30 group-hover:border-[#e8590c]" />
      <span className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b-2 border-l-2 border-[#181c21]/30 group-hover:border-[#e8590c]" />
      <span className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b-2 border-r-2 border-[#181c21]/30 group-hover:border-[#e8590c]" />

      <div>
        {/* Product Image preview if available */}
        {product.image && (
          <div className="relative mb-4 overflow-hidden border border-[#181c21]/10 bg-white aspect-[16/10] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 left-2 bg-[#101418]/90 text-[#e8590c] font-mono text-[10px] font-bold px-2 py-0.5 border border-[#e8590c]/40">
              {product.tag}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 mb-2">
          {!product.image && (
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#e8590c] bg-[#e8590c]/10 px-2 py-0.5 border border-[#e8590c]/30">
              {product.tag}
            </span>
          )}
          <button
            onClick={() => onOpenPdf && onOpenPdf(product)}
            className="font-mono text-[10px] uppercase text-[#e8590c] hover:underline flex items-center gap-1 font-bold ml-auto"
            title="View PDF Data Sheet"
          >
            <FileText size={12} /> Tech PDF Data Sheet
          </button>
        </div>

        <h3 className="font-display font-bold text-xl text-[#181c21] group-hover:text-[#e8590c] transition-colors mb-2">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </h3>

        <p className="text-sm text-[#181c21]/70 mb-4 line-clamp-2 leading-relaxed font-sans">
          {product.shortDesc}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-1.5 mb-5 text-xs text-[#181c21]/80 border-t border-b border-[#181c21]/10 py-3 font-sans">
          {product.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-[#e8590c] flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <button
          onClick={() => onQuickView && onQuickView(product)}
          className="font-mono text-xs uppercase tracking-wide border border-[#181c21]/20 px-3 py-2 hover:bg-[#181c21] hover:text-[#f3f1ea] transition-colors flex items-center justify-center gap-1.5"
        >
          Specs <ArrowUpRight size={13} />
        </button>

        <button
          onClick={() => addToRfq(product)}
          className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 transition-colors flex items-center justify-center gap-1.5 ${
            isInRfq
              ? "bg-green-700 text-white"
              : "bg-[#e8590c] text-black font-semibold hover:bg-[#181c21] hover:text-white"
          }`}
        >
          {isInRfq ? (
            <>
              <Check size={14} /> Added
            </>
          ) : (
            <>
              <PlusCircle size={14} /> Add to RFQ
            </>
          )}
        </button>
      </div>
    </div>
  );
}
