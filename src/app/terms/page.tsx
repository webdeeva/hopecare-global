import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SUPPORT_EMAIL, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | HopeCare Global Inc",
  description:
    "Terms of Use for HopeCare Global Inc's website and the HopeCare OvaTrack (Ovarian Health Tracker) app.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use, HopeCare Global Inc",
    description: "The terms that govern use of our website and app.",
    url: abs("/terms"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

const UPDATED = "July 14, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 space-y-4 text-ink-soft leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="relative bg-cream pt-24 md:pt-28 pb-20">
          <div className="container-wide max-w-3xl">
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
              Legal
            </span>
            <h1
              className="mt-4 font-bold text-navy"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              Terms of Use
            </h1>
            <p className="mt-4 text-ink-mute">Last updated: {UPDATED}</p>

            <div className="mt-8 text-lg text-ink-soft leading-relaxed">
              These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the website and the{" "}
              <strong className="text-navy">HopeCare OvaTrack</strong> (Ovarian Health Tracker) app
              provided by HopeCare Global Inc (&ldquo;HopeCare,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;), a 501(c)(3) nonprofit. By using the app or website, you agree to
              these Terms.
            </div>

            <Section title="Educational purpose">
              <p>
                The app and website are provided for general education and self-tracking only. They
                do not provide medical advice, diagnosis, or treatment, and they do not create a
                healthcare provider-patient relationship. Please read our{" "}
                <a
                  href="/medical-disclaimer"
                  className="text-teal-deep font-medium underline underline-offset-2 hover:text-teal-bright"
                >
                  Medical Disclaimer
                </a>
                , which is part of these Terms.
              </p>
            </Section>

            <Section title="Your responsibilities">
              <p>
                You agree to use the app and website only for lawful, personal, non-commercial
                purposes, and to make your own health decisions in consultation with a qualified
                healthcare provider. You are responsible for the information you enter and for keeping
                your device secure. Do not rely on the app for emergencies.
              </p>
            </Section>

            <Section title="Intellectual property">
              <p>
                The app, website, their content, design, and underlying methods are owned by HopeCare
                Global Inc or its licensors and are protected by intellectual property laws, including
                patent-pending technology. You may not copy, modify, distribute, reverse-engineer, or
                create derivative works from any part of them without our written permission.
              </p>
            </Section>

            <Section title="Disclaimer of warranties">
              <p>
                The app and website are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
                without warranties of any kind, express or implied, including fitness for a particular
                purpose. We do not warrant that the content is complete, accurate, current, or
                error-free.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, HopeCare Global Inc and its directors,
                volunteers, and partners will not be liable for any indirect, incidental,
                consequential, or special damages arising from your use of, or inability to use, the
                app or website, including any health decisions made in reliance on them.
              </p>
            </Section>

            <Section title="Changes and governing law">
              <p>
                We may update these Terms from time to time; continued use after an update means you
                accept the revised Terms. These Terms are governed by the laws of the State of New
                York, without regard to its conflict-of-laws rules.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these Terms? Email us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-teal-deep font-medium underline underline-offset-2 hover:text-teal-bright"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
