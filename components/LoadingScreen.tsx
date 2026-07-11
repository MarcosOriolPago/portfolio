"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("");
  const fullText = "<Welcome ! />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="mb-4 text-2xl sm:text-4xl font-mono font-bold text-neutral-100 leading-tight">
        {text}
        <span className="animate-blink ml-1 text-blue-400">|</span>
      </div>

      <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden mt-4">
        <div className="h-full w-1/3 bg-blue-500 rounded-full animate-loading-bar" />
      </div>
    </motion.div>
  );
}
