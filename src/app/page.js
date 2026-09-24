import { HeroSection } from "@/components/sections/HeroSection";
import {
  BusinessFeaturesSection,
  BusinessTypesSection,
} from "@/components/sections/BusinessSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessTypesSection />
      <BusinessFeaturesSection />
    </>
  );
}
