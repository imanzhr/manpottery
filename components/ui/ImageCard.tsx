"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { imageDimensions } from "@/lib/image-dimensions";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  interactive?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "natural" | "fill";
}

export function ImageCard({
  src,
  alt,
  className,
  imageClassName,
  aspectRatio = "video",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  interactive = true,
}: ImageCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    natural: "",
    fill: "",
  };

  const isNatural = aspectRatio === "natural";

  return (
    <motion.div
      whileHover={shouldReduceMotion || !interactive ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-sand",
        !isNatural && aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={!isNatural}
        {...(isNatural ? imageDimensions(src) : {})}
        className={cn(
          isNatural ? "w-full h-auto" : "",
          "object-cover transition-transform duration-700 group-hover:scale-105",
          imageClassName
        )}
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
