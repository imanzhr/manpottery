"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <Section className="py-14 sm:py-18 lg:py-22">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-stone px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-24 h-56 w-56 rounded-full border border-white/[0.07]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-12 h-32 w-32 rounded-full border border-terracotta/20"
            />

            <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
              <div className="max-w-2xl">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-terracotta">
                  A conversation starts here
                </p>
                <h2 className="font-display text-3xl leading-[1.15] text-ivory sm:text-4xl lg:text-[2.75rem]">
                  Have a piece, visit, or idea in mind?
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-[15px]">
                  Tell us what you&apos;re curious about. We&apos;ll help with studio
                  visits, custom work, courses, or simply finding the right piece.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit shrink-0 self-end items-center gap-5 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-stone transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4 focus-visible:ring-offset-stone"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} strokeWidth={1.8} />
                </span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
