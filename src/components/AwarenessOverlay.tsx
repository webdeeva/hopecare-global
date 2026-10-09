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

  // October onwards: IMPACT Act (hero treatment) + OvaTrack
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-navy p-6 md:p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="text-center text-white">

        {/* ==== IMPACT ACT HERO ==== */}
        <span className="inline-block bg-amber px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3 text-navy">
          Breaking News
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-white">
          Ovarian Cancer <span className="text-teal">IMPACT Act</span>
        </h2>
        <p className="text-xl md:text-2xl font-light text-teal/90 mb-4">
          Introduced in Congress
        </p>
        <p className="text-base md:text-lg mb-5 opacity-90 max-w-2xl mx-auto">
          A bipartisan, bicameral bill to expand insurance coverage for genetic testing,
          improve access to gynecologic oncology care in underserved communities,
          and reauthorize Johanna&rsquo;s Law for gynecologic cancer education.
        </p>
        <p className="text-sm md:text-base mb-5 opacity-80">
          Led by Senators <strong>Slotkin</strong> (D-MI) &amp; <strong>Britt</strong> (R-AL) &middot;
          Reps. <strong>DeLauro</strong> (D-CT) &amp; <strong>Bacon</strong> (R-NE)
        </p>

        {/* Dr. Harrison / HopeCare response */}
        <div className="bg-teal/15 rounded-2xl p-5 md:p-6 mb-6 border border-teal/30 max-w-xl mx-auto">
          <svg width="28" height="20" viewBox="0 0 28 20" className="mx-auto mb-2 text-teal opacity-60">
            <path d="M 4 3 L 10 10 L 18 2 L 13 18 L 9 18 Z" fill="currentColor" />
          </svg>
          <p className="text-base md:text-lg italic text-white/95 leading-relaxed mb-3">
            &ldquo;This legislation directly advances every pillar of our mission &mdash;
            early detection, education, and equitable access to care regardless of
            zip code or color. HopeCare is engaged and advocating.&rdquo;
          </p>
          <p className="text-sm font-semibold text-teal">&mdash; Dr. Petrina Harrison, Founder, HopeCare Global</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="/education/ovarian-cancer-impact-act-explained"
            className="inline-block bg-teal text-white px-7 py-3 rounded-full font-semibold hover:bg-teal-deep transition-colors shadow-lg"
          >
            Read the Full Breakdown
          </a>
          <a
            href="/get-involved"
            className="inline-block bg-white/10 text-white px-7 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            Get Involved
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 pb-2">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Track Your Health with OvaTrack</h3>
          <p className="text-sm md:text-base mb-4 opacity-80 max-w-lg mx-auto">
            A free, private tool to track symptoms, spot patterns, and take charge of your ovarian health.
          </p>
          <a
            href="/ovatrack"
            className="inline-block bg-teal text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-deep transition-colors"
          >
            Learn More &amp; Download
          </a>
        </div>

        </div>

        </motion.div>
    </motion.div>
  );
}
