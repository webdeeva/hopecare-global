import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SUPPORT_EMAIL, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer | HopeCare Global Inc",
  description:
    "HopeCare OvaTrack is an education and self-tracking tool. It does not diagnose, treat, cure, or prevent disease and is not a substitute for professional medical evaluation.",
  alternates: { canonical: "/medical-disclaimer" },
  openGraph: {
    title: "Medical Disclaimer, HopeCare Global Inc",
    description:
      "For education only. Not a diagnostic tool or a substitute for professional medical advice.",
    url: abs("/medical-disclaimer"),
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

export default function MedicalDisclaimerPage() {
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
              Medical Disclaimer
            </h1>
            <p className="mt-4 text-ink-mute">Last updated: {UPDATED}</p>

            <div className="mt-8 rounded-2xl bg-mist border border-navy/5 p-6 text-lg text-ink-soft leading-relaxed">
              <strong className="text-navy">HopeCare OvaTrack</strong> (the &ldquo;Ovarian Health
              Tracker&rdquo;) is an <strong className="text-navy">education and self-tracking tool
              only</strong>. It is designed to help you notice patterns and prepare for
              conversations with your healthcare provider.
            </div>

            <Section title="Not medical advice">
              <p>
                The app does not diagnose, treat, cure, or prevent any disease, and it is not a
                substitute for professional medical evaluation, diagnosis, or treatment. It does not
                predict, confirm, or rule out ovarian cancer or any other condition. Any patterns,
                summaries, or insights it shows are a record of what you entered, not a medical
                assessment.
              </p>
              <p>
                Always seek the advice of your healthcare provider with any questions you may have
                about your health or a medical condition. Never disregard professional medical
                advice, or delay seeking it, because of something you have read or seen in this app.
                Use of this app does not create a healthcare provider-patient relationship.
              </p>
            </Section>

            <Section title="If you have symptoms">
              <p>
                If you are experiencing new, persistent, worsening, or concerning symptoms, please
                contact your healthcare provider promptly.
              </p>
              <p>
                <strong className="text-navy">
                  For urgent or emergency medical situations, call 911 or go to the nearest
                  emergency room.
                </strong>
              </p>
            </Section>

            <Section title="Educational content">
              <p>
                Lessons and articles in the app are evidence-informed and intended for general
                education. They may not reflect the most current research and are not tailored to
                your individual circumstances. Clinical thresholds referenced in the content (such as
                symptom-frequency guidance) are drawn from published sources for educational purposes
                and do not replace clinical evaluation.
              </p>
            </Section>

            <Section title="Questions">
              <p>
                Questions about this disclaimer? Email us at{" "}
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
