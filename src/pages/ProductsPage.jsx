import React, { useState, useMemo } from "react";
import { Search, Filter, ArrowUpRight, PlusCircle, Check, FileText, Download } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import PdfViewerModal from "../components/PdfViewerModal";
import { PRODUCTS, CATEGORIES } from "../data/companyData";
import { useRfq } from "../context/RfqContext";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pdfModalData, setPdfModalData] = useState(null);
  const { addToRfq, rfqItems } = useRfq();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesQuery =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-[#f3f1ea] text-[#181c21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Breadcrumbs items={[{ label: "Product Catalogue" }]} />

        <div className="mb-10">
          <span className="font-mono text-xs font-bold text-[#e8590c] tracking-widest uppercase bg-[#e8590c]/10 border border-[#e8590c]/30 px-3 py-1">
            OEM CATALOGUE &amp; SPECIFICATIONS
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#181c21] mt-3">
            Automotive Component Capabilities
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#181c21]/70 max-w-3xl">
            Explore our line of precision manufactured gear shifter knobs, shift linkages, hydraulic valves, rubber bonded mounts, and tensioning rods built to OEM tolerance.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white border border-[#181c21]/15 p-4 sm:p-6 mb-10 shadow-sm space-y-4 rounded-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#181c21]/40" size={18} />
              <input
                type="text"
                placeholder="Search by drawing code (e.g. DWG-01, GSK), part name or spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f9f8f4] border border-[#181c21]/20 pl-10 pr-4 py-2.5 text-sm text-[#181c21] focus:border-[#e8590c] focus:outline-none font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#181c21]/50 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="font-mono text-xs text-[#181c21]/60">
              Showing <strong className="text-[#e8590c]">{filteredProducts.length}</strong> of {PRODUCTS.length} OEM Line Items
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 border-t border-[#181c21]/10">
            <Filter size={14} className="text-[#e8590c] flex-shrink-0" />
            <span className="font-mono text-xs uppercase text-[#181c21]/50 flex-shrink-0 mr-2">Filter:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-mono text-xs uppercase px-3.5 py-1.5 whitespace-nowrap transition-colors border ${
                  selectedCategory === cat.id
                    ? "bg-[#181c21] text-[#f3f1ea] border-[#181c21] font-bold"
                    : "bg-white text-[#181c21]/70 border-[#181c21]/20 hover:border-[#e8590c]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-[#181c21]/15 p-12 text-center space-y-4">
            <div className="font-mono text-xl text-[#181c21]/40">[ NO COMPONENT MATCHED ]</div>
            <p className="text-sm text-[#181c21]/60 font-mono">No products matched your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="font-mono text-xs uppercase bg-[#e8590c] text-black px-5 py-2.5 font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
                onOpenPdf={(p) => setPdfModalData({ product: p })}
              />
            ))}
          </div>
        )}

        {/* Quick View Spec Drawer Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#14171a] text-white border border-white/20 max-w-3xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#e8590c] bg-[#e8590c]/10 border border-[#e8590c]/30 px-2.5 py-1 font-bold">
                  {selectedProduct.tag}
                </span>
                <span className="font-mono text-xs text-white/50 uppercase">
                  Category: {selectedProduct.category}
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {selectedProduct.title}
              </h2>

              {selectedProduct.image && (
                <div className="overflow-hidden border border-white/15 h-48 bg-black/40">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-sm text-white/80 leading-relaxed font-sans">
                {selectedProduct.fullDesc}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="bg-white/5 border border-white/10 p-5 space-y-3">
                <div className="font-mono text-xs text-[#e8590c] font-bold uppercase tracking-wider">
                  ENGINEERING SPECIFICATIONS MATRIX
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-mono text-xs">
                  {selectedProduct.specs.map((s, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-1.5">
                      <div className="text-white/50 text-[10px] uppercase">{s.label}</div>
                      <div className="text-white font-semibold">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target OEM Applications */}
              <div>
                <div className="font-mono text-xs text-white/60 uppercase mb-2">Suitable OEM Applications:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app, i) => (
                    <span key={i} className="font-mono text-xs bg-white/10 text-white px-3 py-1 border border-white/15">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setPdfModalData({ product: selectedProduct });
                    setSelectedProduct(null);
                  }}
                  className="font-mono text-xs uppercase px-4 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <FileText size={14} className="text-[#e8590c]" /> Open Technical PDF Data Sheet
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="font-mono text-xs uppercase px-4 py-3 border border-white/20 text-white/70 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      addToRfq(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="font-mono text-xs uppercase px-6 py-3 bg-[#e8590c] text-black font-bold hover:bg-white transition-colors flex-1 sm:flex-initial"
                  >
                    Add Component to RFQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PDF Modal */}
        {pdfModalData && (
          <PdfViewerModal
            product={pdfModalData.product}
            cert={pdfModalData.cert}
            onClose={() => setPdfModalData(null)}
          />
        )}
      </div>
    </div>
  );
}
