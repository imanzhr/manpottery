"use client";

import { BASE_PATH } from "@/lib/base-path";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroSection() {
  return (
    <Section className="overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,38vw)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,36vw)_minmax(0,1fr)] xl:gap-20">
        <AnimatedSection className="pl-5 pr-5 sm:px-8 lg:px-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[5/4] lg:rounded-l-none">
            <Image
              src={`${BASE_PATH}/images/4545.png`}
              alt="Our story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.15}
          className="px-5 sm:px-8 lg:max-w-2xl lg:px-0 lg:pr-12 xl:max-w-3xl"
        >
          <SectionHeading
            eyebrow="Our Story"
            title="Mahtab & Nastaran"
            emphasizeEyebrow
          />
          <div className="mt-8 text-justify text-warm-gray leading-relaxed">
            <div className="space-y-5 sm:hidden">
              <p>
                Our story began in 2001, when Mahtab and Nastaran became friends in their first year of elementary school. In 2019, after experiences in offices and design studios, we chose a new path—one that allowed us to follow our creativity and create in our own way.
              </p>
              <p>
                We, Mahtab and Nastaran—or “M” and “N”—came together around a shared idea and identity: Man Pottery. A reflection of our personalities, tastes, differences, and a friendship shaped by years of creating together.
              </p>
              <p>
                For us, Man Pottery is more than a brand. It is a journey of curiosity, learning, and creating pieces that bring warmth, beauty, and meaning into everyday life.
              </p>
            </div>

            <div className="hidden space-y-5 sm:block">
              <p>Our story goes back to 2001, to our first year of elementary school, where the friendship between Mahtab and Nastaran began.</p>
              <p>In 2019, the journey of Man Pottery took shape. We both had experience working in offices and design studios, but those environments did not align with our personalities or the way we wanted to live and work. We were looking for a path where we could truly live our creativity.</p>
              <p>We, Mahtab and Nastaran—or, in a way, “M” and “N”—came together around a shared idea and a unified identity: Man Pottery.</p>
              <p>Man Pottery is a reflection of our personalities, tastes, similarities, and differences; an identity shaped by friendship, experience, and a shared love of creating.</p>
              <p>Our curiosity, desire to experiment, and passion for learning have no end. We are constantly exploring new skills and bringing our ideas to life.</p>
              <p>For us, Man Pottery is more than a brand. It is the story of a long-lasting friendship, a love for creating, and an ongoing effort to make things that become part of everyday life—bringing warmth, beauty, and meaning to the spaces we live in.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
