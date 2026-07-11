"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      whileHover={{ y: -2 }}
      className={`group relative overflow-hidden h-full rounded-2xl border border-white/[0.08] bg-neutral-950/50 backdrop-blur-sm ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(59,130,246,0.06), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
