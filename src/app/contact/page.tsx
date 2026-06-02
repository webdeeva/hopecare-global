import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDirect } from "@/components/contact/ContactDirect";

export const metadata: Metadata = {
  title: "Contact — HopeCare Global Inc",
  description:
    "Reach out about volunteering, partnership, planned giving, press inquiries, or to share your story. We respond within two business days.",
  openGraph: {
    title: "Contact HopeCare Global Inc",
    description:
      "Reach out to start a partnership, volunteer, or share your story.",
    url: "https://www.hopecareglobal.org/contact",
    siteName: "HopeCare Global Inc",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <section className="relative bg-cream py-24 md:py-28">
          <div className="container-wide grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
            <ContactForm />
            <ContactDirect />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
