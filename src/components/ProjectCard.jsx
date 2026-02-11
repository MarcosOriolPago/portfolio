import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingCard } from "./ui/GlowingCard";
import { RevealOnScroll } from "./RevealOnScroll";
import { ChevronRight, X, ExternalLink } from "lucide-react";

function ProjectCard({
  title,
  description,
  image,
  link,
  skills,
  detailedDescription,
}) {
  const [isOpen, setIsOpen] = useState(false);

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
        <GlowingCard className="overflow-hidden">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-60 lg:h-70 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-3">
              {title}
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex items-center justify-between">
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

      {/* Detail Modal -- portaled to document.body to escape overflow/z-index stacking */}
      {createPortal(
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
