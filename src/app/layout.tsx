import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HopeCare Global Inc — Ovarian Cancer Awareness · Global Outreach",
  description:
    "Advancing early detection, education, and access to care through ovarian cancer awareness and global outreach. Empowering communities. Inspiring hope. Changing lives.",
  keywords: [
    "ovarian cancer",
    "cancer awareness",
    "nonprofit",
    "global health",
    "early detection",
    "women's health",
    "HopeCare Global",
    "Dr. Petrina Harrison",
  ],
  authors: [{ name: "HopeCare Global Inc" }],
  openGraph: {
    title: "HopeCare Global Inc — Ovarian Cancer Awareness",
    description:
      "Empowering communities. Inspiring hope. Changing lives. Join the global movement for ovarian cancer awareness and equitable access to care.",
    url: "https://www.hopecareglobal.org",
    siteName: "HopeCare Global Inc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HopeCare Global Inc",
    description: "Ovarian cancer awareness · global outreach · changing lives.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
