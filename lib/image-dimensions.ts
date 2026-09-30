import manifest from './image-manifest.json';
import { BASE_PATH } from './base-path';

export function imageDimensions(src: string) {
  const key = BASE_PATH && src.startsWith(`${BASE_PATH}/`) ? src.slice(BASE_PATH.length) : src;
  const images: Record<string, { width: number; height: number }> = manifest;
  const image = images[key];
  return image ? { width: image.width, height: image.height } : { width: 600, height: 400 };
}
