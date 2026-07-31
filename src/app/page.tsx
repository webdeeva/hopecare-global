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

export default function Home() {
  return (
    <>
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
