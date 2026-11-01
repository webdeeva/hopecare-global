"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   Press Banner — full-width teal strip
   sits at the top of the homepage for important announcements.
   ─────────────────────────────────────────────────────────── */

export function PressBanner() {
  return (
    <section className="relative isolate block bg-teal-soft py-3">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-navy text-sm md:text-base font-semibold">
            Bipartisan legislation introduced to modernize ovarian cancer prevention and care:
          </p>
          <Link
            href="https://www.govinfo.gov/content/pkg/BILLS-119s5554is/html/BILLS-119s5554is.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 bg-navy text-white px-5 py-2 rounded-full font-semibold text-sm transition-all hover:bg-navy-deep hover:shadow-lg"
          >
            Read the Bill
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
