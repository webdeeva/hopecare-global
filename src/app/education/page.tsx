import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationClusters } from "@/components/education/EducationClusters";
import { SITE_NAME, abs } from "@/lib/site";
import { publishedArticles } from "@/lib/education";

export const metadata: Metadata = {
  title: "Education, Ovarian Cancer Guides | HopeCare Global Inc",
  description:
    "Plain-language guides on ovarian cancer grounded in trusted medical sources, symptoms and early detection, risk and genetics, diagnosis and treatment, health equity, survivorship and support.",
  alternates: { canonical: "/education" },
  openGraph: {
    title: "Ovarian Cancer Education, HopeCare Global Inc",
    description:
      "Clear, trusted, plain-language guides on ovarian cancer, from the first signs to life after treatment.",
    url: abs("/education"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ovarian Cancer Education",
  url: abs("/education"),
  about: { "@type": "MedicalCondition", name: "Ovarian cancer" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedArticles().map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(`/education/${a.slug}`),
      name: a.title,
    })),
  },
};

export default function EducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
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
              Reach out, or tell us what you&apos;d like to learn about next.
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
