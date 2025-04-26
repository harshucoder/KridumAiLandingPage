import Image from "next/image";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";

import FooterSection from "@/components/footer";
import IntegrationsSection from "@/components/integrations-5";
import FAQsFour from "../components/faqs-4";
import Pricing from "@/components/pricing";


export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="features">
        <Features />
      </section>
      <IntegrationsSection />
      <Testmo
      <section id="pricing">
        <Pricing />
      </section>
      <section >
        <FAQsFour />
      </section >
      <section id="aboutus">
      <FooterSection />
      </section>
    </>
  );
}