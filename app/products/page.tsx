"use client";

import { BASE_PATH } from "@/lib/base-path";

import { useState, useEffect, useCallback } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageCard } from "@/components/ui/ImageCard";
import { ProductModal } from "@/components/ui/ProductModal";
import { products, collections } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.collectionSlug === activeFilter);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <PageHero
        title="Products"
        subtitle="Each piece is handmade, one at a time, with care and intention"
        image={`${BASE_PATH}/images/Pallet/_DSC0225.webp`}
        imageAlt="Colorful handmade bowls from the Palette collection"
      />

      <Section>
        <Container>
          {/* Filters */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-14 justify-center">
              <button
                onClick={() => setActiveFilter("all")}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === "all"
                    ? "bg-stone text-white"
                    : "bg-sand text-warm-gray hover:bg-sand/80"
                )}
              >
                All Pieces
              </button>
              {collections.map((col) => (
                <button
                  key={col.slug}
                  onClick={() => setActiveFilter(col.slug)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeFilter === col.slug
                      ? "bg-stone text-white"
                      : "bg-sand text-warm-gray hover:bg-sand/80"
                  )}
                >
                  {col.title}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.06}>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="group text-left w-full"
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
                </button>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
