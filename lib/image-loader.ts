'use client';

import type { ImageLoaderProps } from 'next/image';
import manifest from './image-manifest.json';
import { BASE_PATH } from './base-path';

type ImageEntry = { hash: string; widths: number[]; width: number; height: number };
const images: Record<string, ImageEntry> = manifest;

// All sizes are real static files: no image server is needed on GitHub Pages.
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const localSrc = BASE_PATH && src.startsWith(`${BASE_PATH}/`)
    ? src.slice(BASE_PATH.length)
    : src;
  const image = images[localSrc];
  if (!image) return src;
  const selectedWidth = image.widths.find(size => size >= width) ?? image.widths[image.widths.length - 1];
  return `${BASE_PATH}/images/optimized/${image.hash}-${selectedWidth}.webp`;
}
