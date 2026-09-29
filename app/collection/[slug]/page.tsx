import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageCard } from "@/components/ui/ImageCard";
import { collections, products } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: collection.title,
    description: collection.description,
  };
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const collectionProducts = products.filter(
    (p) => p.collectionSlug === collection.slug
  );

  return (
    <>
      <PageHero
        title={collection.title}
        subtitle={collection.description}
        image={collection.heroImage}
        imageAlt={collection.title}
      />

      {collectionProducts.length > 0 && (
        <Section>
          <Container>
            <AnimatedSection>
              <h2 className="font-display text-3xl text-stone mb-12 text-center">
                Pieces from this collection
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collectionProducts.map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 0.1}>
                  <Link
                    href="/products"
                    className="group block"
                  >
                    <ImageCard
                      src={product.image}
                      alt={product.name}
                      aspectRatio="square"
                      className="mb-4"
                    />
                    <h3 className="font-display text-lg text-stone group-hover:text-terracotta transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-warm-gray mt-1">{product.price}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-ivory">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-warm-gray text-lg leading-relaxed">
                {collection.description}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {collection.images.map((src, i) => (
              <AnimatedSection key={src} delay={i * 0.1}>
                <ImageCard
                  src={src}
                  alt={`${collection.title} piece ${i + 1}`}
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
