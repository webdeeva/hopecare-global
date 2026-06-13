import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationClusters } from "@/components/education/EducationClusters";

export const metadata: Metadata = {
  title: "Education — Ovarian Cancer Guides | HopeCare Global Inc",
  description:
    "Plain-language, medically reviewed guides on ovarian cancer — symptoms and early detection, risk and genetics, diagnosis and treatment, health equity, survivorship and support.",
  alternates: { canonical: "https://www.hopecareglobal.org/education" },
  openGraph: {
    title: "Ovarian Cancer Education — HopeCare Global Inc",
    description:
      "Clear, trusted, medically reviewed guides on ovarian cancer — from the first signs to life after treatment.",
    url: "https://www.hopecareglobal.org/education",
    siteName: "HopeCare Global Inc",
    locale: "en_US",
    type: "website",
  },
};

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <EducationHero />

        <section className="relative bg-cream pb-28 md:pb-36">
          <div className="container-wide">
            <EducationClusters />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-deep-ocean py-24 md:py-28">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="container-wide relative text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.1]">
              Have a question we haven&apos;t{" "}
              <span className="text-gradient-light">answered yet?</span>
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Reach out — or tell us what you&apos;d like to learn about next.
              These guides are here to serve you.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3.5 rounded-full font-semibold btn-lift"
              >
                Contact us
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors"
              >
                Support this work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
