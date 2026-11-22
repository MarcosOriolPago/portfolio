"use client";

import Link from "next/link";
import { GlowingCard } from "./ui/GlowingCard";
import { RevealOnScroll } from "./RevealOnScroll";
import { OptimizedImage } from "./OptimizedImage";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cardTitle, type Project } from "../data/projects";

/**
 * - "wide":    featured, spans two columns
 * - "tall":    featured, spans two rows; the image grows to fill the height
 * - "feature": featured, regular size
 * - "compact": the smaller cards below the featured grid
 */
export type CardVariant = "wide" | "tall" | "feature" | "compact";

const imageHeight: Record<CardVariant, string> = {
  wide: "h-60 lg:h-80",
  tall: "h-60 lg:h-auto lg:flex-1 lg:min-h-80",
  feature: "h-60",
  compact: "h-48",
};

type ProjectCardProps = Project & { variant?: CardVariant; className?: string };

function ProjectCard({
  slug,
  title,
  description,
  image,
  placeholderIcon,
  link,
  websiteLink,
  skills,
  detailedDescription,
  variant = "compact",
  className = "",
}: ProjectCardProps) {
  const compact = variant === "compact";

  return (
    <RevealOnScroll className={`h-full ${className}`}>
      <GlowingCard className="flex flex-col overflow-hidden">
        <div className={`relative overflow-hidden shrink-0 ${imageHeight[variant]}`}>
          {image ? (
            <OptimizedImage
              src={image}
              alt={title}
              fill
              playOnHover
              quality={70}
              sizes={variant === "wide" ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <ProjectPlaceholder icon={placeholderIcon} />
          )}
        </div>

        <div className={`flex flex-col ${compact ? "p-5" : "p-6"} ${variant === "tall" ? "" : "flex-1"}`}>
          <h3 className={`font-semibold text-neutral-900 mb-2 ${compact ? "text-xl" : "text-2xl"}`}>
            {detailedDescription ? (
              <Link href={`/${slug}`} className="hover:text-blue-600 transition-colors">
                {cardTitle({ title })}
              </Link>
            ) : (
              cardTitle({ title })
            )}
          </h3>
          <p className={`text-neutral-700 leading-relaxed mb-5 ${compact ? "text-sm line-clamp-3" : "text-base"}`}>
            {description}
          </p>

          <div className="flex flex-wrap justify-between gap-3 mt-auto pt-2">
            {skills}

            <div className="flex items-center gap-4">
              {detailedDescription && (
                <Link
                  href={`/${slug}`}
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Details</span>
                  <ChevronRight size={16} />
                </Link>
              )}
              {websiteLink && (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
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
                  className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
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
  );
}

/** Soft gradient with an icon, used when a project has no image yet. */
export function ProjectPlaceholder({ icon }: { icon?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-blue-600/70">
      {icon}
    </div>
  );
}

export default ProjectCard;
