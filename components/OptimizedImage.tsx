"use client";

import Image, { type ImageProps } from "next/image";
import { publicSrc } from "../lib/images";

type OptimizedImageProps = Omit<ImageProps, "src"> & {
  src: string;
  alt: string;
  quality?: number;
  /** Videos only: show the first frame and play while hovered, instead of autoplaying. */
  playOnHover?: boolean;
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
  playOnHover,
  ...rest
}: OptimizedImageProps) {
  const resolved = publicSrc(src);

  // Short clips (.mp4/.webm) play like a GIF: muted, looping, no controls.
  if (/\.(mp4|webm)$/i.test(resolved)) {
    return (
      <video
        src={playOnHover ? `${resolved}#t=0.1` : resolved}
        aria-label={alt}
        autoPlay={!playOnHover}
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        onMouseEnter={playOnHover ? (e) => void e.currentTarget.play().catch(() => {}) : undefined}
        onMouseLeave={playOnHover ? (e) => e.currentTarget.pause() : undefined}
        className={`${fill ? "absolute inset-0 h-full w-full" : ""} ${className ?? ""}`}
      />
    );
  }

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
