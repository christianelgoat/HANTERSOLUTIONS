import { HeroSection } from "../components/sections/HeroSection";
import { ChaosSection } from "../components/sections/ChaosSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { CalculatorSection } from "../components/sections/CalculatorSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { FAQSection } from "../components/sections/FAQSection";
import { CTASection } from "../components/sections/CTASection";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ChaosSection />
      <CalculatorSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
