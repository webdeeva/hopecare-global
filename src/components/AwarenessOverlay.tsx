"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

export function AwarenessOverlay({ onClose }: { onClose: () => void }) {
  const today = new Date();
  const month = today.getMonth(); // 0-indexed: 8 is September
  const day = today.getDate();

  const isOvarianCancerMonth = month === 8; // September
  // HCAW runs Sept 28 – Oct 4 — show the overlay through the full window
  const isHcawWindow = month === 8 && day >= 24;

  // In September, show Awareness Month/HCAW + OvaTrack
  if (isOvarianCancerMonth) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white"
        >
          <X size={32} />
        </button>
        <div className="max-w-2xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hereditary Cancer Awareness Week</h2>
          <p className="text-xl font-semibold mb-4 text-teal">September 28 – October 4</p>
          <p className="text-lg mb-6 opacity-90">
            Knowledge is power. Learn your family's history and understand your genetic risk. Every woman deserves to be seen and supported.
          </p>
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
          <a
            href="/education/hereditary-ovarian-cancer-risk"
            className="inline-block text-white underline opacity-80 hover:opacity-100"
          >
            Learn About Genetic Risk
          </a>
        </div>
      </motion.div>
    );
  }

  // No pop-up shown outside of the awareness window
  return null;
}