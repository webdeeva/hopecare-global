"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

export function AwarenessOverlay({ onClose }: { onClose: () => void }) {
  const today = new Date();
  const month = today.getMonth(); // 0-indexed: 8 is September
  const day = today.getDate();

  const isLowGradeSerousDay = month === 8 && day === 9; // September 9
  const isWorldGynOncDay = month === 8 && day === 20; // September 20

  if (isLowGradeSerousDay) {
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
        <div className="max-w-3xl text-center text-white">
          <span className="inline-block text-teal-bright text-sm tracking-[0.32em] uppercase font-bold mb-3">
            September 9, 2026
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Low-Grade Serous Ovarian Cancer<br />
            <span className="text-gradient-light">Awareness Day</span>
          </h2>
          <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl mx-auto">
            Today we raise awareness for low-grade serous ovarian cancer. We stand with patients and researchers working toward better understanding and targeted treatments for this unique form of the disease.
          </p>
          <p className="text-base md:text-lg mb-10 opacity-75 max-w-xl mx-auto">
            September is <strong className="text-teal-bright">Ovarian Cancer Awareness Month</strong>. Join HopeCare Global in our commitment to education, advocacy, and equity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/education"
              className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (isWorldGynOncDay) {
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
        <div className="max-w-3xl text-center text-white">
          <span className="inline-block text-teal-bright text-sm tracking-[0.32em] uppercase font-bold mb-3">
            September 20, 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            World Gynecological<br />
            <span className="text-gradient-light">Oncology Day</span>
          </h2>
          <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl mx-auto">
            Today we honor every woman facing gynecologic cancers — ovarian, cervical, uterine, vulvar, and vaginal. Early detection saves lives, and every woman deserves access to care.
          </p>
          <p className="text-base md:text-lg mb-10 opacity-75 max-w-xl mx-auto">
            September is also <strong className="text-teal-bright">Ovarian Cancer Awareness Month</strong>. Join HopeCare Global in advancing screening, education, and equity for all.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/education"
              className="inline-block bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-deep transition-colors"
            >
              Explore Education Resources
            </a>
            <a
              href="#involved"
              className="inline-block bg-white/15 text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/25 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

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
        <p className="text-xl mb-8 opacity-90">Every woman deserves to be seen and supported. Note: There is currently no routine screening test for ovarian cancer. Join us in raising awareness for symptoms and closing the gap in care.</p>
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
