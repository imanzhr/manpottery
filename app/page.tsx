import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { CoursesPreview } from "@/components/sections/CoursesPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedProducts />

      <FeaturedCollections />
      <PhilosophySection />
      <GalleryPreview />
      <CoursesPreview />
      <CTASection />
    </>
  );
}
