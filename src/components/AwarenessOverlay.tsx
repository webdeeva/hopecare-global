"use client";

import { motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";

export function AwarenessOverlay({ onClose }: { onClose: () => void }) {
  const today = new Date();
  const month = today.getMonth(); // 0-indexed: 8 is September
  const day = today.getDate();

  const isOvarianCancerMonth = month === 8; // September

  // In September, show both Awareness Month AND the OvaTrack Promo
  if (isOvarianCancerMonth) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white"
        >
          <X size={32} />
        </button>
        <div className="max-w-3xl w-full text-center text-white py-12">
          {/* Mission First */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            HopeCare Global Inc.
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-12 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Advancing early detection, education, and access to care for underserved communities — with a focus on ovarian cancer awareness.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="/#involved" className="bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep flex items-center gap-2">
                Join the Movement <ArrowRight size={18} />
              </a>
          </div>

          {/* Awareness Month */}
          <div className="border-t border-white/20 pt-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">September is Ovarian Cancer Awareness Month</h2>
              <p className="text-lg mb-8 opacity-90">Every woman deserves to be seen and supported. Join us in raising awareness.</p>
              
              <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">Track Your Health with OvaTrack</h3>
                <p className="text-white/80 mb-4">
                  A free, private tool to track symptoms, spot patterns, and take charge of your ovarian health.
                </p>
                <a
                  href="/ovatrack"
                  className="inline-block bg-teal text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-deep transition-colors"
                >
                  Learn More & Download
                </a>
              </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // October onwards: Mission + OvaTrack
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white"
      >
        <X size={32} />
      </button>
      <div className="max-w-2xl text-center text-white py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            HopeCare Global Inc.
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-10 opacity-95 leading-relaxed">
            Advancing early detection, education, and access to care for underserved communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="/#involved" className="bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep flex items-center gap-2">
                Join the Movement <ArrowRight size={18} />
            </a>
        </div>
        
        <div className="border-t border-white/20 pt-12">
            <h2 className="text-3xl font-bold mb-6">Track Your Health with OvaTrack</h2>
            <p className="text-lg mb-8 opacity-90">
              OvaTrack is a free, private tool designed to help you track symptoms, spot patterns, and take charge of your ovarian health.
            </p>
            <a
              href="/ovatrack"
              className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep transition-colors"
            >
              Learn More & Download
            </a>
        </div>
      </div>
    </motion.div>
  );
}
