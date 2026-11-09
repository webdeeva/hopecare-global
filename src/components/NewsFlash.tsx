"use client";

import { motion } from "motion/react";

export function NewsFlash() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-[1000] bg-teal text-white py-2 px-4 text-center font-semibold shadow-lg"
    >
      <a href="/education/federal-ovarian-cancer-womens-health-update" className="hover:underline">
        📰 New Federal Developments: Updates on Ovarian Cancer Maintenance Treatment and Preventive Care Guidelines
      </a>
    </motion.div>
  );
}
