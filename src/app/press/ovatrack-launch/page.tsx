import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Heart, Activity } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_NAME, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dr. Petrina N. Harrison Launches OvaTrack — Press Release | HopeCare Global",
  description:
    "Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, announces the official launch of OvaTrack, a free mobile app helping women recognize, record, and communicate possible ovarian cancer symptoms.",
  alternates: { canonical: "/press/ovatrack-launch" },
  openGraph: {
    title: "Dr. Petrina N. Harrison Launches OvaTrack",
    description:
      "A free mobile app designed to help women recognize, record, and communicate possible ovarian cancer symptoms.",
    url: abs("/press/ovatrack-launch"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Petrina N. Harrison Launches OvaTrack",
    description:
      "A free mobile app helping women track possible ovarian cancer symptoms.",
  },
};

export default function OvaTrackPressReleasePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero / header */}
        <section className="relative bg-deep-ocean py-20 md:py-28">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="container-wide relative text-center max-w-3xl mx-auto">
            <span className="inline-block text-teal-bright uppercase tracking-[0.2em] text-xs font-bold mb-5">
              October 2026 &middot; Press Release
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] text-white">
              Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms
            </h1>
            <div className="mt-6 h-px w-20 mx-auto bg-gradient-to-r from-teal-bright to-green-bright" />
          </div>
        </section>

        {/* Body */}
        <article className="bg-cream py-16 md:py-20">
          <div className="container-wide max-w-3xl mx-auto">
            <p className="text-sm text-navy/60 uppercase tracking-[0.1em] mb-6">
              New York, NY — October 2026
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, a board-certified clinical nurse specialist and ovarian cancer researcher, has officially launched <strong>OvaTrack</strong>, a free mobile app designed to help women recognize, record, and communicate possible ovarian cancer symptoms.
            </p>

            <p className="text-lg leading-relaxed mb-10">
              Supported by <strong>HopeCare Global Inc.</strong>, the 501(c)(3) nonprofit founded by Dr. Harrison, OvaTrack aims to bridge the gap in diagnostic delays by fostering data-informed conversations between women and their healthcare providers.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-12 mb-5">
              Empowering Women Through Health Literacy
            </h2>

            <blockquote className="border-l-4 border-teal bg-cream-deep/50 py-5 px-8 rounded-r-xl text-lg italic text-ink leading-relaxed mb-8">
              &ldquo;Women know when something in their bodies has changed, but too often their concerns are minimized or explained away. OvaTrack gives women a simple way to document what they are experiencing and speak with greater clarity. It is not a diagnostic tool; it is an awareness tool that ensures every symptom is worth hearing.&rdquo;
              <footer className="mt-3 not-italic text-sm text-navy/70">&mdash; Dr. Petrina N. Harrison</footer>
            </blockquote>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-12 mb-5">
              Bridging Research and Advocacy
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Developed from Dr. Harrison&rsquo;s 2025 doctoral research at the University at Buffalo, OvaTrack focuses on the critical intersection of patient advocacy and clinical communication. The app provides:
            </p>

            <ul className="space-y-4 text-lg mb-8">
              <li className="flex items-start gap-4">
                <span className="w-3 h-3 rounded-full bg-teal mt-1.5" />
                <div>
                  <strong>Consistent Symptom Documentation:</strong> Track changes over time to provide a clear record for healthcare providers.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-3 h-3 rounded-full bg-teal mt-1.5" />
                <div>
                  <strong>Educational Resources:</strong> Information on symptoms, risk factors, and the importance of early evaluation.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-3 h-3 rounded-full bg-teal mt-1.5" />
                <div>
                  <strong>Equitable Access:</strong> A free tool designed for all women, with a commitment to serving Black, immigrant, rural, and underserved populations.
                </div>
              </li>
            </ul>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-12 mb-5">
              About Dr. Petrina N. Harrison
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Dr. Petrina N. Harrison is a board-certified Adult-Gerontology Clinical Nurse Specialist and Founder/Executive Director of HopeCare Global Inc. Her career is dedicated to ovarian cancer research, patient advocacy, and the development of clinical decision support systems.
            </p>

            {/* EPK Download */}
            <div className="mt-12 bg-gradient-to-r from-teal/10 to-green/10 border border-teal/30 rounded-2xl p-8 md:p-10 text-center">
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                Media Kit
              </h3>
              <p className="text-ink/80 mb-5">
                Download Dr. Harrison&rsquo;s Electronic Press Kit (EPK) for headshots, bio, and high-resolution assets.
              </p>
              <p className="text-sm text-ink/60 mb-6">
                EPK coming soon &mdash; check back for the full media kit.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/ovatrack"
                  className="inline-flex items-center gap-2 btn-lift bg-gradient-to-r from-teal-deep via-teal to-green text-white px-6 py-3.5 rounded-full font-semibold"
                >
                  <Activity className="w-4 h-4" strokeWidth={2.5} />
                  Learn About OvaTrack
                </Link>
                <Link
                  href="/contact?topic=Media"
                  className="inline-flex items-center gap-2 text-navy hover:text-teal-deep font-semibold transition-colors"
                >
                  Media Inquiries
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Contact block */}
            <div className="mt-12 border-t border-navy/10 pt-8">
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                Media Contact
              </h3>
              <address className="text-lg not-italic leading-relaxed text-ink">
                <strong>HopeCare Global, Inc.</strong><br />
                Media &amp; Partnership Inquiries<br />
                (866) 884-8838<br />
                <a href="mailto:support@hopecareglobal.org" className="text-teal hover:text-teal-deep underline">support@hopecareglobal.org</a><br />
                <a href="https://hopecareglobal.org" className="text-teal hover:text-teal-deep underline">hopecareglobal.org</a>
              </address>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 text-sm text-ink/60 italic leading-relaxed border-t border-navy/10 pt-6">
              OvaTrack is an educational and symptom-tracking tool. It does not screen for, diagnose, treat, prevent, or rule out ovarian cancer or any other condition.
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}