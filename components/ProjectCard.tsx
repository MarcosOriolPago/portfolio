"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingCard } from "./ui/GlowingCard";
import { RevealOnScroll } from "./RevealOnScroll";
import { OptimizedImage } from "./OptimizedImage";
import { ChevronRight, X, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  websiteLink?: string;
  skills: React.ReactNode;
  detailedDescription?: React.ReactNode;
}

function ProjectCard({
  title,
  description,
  image,
  link,
  websiteLink,
  skills,
  detailedDescription,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <RevealOnScroll>
        <GlowingCard className="flex flex-col overflow-hidden">
          <div className="relative overflow-hidden shrink-0 h-60 lg:h-70">
            <OptimizedImage
              src={image}
              alt={title}
              fill
              quality={70}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-3">
              {title}
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex justify-between mt-auto pt-4">
              {skills}

              <div className="flex items-center gap-4">
                {detailedDescription && (
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight size={16} />
                  </button>
                )}
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <span>Website</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <span>Repo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </GlowingCard>
      </RevealOnScroll>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-neutral-950 p-8 lg:p-10 scrollbar-hide"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  <h3 className="text-3xl font-bold text-neutral-100 mb-8">
                    {title}
                  </h3>
                  {detailedDescription}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default ProjectCard;
