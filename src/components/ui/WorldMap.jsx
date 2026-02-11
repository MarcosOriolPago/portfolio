import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

/*
 * Aceternity-style dotted world map.
 * Instead of random bounding boxes we render a hidden <img> of a real world
 * silhouette (Natural Earth public-domain raster via Wikimedia) onto an
 * off-screen canvas, sample every Nth pixel, and create dots wherever the
 * pixel is "dark" (i.e. land).  Arcs are drawn on top.
 */

const MAP_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Earthmap1000x500.jpg/1280px-Earthmap1000x500.jpg";

export function WorldMap({ dots = [], lineColor = "#3b82f6" }) {
  const containerRef = useRef(null);
  const [landDots, setLandDots] = useState([]);
  const [dims, setDims] = useState({ width: 960, height: 480 });

  /* ---- Responsive sizing ---- */
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.getBoundingClientRect().width;
        setDims({ width: w, height: w * 0.5 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---- Build dot grid from a real map image ---- */
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = MAP_SRC;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = 960;
      canvas.width = scale;
      canvas.height = scale * 0.5;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const step = 6; // every 6 pixels
      const pts = [];

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // Detect "land" = not ocean-blue.
          // Ocean pixels on this particular map are strongly blue: b > 100 && b > r && b > g
          // Land pixels are greens, browns, whites, etc.
          const isOcean = b > 110 && b > r * 1.1 && b > g * 0.95;
          if (!isOcean) {
            // Store as normalised 0-1 coordinates
            pts.push({ nx: x / canvas.width, ny: y / canvas.height });
          }
        }
      }
      setLandDots(pts);
    };
  }, []);

  /* ---- Helpers ---- */
  function latLngToXY(lat, lng) {
    const x = ((lng + 180) / 360) * dims.width;
    const y = ((90 - lat) / 180) * dims.height;
    return { x, y };
  }

  const dotRadius = Math.max(0.6, dims.width / 1200);

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        viewBox={`0 0 ${dims.width} ${dims.height}`}
        className="w-full h-auto"
        style={{ background: "transparent" }}
      >
        {/* Land dots */}
        {landDots.map((d, i) => (
          <circle
            key={i}
            cx={d.nx * dims.width}
            cy={d.ny * dims.height}
            r={dotRadius}
            fill="currentColor"
            className="text-neutral-600"
          />
        ))}

        {/* Arcs */}
        {dots.map((connection, idx) => {
          const start = latLngToXY(connection.start.lat, connection.start.lng);
          const end = latLngToXY(connection.end.lat, connection.end.lng);
          const midX = (start.x + end.x) / 2;
          const midY =
            Math.min(start.y, end.y) - Math.abs(end.x - start.x) * 0.2;
          const pathD = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

          return (
            <g key={idx}>
              <path d={pathD} fill="none" stroke={lineColor} strokeWidth="1" opacity="0.15" />
              <motion.path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: idx * 0.15, ease: "easeInOut" }}
              />
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.3 }}
              />
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.15 + 1.2, duration: 0.3 }}
              />
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="3"
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                initial={{ r: 3, opacity: 0.8 }}
                animate={{ r: 10, opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: idx * 0.15 + 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
