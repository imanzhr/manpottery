"use client";

import { BASE_PATH } from "@/lib/base-path";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ImageCard } from "@/components/ui/ImageCard";
import { ProductModal } from "@/components/ui/ProductModal";
import { products } from "@/lib/data";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types";

export function FeaturedProducts() {
  const featuredProducts: Product[] = [
    ...products,
    {
      id: "featured-edge-vessel",
      name: "Edge Vessel",
      description:
        "A handmade ceramic vessel shaped around the softly irregular lines of the Edge collection.",
      image: `${BASE_PATH}/images/Edge/IMG_9449.webp`,
      dimensions: "Unique piece",
      material: "Ceramic",
      colors: ["Natural"],
      price: "Contact for price",
      collectionSlug: "edge",
    },
  ].slice(0, 9);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const isDragging = useRef(false);

  // Check scroll bounds after any scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const updateScrollBounds = () => {
      setCanScrollLeft(container.scrollLeft > 5);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth <
          container.scrollWidth - 5
      );
    };
    updateScrollBounds();
    container.addEventListener("scroll", updateScrollBounds);
    return () => container.removeEventListener("scroll", updateScrollBounds);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slideWidth = 320;
    container.scrollBy({ left: direction === "left" ? -slideWidth : slideWidth, behavior: "smooth" });
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    hasDragged.current = false;
    isDragging.current = true;
    const clientX = "touches" in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    dragStartX.current = clientX;
    const container = scrollContainerRef.current;
    if (container) {
      dragStartScrollLeft.current = container.scrollLeft;
      container.style.scrollBehavior = "auto";
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const dx = clientX - dragStartX.current;
    if (Math.abs(dx) > 5) {
      hasDragged.current = true;
    }
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = dragStartScrollLeft.current - dx;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    const container = scrollContainerRef.current;
    if (container) {
      container.style.scrollBehavior = "smooth";
    }
  };

  // Convert wheel movement to horizontal carousel movement only while the
  // carousel can still move in that direction. At either edge, leave the
  // wheel event alone so normal page scrolling resumes immediately.
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;

      const atStart = container.scrollLeft <= 5;
      const atEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5;

      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) {
        return;
      }

      e.preventDefault();
      container.scrollBy({ left: delta, behavior: "auto" });
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <Section className="overflow-hidden bg-cream pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-6 lg:pb-24">
      <div className="px-5 sm:px-8 lg:px-[clamp(1.5rem,3vw,3rem)]">
        <AnimatedSection>
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-display text-3xl text-[#3d3833] sm:text-4xl lg:hidden">
              Products
            </h2>
            {/* Desktop navigation - clean standalone arrows */}
            <div className="ml-auto hidden items-center gap-4 lg:flex">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-[56px] h-[56px] flex items-center justify-center rounded-full transition-colors duration-300 ${
                  canScrollLeft
                    ? "text-stone/60 hover:text-terracotta"
                    : "text-stone/20 cursor-default"
                }`}
                aria-label="Previous products"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-[56px] h-[56px] flex items-center justify-center rounded-full transition-colors duration-300 ${
                  canScrollRight
                    ? "text-stone/60 hover:text-terracotta"
                    : "text-stone/20 cursor-default"
                }`}
                aria-label="Next products"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.1}>
        <div className="lg:ml-[clamp(3rem,8vw,8rem)] lg:grid lg:grid-cols-[9rem_minmax(0,1fr)] lg:items-stretch">
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            <h2 className="-rotate-90 whitespace-nowrap font-display text-5xl text-[#3d3833]">
              Products
            </h2>
          </div>

          <div className="relative">
            {/* Mobile/tablet navigation */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`lg:hidden absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors duration-300 shadow-sm ${
                canScrollLeft
                  ? "text-stone/60 hover:text-terracotta"
                  : "text-stone/20 cursor-default"
              }`}
              aria-label="Previous products"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`lg:hidden absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors duration-300 shadow-sm ${
                canScrollRight
                  ? "text-stone/60 hover:text-terracotta"
                  : "text-stone/20 cursor-default"
              }`}
              aria-label="Next products"
            >
              <ChevronRight size={28} />
            </button>

            {/* Horizontal carousel with drag support — no hover scrolling */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide px-0 py-2 lg:px-0"
              style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-72 sm:w-80 lg:w-72 snap-start scroll-smooth">
                  <button
                    onClick={() => {
                      if (!hasDragged.current) {
                        setSelectedProduct(product);
                      }
                    }}
                    className="group block text-left w-full transition-all duration-500 ease-out hover:translate-y-[-2px]"
                    onMouseDown={() => {
                      hasDragged.current = false;
                    }}
                  >
                    <ImageCard
                      src={product.image}
                      alt={product.name}
                      aspectRatio="portrait"
                      className="mb-4"
                    />
                    <h3 className="font-display text-xl text-stone group-hover:text-terracotta transition-colors duration-500 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-warm-gray line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    <p className="text-terracotta font-medium">{product.price}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Container>
        <AnimatedSection delay={0.3}>
          <div className="flex justify-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-terracotta-dark transition-all duration-500"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </Container>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </Section>
  );
}
