import { HeroSection } from "@/components/sections/HeroSection";
import {
  BusinessFeaturesSection,
  BusinessTypesSection,
} from "@/components/sections/BusinessSections";
import { PricingSection } from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessTypesSection />
      <BusinessFeaturesSection />
      <PricingSection />
    </>
  );
}
