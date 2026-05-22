import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/sections/HeroSection";
import { ChaosSection } from "../components/sections/ChaosSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { CalculatorSection } from "../components/sections/CalculatorSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { WorkWithUsSection } from "../components/sections/WorkWithUsSection";
import { FAQSection } from "../components/sections/FAQSection";
import { CTASection } from "../components/sections/CTASection";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ChaosSection />
      <CalculatorSection />
      <ServicesSection />
      <TestimonialSection />
      <WorkWithUsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
