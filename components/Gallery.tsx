"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

interface GalleryProps {
  imgs_folder: string[];
}

export default function Gallery({ imgs_folder }: GalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {imgs_folder.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="mb-4 break-inside-avoid"
          >
            <div
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <OptimizedImage
                src={img}
                alt=""
                width={400}
                height={300}
                quality={65}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-[85vh] w-full h-[85vh]"
            >
              <OptimizedImage
                src={selectedImg}
                alt=""
                fill
                quality={75}
                sizes="100vw"
                className="rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
