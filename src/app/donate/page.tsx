import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DonateHero } from "@/components/donate/DonateHero";
import { DonateImpact } from "@/components/donate/DonateImpact";
import { DonateWays } from "@/components/donate/DonateWays";
import { DonateFAQ } from "@/components/donate/DonateFAQ";
import { DonateCTA } from "@/components/donate/DonateCTA";

export const metadata: Metadata = {
  title: "Donate — HopeCare Global Inc",
  description:
    "Your gift fuels early detection, education, and equitable access to care for women confronting ovarian cancer. Every dollar widens our reach.",
  openGraph: {
    title: "Donate to HopeCare Global Inc",
    description:
      "Stand with women, everywhere hope is needed. Support ovarian cancer awareness and access to care.",
    url: "https://www.hopecareglobal.org/donate",
    siteName: "HopeCare Global Inc",
    locale: "en_US",
    type: "website",
  },
};

export default function DonatePage() {
  return (
    <>
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
