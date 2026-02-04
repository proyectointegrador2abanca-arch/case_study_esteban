import { ResearchFrameworkSection } from "@/components/sections/research-framework-section";
import { AnnexesSection } from "@/components/sections/annexes-section";
import { GeographicalContextSection } from "@/components/sections/geographical-context-section";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AbstractSection } from "@/components/sections/abstract-section";
import { ArchitecturalTimelineSection } from "@/components/sections/architectural-timeline-section";
import { UrbanMorphologySection } from "@/components/sections/urban-morphology-section";
import { StratificationSection } from "@/components/sections/stratification-section";
import { ParcelStructureSection } from "@/components/sections/parcel-structure-section";
import { HeritageSection } from "@/components/sections/heritage-section";
import { InteractiveMapSection } from "@/components/sections/interactive-map-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";

import { DetailedCaseStudySection } from "@/components/sections/detailed-case-study-section";
import { SourcesSection } from "@/components/sections/sources-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AbstractSection />
      <GeographicalContextSection />
      <ArchitecturalTimelineSection />
      <ResearchFrameworkSection />
      <UrbanMorphologySection />
      <StratificationSection />
      <ParcelStructureSection />
      <HeritageSection />
      <InteractiveMapSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <AnnexesSection />
      <GallerySection />

      <DetailedCaseStudySection />
      <SourcesSection />
      <FooterSection />
    </main>
  );
}
