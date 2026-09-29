import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageCard } from "@/components/ui/ImageCard";
import { collections } from "@/lib/data";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore our curated pottery collections — each one a story told through clay, form, and glaze.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHero
        title="Collections"
        subtitle="Each collection is a chapter in our ongoing exploration of form and texture"
        image={`${BASE_PATH}/images/Rug/DSC09533.webp`}
        imageAlt="Rug collection lamp with woven details"
      />

      <Section>
        <Container>
          <div className="space-y-24">
            {collections.map((collection, i) => (
              <AnimatedSection key={collection.slug}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  <Link
                    href={`/collection/${collection.slug}`}
                    className={`group block ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <ImageCard
                      src={collection.heroImage}
                      alt={collection.title}
                      aspectRatio="video"
                    />
                  </Link>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-display text-3xl sm:text-4xl text-stone mb-4">
                      {collection.title}
                    </h2>
                    <p className="text-warm-gray leading-relaxed mb-8">
                      {collection.description}
                    </p>
                    <Link
                      href={`/collection/${collection.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      Explore collection →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
