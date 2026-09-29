"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

export function PhilosophySection() {
  return (
    <Section className="bg-cream relative overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-2/3 bg-sand opacity-50" />

      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Quote
              size={40}
              className="text-terracotta/30 mx-auto mb-8"
              aria-hidden="true"
            />
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-stone leading-snug mb-8">
              We don&apos;t make perfect objects.
              <br className="hidden sm:block" />
              We make honest ones.
            </blockquote>
            <p className="text-warm-gray text-base sm:text-lg">
              Every irregularity is a signature. Every glaze variation is a
              conversation between material and maker. This is pottery that
              asks you to slow down and notice.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
