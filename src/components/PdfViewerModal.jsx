import React from "react";
import { X, Download, Printer, ShieldCheck, FileText, CheckCircle2, Factory } from "lucide-react";

export default function PdfViewerModal({ product, cert, onClose }) {
  if (!product && !cert) return null;

  const handlePrint = () => {
    window.print();
  };

  const isCert = !!cert;
  const title = isCert ? cert.title : product.title;
  const docNo = isCert ? `PDF-CERT-${cert.code.replace(/\s+/g, "_")}-2026` : product.pdfDoc?.docNo || `PDF-TDS-${product.tag.replace(/[^A-Z0-9]/gi, "_")}-2026`;
  const revision = isCert ? "ISO Verified" : product.pdfDoc?.revision || "Rev 3.0";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:static">
      <div className="bg-white text-[#181c21] border border-[#181c21]/30 max-w-4xl w-full rounded-xs shadow-2xl overflow-hidden my-8 print:shadow-none print:border-none print:my-0">
        {/* PDF Modal Controls Bar (Hidden during print) */}
        <div className="bg-[#101418] text-white px-6 py-4 flex items-center justify-between print:hidden border-b border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs">
            <FileText className="text-[#e8590c]" size={18} />
            <div>
              <span className="font-bold text-[#e8590c]">{docNo}</span>
              <span className="text-white/50 ml-2">({revision})</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="font-mono text-xs uppercase px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors border border-white/20"
            >
              <Printer size={14} className="text-[#e8590c]" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white rounded-xs hover:bg-white/10"
              aria-label="Close PDF Viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Formatted Technical Data Sheet Body */}
        <div className="p-8 sm:p-12 space-y-8 font-sans bg-[#ffffff] text-[#181c21]" id="pdf-content">
          {/* Header Block */}
          <div className="border-b-2 border-[#181c21] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-[#181c21] text-white flex items-center justify-center font-mono text-xs font-bold">
                  PA
                </div>
                <span className="font-display font-black text-xl tracking-tight">
                  PANORAMA <span className="text-[#e8590c]">AUTOMOTIVE</span>
                </span>
              </div>
              <div className="font-mono text-[10px] text-[#181c21]/70 uppercase tracking-widest">
                Panorama Automotive Industries Pvt. Ltd. · Tier-1 OEM Supplier
              </div>
            </div>

            <div className="font-mono text-xs text-right space-y-0.5 bg-[#f9f8f4] p-3 border border-[#181c21]/15">
              <div>DOCUMENT NO: <strong className="text-[#e8590c]">{docNo}</strong></div>
              <div>REVISION: <strong>{revision}</strong></div>
              <div>DATE: <strong>{new Date().toISOString().split("T")[0]}</strong></div>
              <div>STATUS: <span className="text-green-700 font-bold">APPROVED FOR RELEASE</span></div>
            </div>
          </div>

          {/* Title */}
          <div>
            <div className="font-mono text-xs text-[#e8590c] font-bold tracking-wider uppercase mb-1">
              {isCert ? "OFFICIAL COMPLIANCE CERTIFICATION DOCUMENT" : `ENGINEERING SPECIFICATION DATA SHEET (${product.tag})`}
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-[#181c21]">
              {title}
            </h1>
            <p className="text-sm text-[#181c21]/70 mt-2 leading-relaxed">
              {isCert ? cert.desc : product.fullDesc}
            </p>
          </div>

          {/* Product Image & Specs Grid if Product */}
          {!isCert && product && (
            <div className="grid sm:grid-cols-12 gap-8 items-center bg-[#f9f8f4] border border-[#181c21]/15 p-6">
              {product.image && (
                <div className="sm:col-span-5 bg-white border border-[#181c21]/10 p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-xs"
                  />
                  <div className="font-mono text-[10px] text-center text-[#181c21]/60 mt-2">
                    FIG. 01 — {product.title} Product View
                  </div>
                </div>
              )}
              <div className="sm:col-span-7 space-y-2 font-mono text-xs">
                <div className="font-bold text-[#e8590c] uppercase border-b border-[#181c21]/10 pb-1 mb-2">
                  Key Technical Data
                </div>
                {product.specs.map((s, idx) => (
                  <div key={idx} className="flex justify-between border-b border-[#181c21]/10 pb-1">
                    <span className="text-[#181c21]/60">{s.label}:</span>
                    <span className="text-[#181c21] font-bold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features / Quality Standards */}
          {!isCert && product && (
            <div>
              <h3 className="font-mono text-xs font-bold text-[#181c21] uppercase tracking-wider mb-3">
                Quality &amp; Design Compliance Checklist:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-[#f9f8f4] border border-[#181c21]/10">
                    <CheckCircle2 size={14} className="text-[#e8590c] flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certification details if Cert */}
          {isCert && (
            <div className="p-6 bg-[#f9f8f4] border border-[#181c21]/15 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-[#e8590c]" />
                <div>
                  <div className="font-bold text-base text-[#181c21]">{cert.title}</div>
                  <div className="text-[#e8590c] font-bold">{cert.code}</div>
                </div>
              </div>
              <p className="text-[#181c21]/80 font-sans text-sm">{cert.desc}</p>
              <div className="pt-3 border-t border-[#181c21]/10 grid grid-cols-2 gap-4 text-[11px]">
                <div>Audited Authority: <strong className="text-[#181c21]">TÜV NORD / D-U-N-S Desk</strong></div>
                <div>Manufacturing Scope: <strong className="text-[#181c21]">Hadapsar &amp; Sidcul Units</strong></div>
              </div>
            </div>
          )}

          {/* Sign-off & Stamp block */}
          <div className="pt-8 border-t border-[#181c21]/20 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#181c21]/70">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#e8590c] flex items-center justify-center font-bold text-[#e8590c] rotate-[-12deg] bg-[#e8590c]/10 text-[10px] text-center leading-tight">
                PASSED QA
              </div>
              <div>
                <div>Quality Management System</div>
                <div className="font-bold text-[#181c21]">Panorama Automotive Industries Pvt. Ltd.</div>
              </div>
            </div>

            <div className="text-right text-[11px]">
              <div>Authorized Signatory: <strong>Chief Quality Officer</strong></div>
              <div>HADAPSAR INDUSTRIAL ESTATE, PUNE - 411013</div>
            </div>
          </div>
        </div>

        {/* Footer actions in modal */}
        <div className="bg-[#f9f8f4] px-6 py-4 border-t border-[#181c21]/15 flex items-center justify-between print:hidden">
          <span className="font-mono text-xs text-[#181c21]/60">
            Click "Print / Save PDF" to download or export as PDF document.
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs uppercase px-5 py-2 bg-[#181c21] text-white hover:bg-[#e8590c] hover:text-black transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
