"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageCard } from "@/components/ui/ImageCard";
import { collections } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function FeaturedCollections() {
  return (
    <Section className="bg-ivory">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-display text-3xl text-[#3d3833] sm:text-4xl lg:text-5xl">
                Collections
              </h2>
              <p className="text-base leading-relaxed text-warm-gray sm:text-lg">
                Each collection is a chapter in our ongoing exploration of form,
                texture, and the quiet beauty of handmade objects.
              </p>
            </div>
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors shrink-0"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {collections.map((collection, i) => (
            <AnimatedSection key={collection.slug} delay={i * 0.1}>
              <Link href={`/collection/${collection.slug}`} className="group block">
                <ImageCard
                  src={collection.heroImage}
                  alt={collection.title}
                  aspectRatio="portrait"
                  className="mb-4"
                />
                <h3 className="font-display text-xl text-stone group-hover:text-terracotta transition-colors duration-300">
                  {collection.title}
                </h3>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
