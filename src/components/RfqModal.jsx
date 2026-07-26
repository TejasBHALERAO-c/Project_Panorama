import React, { useState } from "react";
import { X, Trash2, Send, CheckCircle2, Factory, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { useRfq } from "../context/RfqContext";
import { PLANTS } from "../data/companyData";

export default function RfqModal() {
  const { rfqItems, removeFromRfq, updateQuantity, clearRfq, isRfqOpen, setIsRfqOpen } = useRfq();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    targetPlant: "plant-pune",
    notes: "",
  });

  if (!isRfqOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rfqItems.length === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 4s or let user close
    }, 4000);
  };

  const handleClose = () => {
    setIsRfqOpen(false);
    if (submitted) {
      clearRfq();
      setSubmitted(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#14171a] text-[#f3f1ea] border-l border-white/20 h-full flex flex-col justify-between shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#0f1215] border-b border-white/15 p-6 flex items-center justify-between">
          <div>
            <div className="font-mono text-xs text-[#e8590c] tracking-widest uppercase mb-1 flex items-center gap-2">
              <FileSpreadsheet size={15} /> OEM Request For Quote (RFQ)
            </div>
            <h2 className="font-display font-bold text-xl text-white">Batch Quotation Builder</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors rounded-sm"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 space-y-6">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">RFQ Request Received!</h3>
              <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{formData.contactPerson || "OEM Engineer"}</strong>. Your technical enquiry for <strong className="text-[#e8590c]">{rfqItems.length} component line(s)</strong> has been logged to our sales engineering desk.
              </p>
              <div className="p-4 bg-white/5 border border-white/10 max-w-md mx-auto font-mono text-xs text-left space-y-1">
                <div>Reference ID: <span className="text-[#e8590c]">RFQ-2026-PA-{Math.floor(10000 + Math.random() * 90000)}</span></div>
                <div>Assigned Facility: {PLANTS.find(p => p.id === formData.targetPlant)?.name}</div>
                <div>Status: <span className="text-green-400">Engineering Feasibility Review</span></div>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black px-6 py-3 font-bold hover:bg-white transition-colors"
              >
                Close & Return to Catalogue
              </button>
            </div>
          ) : rfqItems.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="text-white/30 font-mono text-5xl">[ EMPTY ]</div>
              <p className="text-white/60 font-mono text-sm">Your RFQ component cart has no items.</p>
              <p className="text-white/40 text-xs">Browse our products catalog and click "Add to RFQ" to request engineered quotes.</p>
            </div>
          ) : (
            <>
              {/* Selected Parts List */}
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs uppercase text-white/60">
                  <span>Selected Components ({rfqItems.length})</span>
                  <button onClick={clearRfq} className="hover:text-[#e8590c] underline">Clear All</button>
                </div>
                <div className="space-y-3">
                  {rfqItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/5 border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <span className="font-mono text-[10px] text-[#e8590c]">{item.tag}</span>
                        <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                        <span className="text-xs text-white/50">{item.shortDesc}</span>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center">
                        <div className="flex items-center gap-1 font-mono text-xs bg-white/10 px-2 py-1">
                          <span className="text-white/60 text-[10px]">Qty:</span>
                          <input
                            type="number"
                            min="100"
                            step="500"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 100)}
                            className="w-20 bg-transparent text-white text-right focus:outline-none focus:text-[#e8590c]"
                          />
                          <span className="text-white/50 text-[10px]">pcs</span>
                        </div>
                        <button
                          onClick={() => removeFromRfq(item.id)}
                          className="text-white/40 hover:text-red-400 p-1"
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/15">
                <div className="font-mono text-xs text-[#e8590c] tracking-widest uppercase">
                  STEP 2 — OEM &amp; PROCUREMENT CONTACT
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[11px] text-white/70 block mb-1">Company / OEM Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Tata Motors / Tier-1 Partner"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:border-[#e8590c] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-white/70 block mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:border-[#e8590c] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[11px] text-white/70 block mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="engineer@company.com"
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:border-[#e8590c] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-white/70 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98..."
                      className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:border-[#e8590c] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-white/70 block mb-1">Target Manufacturing Plant</label>
                  <select
                    value={formData.targetPlant}
                    onChange={(e) => setFormData({ ...formData, targetPlant: e.target.value })}
                    className="w-full bg-[#181c21] border border-white/15 px-3 py-2 text-sm text-white focus:border-[#e8590c] focus:outline-none"
                  >
                    {PLANTS.map((plant) => (
                      <option key={plant.id} value={plant.id}>
                        {plant.label} — {plant.city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-white/70 block mb-1">Special Blueprint / Tolerance Requirements</label>
                  <textarea
                    rows="2"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specify target lead time, CAD drawing reference, material grade, or testing standards..."
                    className="w-full bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:border-[#e8590c] focus:outline-none"
                  ></textarea>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 font-mono text-[11px] text-white/60 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#e8590c] flex-shrink-0" />
                  <span>Submissions reviewed under strict Non-Disclosure Agreement (NDA). Response within 24 hours.</span>
                </div>

                <button
                  type="submit"
                  className="w-full font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black font-bold py-3.5 hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={15} /> Submit Official Technical RFQ
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
