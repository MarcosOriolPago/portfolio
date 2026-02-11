import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export function WavyBackground({
  children,
  className = "",
  colors,
  waveWidth = 50,
  backgroundFill = "#050505",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
}) {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const ntRef = useRef(0);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = colors ?? [
    "#3b82f6",
    "#2563eb",
    "#1d4ed8",
    "#06b6d4",
    "#0891b2",
  ];

  const drawWave = useCallback(
    (ctx, w, h, nt) => {
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = Math.sin(x * 0.003 + i * 0.7 + nt) * 100 +
            Math.sin(x * 0.005 + i * 1.4 + nt * 0.5) * 50;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w, h;

    const resize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ntRef.current += getSpeed();
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = waveOpacity;
      drawWave(ctx, w, h, ntRef.current);
      animationIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [backgroundFill, blur, drawWave, getSpeed, waveOpacity]);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
