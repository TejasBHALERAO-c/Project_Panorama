import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { RfqProvider } from "./context/RfqContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RfqModal from "./components/RfqModal";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import QualityPage from "./pages/QualityPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <RfqProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#f3f1ea] text-[#181c21] flex flex-col justify-between selection:bg-[#e8590c] selection:text-black font-sans">
          {/* Typography font imports */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
            .font-display { font-family: 'Archivo', ui-sans-serif, system-ui; }
            .font-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
            .font-sans { font-family: 'Inter', ui-sans-serif, system-ui; }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(6px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.25s ease-out forwards;
            }
          `}</style>

          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <RfqModal />
          <Footer />
        </div>
      </Router>
    </RfqProvider>
  );
}
