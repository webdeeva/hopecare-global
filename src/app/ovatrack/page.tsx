import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OvaTrackLanding } from "@/components/ovatrack/OvaTrackLanding";
import { SITE_NAME, abs } from "@/lib/site";

export const metadata: Metadata = {
  title: "OvaTrack — Ovarian Health Tracker | HopeCare Global",
  description:
    "OvaTrack is a free, private ovarian health tracker. Log symptoms in seconds, spot patterns that matter, and bring a clear summary to your provider. Coming soon to iPhone and Android.",
  keywords: [
    "OvaTrack",
    "ovarian health tracker",
    "ovarian cancer symptoms app",
    "symptom tracker",
    "women's health app",
    "early detection",
    "HopeCare Global",
  ],
  alternates: { canonical: "/ovatrack" },
  openGraph: {
    title: "OvaTrack — Ovarian Health Tracker",
    description:
      "Know the signs. Track the symptoms. Act early. A free, private ovarian health tracker from HopeCare Global. Coming soon to iPhone and Android.",
    url: abs("/ovatrack"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: abs("/ovatrack/screen-welcome.png") }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OvaTrack — Ovarian Health Tracker",
    description:
      "Know the signs. Track the symptoms. Act early. Free and private, coming soon to iPhone and Android.",
  },
};

export default function OvaTrackPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <OvaTrackLanding />
      </main>
      <Footer />
    </>
  );
}
