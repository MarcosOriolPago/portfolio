"use client";

import { motion } from "framer-motion";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] opacity-20"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="spotlight-gradient"
            cx="50%"
            cy="0%"
            r="50%"
            fx="50%"
            fy="0%"
          >
            <stop offset="0%" stopColor={fill} stopOpacity="0.3" />
            <stop offset="50%" stopColor={fill} stopOpacity="0.1" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="512"
          cy="200"
          rx="512"
          ry="400"
          fill="url(#spotlight-gradient)"
        />
      </svg>
    </motion.div>
  );
}
