"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const AUTO_PLAY_MS = 5000;

interface ProfileCarouselProps {
  images: string[];
  className?: string;
}

export function ProfileCarousel({ images, className = "" }: ProfileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const img = new window.Image();
            img.onload = () => resolve();
            img.onerror = () =>
              reject(new Error(`Failed to preload carousel image: ${src}`));
            img.src = src;
          })
      )
    )
      .then(() => {
        if (!cancelled) setIsReady(true);
      })
      .catch(() => {
        if (!cancelled) setIsReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [images]);

  const clearAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    clearAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTO_PLAY_MS);
  }, [clearAutoPlay, images.length]);

  useEffect(() => {
    if (!isReady) return;
    startAutoPlay();
    return clearAutoPlay;
  }, [isReady, startAutoPlay, clearAutoPlay]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + images.length) % images.length);
      startAutoPlay();
    },
    [images.length, startAutoPlay]
  );

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative w-72 h-72 lg:w-80 lg:h-80 shrink-0 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-3xl" />

      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
        {!isReady ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-blue-400 animate-spin" />
          </div>
        ) : (
          images.map((src, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`Profile photo ${index + 1}`}
              draggable={false}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))
        )}

        {isReady && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 right-3 z-20 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-neutral-400 font-mono">
              {currentIndex + 1}/{images.length}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
