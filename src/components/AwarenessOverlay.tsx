"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

export function AwarenessOverlay({ onClose }: { onClose: () => void }) {
  const today = new Date();
  const month = today.getMonth(); // 0-indexed: 8 is September
  const day = today.getDate();

  const isOvarianCancerMonth = month === 8; // September

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

  // October onwards: IMPACT Act + OvaTrack Promo
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
      <div className="max-w-2xl text-center text-white">
        {/* IMPACT Act Spotlight */}
        <div className="bg-teal/20 rounded-2xl p-6 mb-6 border border-teal/30">
          <span className="inline-block text-xs uppercase tracking-widest text-teal font-semibold mb-2">Breaking News</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ovarian Cancer IMPACT Act Introduced in Congress
          </h2>
          <p className="text-base md:text-lg mb-4 opacity-90">
            A bipartisan, bicameral bill led by Senators Slotkin (D-MI) and Britt (R-AL) and
            Representatives DeLauro (D-CT) and Bacon (R-NE) would expand insurance coverage for
            genetic testing, improve access to gynecologic oncology care in underserved communities,
            and reauthorize Johanna's Law for gynecologic cancer education.
          </p>
          <p className="text-sm mb-4 opacity-80">
            This legislation advances every pillar of HopeCare's mission &mdash; early detection,
            education, and access to care regardless of zip code or color.
          </p>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4">Track Your Health with OvaTrack</h3>
        <p className="text-lg mb-6 opacity-90">
          OvaTrack is a free, private tool designed to help you track symptoms, spot patterns, and take charge of your ovarian health.
        </p>
        <a
          href="/ovatrack"
          className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep transition-colors"
        >
          Learn More & Download
        </a>
      </div>
    </motion.div>
  );
}
