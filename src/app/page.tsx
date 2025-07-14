"use client";

import BenefitSection from "@/components/BenefitSection";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeaderSecton";
import OpeningSection from "@/components/OpeningSection";
import ProblemSection from "@/components/ProblemSection";
import ProductKnowledge from "@/components/ProductKnowledge";
import SolutionSection from "@/components/SolutionSection";

export default function LandingPage() {
  return (
    <main className="font-sans bg-white text-gray-900">
      <HeroSection />
      <ProductKnowledge/>
      <OpeningSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitSection />
      <CtaSection />
    </main>
  );
}
