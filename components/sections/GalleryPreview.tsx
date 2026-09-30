"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ImageCard } from "@/components/ui/ImageCard";
import { galleryImages } from "@/lib/data";

const galleryRows = Array.from({ length: 3 }, (_, rowIndex) => [
  ...galleryImages.slice(rowIndex * 5),
  ...galleryImages.slice(0, rowIndex * 5),
].slice(0, 8));

const galleryFrameRatios = [
  "aspect-[16/9]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
] as const;

export function GalleryPreview() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const element = marqueeRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '150px' });
    observer.observe(element);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  return (
    <Section className="relative h-[100dvh] overflow-hidden p-0">
      <div
        ref={marqueeRef}
        data-active={visible && pageVisible}
        className="gallery-marquee absolute inset-0 flex flex-col gap-2 sm:gap-3"
        aria-hidden="true"
      >
        {galleryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="gallery-marquee-row min-h-0 flex-1 overflow-hidden"
          >
            <div className="gallery-marquee-track flex h-full w-max">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? "duplicate" : "original"}
                  className="flex h-full shrink-0 gap-2 pr-2 sm:gap-3 sm:pr-3"
                >
                  {row.map((image, imageIndex) => (
                    <ImageCard
                      key={`${image.src}-${imageIndex}`}
                      src={image.src}
                      alt=""
                      aspectRatio="fill"
                      sizes="(max-aspect-ratio: 3/4) 60vw, 50vh"
                      interactive={false}
                      className={`h-full w-auto min-w-[calc(100vw/8)] shrink-0 ${
                        galleryFrameRatios[
                          (imageIndex + rowIndex * 2) %
                            galleryFrameRatios.length
                        ]
                      }`}
                      imageClassName={
                        (imageIndex + rowIndex) % 3 === 0
                          ? "scale-[1.08] group-hover:scale-[1.13]"
                          : undefined
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        data-navbar-theme="light"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-[#211b17]/45 to-transparent"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center">
        <Container>
          <div className="pointer-events-auto max-w-xl border-l border-white/45 pl-6 text-cream sm:pl-8 lg:pl-10">
            <span className="mb-5 inline-block text-xs font-medium uppercase tracking-[0.28em] text-cream/75 sm:text-sm">
              Gallery
            </span>
            <h2 className="mb-5 max-w-lg font-display text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
              Moments in clay
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
              A visual diary of our work — from the studio to the shelf, every
              image tells part of the story.
            </p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex items-center gap-2 border-b border-cream/50 pb-1 text-sm font-medium text-cream transition-colors hover:border-cream hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-4 focus-visible:ring-offset-[#211b17]"
            >
              Full gallery
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Container>
      </div>
    </Section>
  );
}
