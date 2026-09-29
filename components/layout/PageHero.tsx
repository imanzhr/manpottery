"use client";

import Image from "next/image";
import { Container } from "./Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone/70 via-stone/30 to-transparent" />
      <Container className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/80 max-w-xl font-body">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
