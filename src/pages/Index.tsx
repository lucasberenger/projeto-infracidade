import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsDataSection from "@/components/landing/WhatIsDataSection";
import DataGoldSection from "@/components/landing/DataGoldSection";
import DataDrivenSection from "@/components/landing/DataDrivenSection";
import AppsSection from "@/components/landing/AppsSection";
import IntelligenceSection from "@/components/landing/IntelligenceSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <div id="conceito">
        <WhatIsDataSection />
      </div>
      <DataGoldSection />
      <div id="cultura">
        <DataDrivenSection />
      </div>
      <div id="apps">
        <AppsSection />
      </div>
      <IntelligenceSection />
      <CtaSection />
    </main>
    <Footer />
  </>
);

export default Index;
