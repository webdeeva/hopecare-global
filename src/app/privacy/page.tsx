import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SUPPORT_EMAIL, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | HopeCare Global Inc",
  description:
    "How HopeCare Global Inc handles your information across our website and the HopeCare OvaTrack app. Your health data stays private on your device.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy, HopeCare Global Inc",
    description:
      "How we handle your information. Your health data stays private on your device.",
    url: abs("/privacy"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

const UPDATED = "July 8, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 space-y-4 text-ink-soft leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-ink-mute">Last updated: {UPDATED}</p>

            <div className="mt-8 text-lg text-ink-soft leading-relaxed">
              HopeCare Global Inc (&ldquo;HopeCare,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a
              501(c)(3) nonprofit advancing ovarian cancer awareness, education, and equitable access
              to care. We respect your privacy. This policy explains what information we handle across
              our website and our mobile app, the <strong className="text-navy">HopeCare OvaTrack (Ovarian Health Tracker)</strong>.
            </div>

            <Section title="The HopeCare OvaTrack app">
              <p>
                The app is built to be private by design. Everything you enter, including your daily
                check-ins and symptom history, is <strong className="text-navy">stored only on your
                device</strong> (and, if you have iPhone backups enabled, in your own private Apple
                iCloud backup, which is controlled by you and encrypted by Apple).
              </p>
              <p>
                <strong className="text-navy">We do not collect, receive, transmit, sell, rent, or
                share your health data.</strong> It never reaches our servers. The app has no account,
                no login, and does not require an internet connection to track your symptoms.
              </p>
              <p>
                You are always in control. You can export a plain-text summary to share with your
                doctor, and you can permanently delete all of your data at any time from the app&rsquo;s
                Settings. The app also uses on-device notifications (with your permission) to send the
                gentle daily reminders you choose.
              </p>
              <p className="text-sm text-ink-mute">
                The app is an education and self-tracking tool. It is not a diagnostic tool or a
                substitute for professional medical advice.
              </p>
            </Section>

            <Section title="Our website">
              <p>
                If you use our contact form, we collect the details you provide (such as your name,
                email, and message) so we can respond to you. These messages are delivered to us by
                email and may be stored by our hosting provider solely so we do not lose your
                inquiry. We use this information only to reply and to support our mission.
              </p>
              <p>
                We may use privacy-respecting, aggregate analytics to understand how our pages are
                used so we can improve them. We do not sell your personal information, and we do not
                use it for advertising.
              </p>
            </Section>

            <Section title="What we do not do">
              <p>
                We do not sell your data. We do not share your personal or health information with
                advertisers or data brokers. We do not track you across other apps or websites.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Our website and app are intended for adults and are not directed to children under 13.
                We do not knowingly collect personal information from children.
              </p>
            </Section>

            <Section title="Your choices and rights">
              <p>
                Because your app data lives on your device, you control it directly: export it or
                delete it anytime in the app. For anything you have sent us through the website, you
                may contact us to ask what we hold, to correct it, or to have it deleted.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this policy from time to time. When we do, we will revise the
                &ldquo;last updated&rdquo; date above.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                Questions about your privacy? Email us at{" "}
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
