import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, FileText, ShoppingBag, ShieldCheck, Factory } from "lucide-react";
import { useRfq } from "../context/RfqContext";
import { COMPANY, EMAIL, PHONES } from "../data/companyData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { rfqItems, setIsRfqOpen } = useRfq();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About & History" },
    { path: "/products", label: "Product Catalog" },
    { path: "/facilities", label: "Plants & Tech" },
    { path: "/quality", label: "Quality & Certs" },
    { path: "/clients", label: "OEM Clients" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300">
      {/* Top Engineering Strip */}
      <div className="bg-[#0f1215] text-[#8b95a1] text-[11px] font-mono border-b border-white/10 py-1.5 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
          <span className="flex items-center gap-1 text-[#e8590c] font-semibold">
            <ShieldCheck size={13} /> IATF 16949 &amp; DUNS Certified
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline">Tier-1 OEM Automotive Supplier · Est. 1977</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-sans">
          <a href={`tel:${PHONES[0].number}`} className="hover:text-white flex items-center gap-1 font-mono text-[11px]">
            <Phone size={11} className="text-[#e8590c]" /> {PHONES[0].number}
          </a>
          <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-1 hover:text-white font-mono text-[11px]">
            <Mail size={11} className="text-[#e8590c]" /> {EMAIL}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-[#14171a]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10 text-white" : "bg-[#14171a] py-4 text-white border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border-2 border-[#e8590c] bg-[#0f1215] flex items-center justify-center font-mono text-xs font-extrabold text-white group-hover:bg-[#e8590c] group-hover:text-black transition-all">
              PA
            </div>
            <div>
              <div className="font-display font-black tracking-wider text-base sm:text-lg leading-tight uppercase">
                PANORAMA <span className="text-[#e8590c]">AUTOMOTIVE</span>
              </div>
              <div className="font-mono text-[9px] text-white/60 tracking-widest uppercase">
                Industries Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-mono text-xs tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? "text-[#e8590c] font-bold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e8590c]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* RFQ Cart Button */}
            <button
              onClick={() => setIsRfqOpen(true)}
              className="relative font-mono text-xs tracking-wider uppercase bg-white/10 hover:bg-[#e8590c] hover:text-black text-white px-3.5 py-2 transition-all flex items-center gap-2 border border-white/20"
              aria-label="View RFQ items"
            >
              <ShoppingBag size={15} />
              <span className="hidden sm:inline">RFQ Cart</span>
              {rfqItems.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#e8590c] text-black text-[10px] font-bold flex items-center justify-center">
                  {rfqItems.length}
                </span>
              )}
            </button>

            {/* Direct RFQ CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex font-mono text-xs tracking-widest uppercase bg-[#e8590c] text-black font-bold px-4 py-2 hover:bg-white transition-colors border border-[#e8590c]"
            >
              Get a Quote
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white border border-white/15"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f1215] border-b border-white/15 text-white px-5 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 border-b border-white/10 flex items-center justify-between ${
                  location.pathname === link.path ? "text-[#e8590c] font-bold" : "text-white/80"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-white/40">&rarr;</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black font-bold text-center py-3"
            >
              Get OEM Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
