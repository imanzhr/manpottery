import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageCard } from "@/components/ui/ImageCard";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Manpottery — our story, our philosophy, and the hands behind every piece.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Manpottery"
        subtitle="A small studio with a big love for clay"
        image={`${BASE_PATH}/images/Kargah/IMG_4725.webp`}
        imageAlt="Manpottery workshop and studio environment"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Our Story"
                title="Mahtab & Nastaran"
              />
              <div className="mt-8 space-y-5 text-justify text-warm-gray leading-relaxed">
                <p>Our story goes back to 2001, to our first year of elementary school, where the friendship between Mahtab and Nastaran began.</p>
                <p>In 2019, the journey of Man Pottery took shape. We both had experience working in offices and design studios, but those environments did not align with our personalities or the way we wanted to live and work. We were looking for a path where we could truly live our creativity.</p>
                <p>We, Mahtab and Nastaran—or, in a way, “M” and “N”—came together around a shared idea and a unified identity: Man Pottery.</p>
                <p>Man Pottery is a reflection of our personalities, tastes, similarities, and differences; an identity shaped by friendship, experience, and a shared love of creating.</p>
                <p>Our curiosity, desire to experiment, and passion for learning have no end. We are constantly exploring new skills and bringing our ideas to life.</p>
                <p>For us, Man Pottery is more than a brand. It is the story of a long-lasting friendship, a love for creating, and an ongoing effort to make things that become part of everyday life—bringing warmth, beauty, and meaning to the spaces we live in.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <ImageCard
                  src={`${BASE_PATH}/images/Kargah/IMG_4716.webp`}
                  alt="Hands shaping clay on the pottery wheel"
                  className="h-full"
                  imageClassName="!object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Philosophy"
              title="What guides our work"
              align="center"
              className="mb-16"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Handmade First",
                description:
                  "Every piece is thrown or built by hand. No molds, no shortcuts. The slight variations are what make each one yours.",
              },
              {
                title: "Natural Materials",
                description:
                  "We use locally sourced stoneware clay and food-safe glazes. Our materials are chosen for their beauty, durability, and minimal environmental impact.",
              },
              {
                title: "Slow Made",
                description:
                  "We don't rush the process. Each piece dries slowly, fires carefully, and is finished only when it feels right — not when a deadline demands it.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-8 sm:p-10">
                  <span className="inline-block text-terracotta font-display text-3xl mb-4">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl text-stone mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="The Studio"
              title="Where the work happens"
              align="center"
              className="mb-14"
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              `${BASE_PATH}/images/Kargah/IMG_4718.webp`,
              `${BASE_PATH}/images/Kargah/IMG_4720.webp`,
              `${BASE_PATH}/images/Kargah/IMG_4725.webp`,
              `${BASE_PATH}/images/Kargah/IMG_4727.webp`,
            ].map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.08}>
                <ImageCard
                  src={src}
                  alt={`Studio environment ${i + 1}`}
                  aspectRatio="square"
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
