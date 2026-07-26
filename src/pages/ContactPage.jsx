import React, { useState } from "react";
import { Phone, Mail, MapPin, Factory, Send, CheckCircle2, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import { PLANTS, PHONES, EMAIL, COMPANY } from "../data/companyData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    plant: "plant-pune",
    requirement: "",
    fileSimulated: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: "Contact & Enquiry" }]} />

        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
            PLANT LOCATIONS &amp; RFQ DESK
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#181c21] mt-3">
            Get In Touch With Engineering
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#181c21]/70 max-w-3xl">
            Contact our corporate sales desk in Pune or our vendor park operations in Sidcul. Submit CAD specifications or request an on-site facility audit.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Direct Plant & Phone Directory */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#181c21]/15 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-2xl text-[#181c21] border-b border-[#181c21]/10 pb-4">
                Corporate Contacts
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {PHONES.map((ph, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Phone size={16} className="text-[#e8590c] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#181c21]/50 uppercase text-[10px]">{ph.label}</div>
                      <a href={`tel:${ph.number}`} className="font-bold text-[#181c21] hover:text-[#e8590c] text-sm">
                        {ph.number}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-3 pt-2">
                  <Mail size={16} className="text-[#e8590c] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#181c21]/50 uppercase text-[10px]">Official Response Email</div>
                    <a href={`mailto:${EMAIL}`} className="font-bold text-[#181c21] hover:text-[#e8590c] text-sm">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Plant Locations Details */}
            {PLANTS.map((plant) => (
              <div key={plant.id} className="bg-[#14171a] text-white border border-white/15 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="font-mono text-xs text-[#e8590c] font-bold tracking-wider uppercase">
                  {plant.label}
                </div>
                <h4 className="font-display font-bold text-xl text-white">{plant.name}</h4>
                <p className="text-xs text-white/70 font-mono leading-relaxed">{plant.address}</p>

                <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-white/50 border-t border-white/10">
                  <span>Built-up: {plant.builtUpArea}</span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(plant.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e8590c] hover:underline flex items-center gap-1"
                  >
                    Google Maps <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#181c21]/15 p-8 sm:p-10 shadow-lg relative">
              <span className="font-mono text-xs text-[#e8590c] font-bold tracking-wider uppercase mb-2 block">
                DIRECT ENQUIRY &amp; CAD SUBMISSION
              </span>
              <h3 className="font-display font-bold text-2xl text-[#181c21] mb-6">
                Technical Specification Enquiry
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-[#f9f8f4] border border-green-600/30 p-8">
                  <CheckCircle2 size={48} className="text-green-600 mx-auto" />
                  <h4 className="font-display font-bold text-2xl text-[#181c21]">Enquiry Successfully Submitted!</h4>
                  <p className="text-sm text-[#181c21]/70 max-w-md mx-auto">
                    Thank you <strong className="text-[#181c21]">{form.name}</strong> from <strong className="text-[#181c21]">{form.company}</strong>. Our senior engineering team in Pune will review your specifications and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-xs uppercase bg-[#e8590c] text-black font-bold px-6 py-3"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-[#181c21]/70 block mb-1.5 uppercase">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="e.g. Tata Motors / Mahindra"
                        className="w-full bg-[#f9f8f4] border border-[#181c21]/20 px-3.5 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs text-[#181c21]/70 block mb-1.5 uppercase">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full bg-[#f9f8f4] border border-[#181c21]/20 px-3.5 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-[#181c21]/70 block mb-1.5 uppercase">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="engineer@company.com"
                        className="w-full bg-[#f9f8f4] border border-[#181c21]/20 px-3.5 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs text-[#181c21]/70 block mb-1.5 uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91..."
                        className="w-full bg-[#f9f8f4] border border-[#181c21]/20 px-3.5 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#181c21]/70 block mb-1.5 uppercase">
                      Target Manufacturing Plant
                    </label>
                    <select
                      value={form.plant}
                      onChange={(e) => setForm({ ...form, plant: e.target.value })}
                      className="w-full bg-[#f9f8f4] border border-[#181c21]/20 px-3.5 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-sans"
                    >
                      {PLANTS.map((plant) => (
                        <option key={plant.id} value={plant.id}>
                          {plant.label} — {plant.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#181c21]/70 block mb-1.5 uppercase">
                      Technical Requirements / Blueprint Details *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      placeholder="Describe target component specs, monthly batch quantities, material grade, or surface finishing preferences..."
                      className="w-full bg-[#f9f8f4] border border-[#181c21]/20 px-3.5 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-sans"
                    ></textarea>
                  </div>

                  {/* Attachment simulator */}
                  <div className="p-4 bg-[#f9f8f4] border border-dashed border-[#181c21]/30 text-center font-mono text-xs">
                    <p className="text-[#181c21]/70 mb-2">Optional 2D/3D CAD Drawing Attachment (.STEP, .IGES, .DWG, .PDF)</p>
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, fileSimulated: !form.fileSimulated })}
                      className="px-3 py-1.5 bg-[#181c21] text-white text-[11px] uppercase tracking-wider hover:bg-[#e8590c] hover:text-black transition-colors"
                    >
                      {form.fileSimulated ? "✓ Attached sample_spec_drawing.step" : "+ Attach CAD File"}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black font-bold py-4 hover:bg-[#181c21] hover:text-white transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send size={16} /> Submit Technical Inquiry to Engineering
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
