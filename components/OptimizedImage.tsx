"use client";

import Image, { type ImageProps } from "next/image";
import { publicSrc } from "../lib/images";

type OptimizedImageProps = Omit<ImageProps, "src"> & {
  src: string;
  alt: string;
  quality?: number;
};

export function OptimizedImage({
  src,
  alt,
  quality = 70,
  className,
  priority,
  fill,
  width,
  height,
  sizes,
  ...rest
}: OptimizedImageProps) {
  const resolved = publicSrc(src);

  if (/\.gif$/i.test(resolved)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolved}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={resolved}
        alt={alt}
        fill
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes ?? "100vw"}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={resolved}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      {...rest}
    />
  );
}
