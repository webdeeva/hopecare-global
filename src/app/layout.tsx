import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { SITE_URL, SITE_NAME, orgWebsiteGraph } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "HopeCare Global Inc — Ovarian Cancer Awareness",
    description:
      "Empowering communities. Inspiring hope. Changing lives. Join the global movement for ovarian cancer awareness and equitable access to care.",
    url: SITE_URL,
    siteName: SITE_NAME,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgWebsiteGraph()) }}
        />
        {children}
        <Analytics />
        {/* Chatbase — AI chat assistant */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="M2U3EJ0tt2wXl8xqb3lVN";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </body>
    </html>
  );
}
