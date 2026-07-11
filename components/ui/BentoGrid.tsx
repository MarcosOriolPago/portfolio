"use client";

import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function BentoGridItem({
  className = "",
  title,
  description,
  header,
  icon,
  onClick,
}: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-white/20 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {header && <div className="mb-4">{header}</div>}
      <div className="flex items-center gap-3 mb-2">
        {icon && <span className="text-blue-400">{icon}</span>}
        {title && (
          <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
        )}
      </div>
      {description && (
        <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
