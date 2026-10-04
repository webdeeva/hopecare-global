"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { SymptomsCTA } from "@/components/SymptomsCTA";
import { HereditaryFocusCTA } from "@/components/HereditaryFocusCTA";
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
    // Show overlay whenever AwarenessOverlay has active content
    const month = new Date().getMonth();
    // September (HCAW) or October (IMPACT Act news + OvaTrack)
    if (month === 8 || month === 9) {
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
        <HereditaryFocusCTA />
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
