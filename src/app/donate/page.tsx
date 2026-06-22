import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DonateHero } from "@/components/donate/DonateHero";
import { DonateImpact } from "@/components/donate/DonateImpact";
import { DonateWays } from "@/components/donate/DonateWays";
import { DonateFAQ } from "@/components/donate/DonateFAQ";
import { DonateCTA } from "@/components/donate/DonateCTA";
import { faqs } from "@/data/donate-faqs";
import { SITE_NAME, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate — HopeCare Global Inc",
  description:
    "Your gift fuels early detection, education, and equitable access to care for women confronting ovarian cancer. Every dollar widens our reach.",
  alternates: { canonical: "/donate" },
  openGraph: {
    title: "Donate to HopeCare Global Inc",
    description:
      "Stand with women, everywhere hope is needed. Support ovarian cancer awareness and access to care.",
    url: abs("/donate"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DonatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <DonateHero />
        <DonateImpact />
        <DonateWays />
        <DonateFAQ />
        <DonateCTA />
      </main>
      <Footer />
    </>
  );
}
