"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

export function AwarenessOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white"
      >
        <X size={32} />
      </button>
      <div className="max-w-2xl text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">September is Ovarian Cancer Awareness Month</h2>
        <p className="text-xl mb-8 opacity-90">Every woman deserves to be seen, screened, and supported. Join us in raising awareness and closing the gap in care.</p>
        <a
          href="/education"
          className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep transition-colors"
        >
          Explore Education Resources
        </a>
      </div>
    </motion.div>
  );
}
