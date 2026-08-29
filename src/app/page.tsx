"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { SymptomsCTA } from "@/components/SymptomsCTA";
import { MythFact } from "@/components/MythFact";
import { Marquee } from "@/components/Marquee";
import { Founder } from "@/components/Founder";
import { GetInvolved } from "@/components/GetInvolved";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AwarenessOverlay } from "@/components/AwarenessOverlay";

export default function Home() {
  const [showAwareness, setShowAwareness] = useState(false);

  useEffect(() => {
    // Show only in September (month index 8)
    const month = new Date().getMonth();
    if (month === 8) {
      setShowAwareness(true);
    }
  }, []);

  return (
    <>
      {showAwareness && <AwarenessOverlay onClose={() => setShowAwareness(false)} />}
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Stats />
        <Programs />
        <SymptomsCTA />
        <MythFact />
        <Marquee />
        <Founder />
        <GetInvolved />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
