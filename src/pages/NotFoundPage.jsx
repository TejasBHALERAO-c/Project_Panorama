import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-20 px-4 bg-[#f3f1ea]">
      <div className="bg-[#14171a] text-white border border-white/15 p-8 sm:p-12 max-w-lg w-full text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#e8590c]/20 text-[#e8590c] border border-[#e8590c]/40 flex items-center justify-center mx-auto">
          <AlertTriangle size={32} />
        </div>
        <div className="font-mono text-xs text-[#e8590c] uppercase tracking-widest">
          ERROR 404 — ROUTE NOT FOUND
        </div>
        <h1 className="font-display font-black text-3xl text-white">Component Page Missing</h1>
        <p className="text-sm text-white/70 font-mono">
          The requested path could not be located in our engineering catalog.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-[#e8590c] text-black font-bold px-6 py-3 hover:bg-white transition-colors"
          >
            <Home size={15} /> Return to Home Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
