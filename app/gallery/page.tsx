"use client";

import { BASE_PATH } from "@/lib/base-path";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { galleryImages } from "@/lib/data";
import { imageDimensions } from "@/lib/image-dimensions";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        setLightboxIndex(index => index === null ? null : (index + 1) % galleryImages.length);
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex(index => index === null ? null : (index - 1 + galleryImages.length) % galleryImages.length);
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual diary of clay, form, and the quiet beauty of handmade objects"
        image={`${BASE_PATH}/images/Edge/IMG_9318.webp`}
        imageAlt="Green handmade bowls from the Edge collection"
      />

      <Section>
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.05}>
                <button
                  onClick={() => openLightbox(i)}
                  className="group block w-full break-inside-avoid"
                  aria-label={`View ${img.alt}`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-sand">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      {...imageDimensions(img.src)}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-white text-sm font-medium">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone/95"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            <button
              onClick={goPrev}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[85vh] mx-12 sm:mx-20"
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                {...imageDimensions(galleryImages[lightboxIndex].src)}
                loading="eager"
                className="w-full h-auto max-h-[85vh] object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-white/70 text-sm">
                  {galleryImages[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>

            <button
              onClick={goNext}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
