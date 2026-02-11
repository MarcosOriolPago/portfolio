import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Simplified world map path data (mercator projection dots)
// This creates a dotted world map similar to the Aceternity world-map component
export function WorldMap({ dots = [], lineColor = "#3b82f6" }) {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        const { width } = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height: width * 0.5 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Convert lat/lng to x/y coordinates on the map
  function latLngToXY(lat, lng) {
    const x = ((lng + 180) / 360) * dimensions.width;
    const y = ((90 - lat) / 180) * dimensions.height;
    return { x, y };
  }

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-auto"
        style={{ background: "transparent" }}
      >
        {/* World map dots background */}
        <WorldDots width={dimensions.width} height={dimensions.height} />

        {/* Connection lines (arcs) */}
        {dots.map((connection, idx) => {
          const start = latLngToXY(connection.start.lat, connection.start.lng);
          const end = latLngToXY(connection.end.lat, connection.end.lng);

          // Create a curved path
          const midX = (start.x + end.x) / 2;
          const midY = Math.min(start.y, end.y) - Math.abs(end.x - start.x) * 0.15;

          const pathD = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

          return (
            <g key={idx}>
              {/* Shadow path */}
              <path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                opacity="0.15"
              />
              {/* Animated path */}
              <motion.path
                d={pathD}
                fill="none"
                stroke={lineColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: idx * 0.2,
                  ease: "easeInOut",
                }}
              />
              {/* Start dot */}
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.3 }}
              />
              {/* End dot */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.2 + 1.2, duration: 0.3 }}
              />
              {/* Pulsing ring at end */}
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
                  delay: idx * 0.2 + 1.5,
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

// Creates a dotted world map pattern
function WorldDots({ width, height }) {
  const dotSpacing = 8;
  const dotRadius = 0.8;

  // Simplified continent boundaries for dot rendering
  // These are approximate bounding boxes for continents
  const continents = [
    // North America
    { minLat: 15, maxLat: 72, minLng: -170, maxLng: -50 },
    // South America
    { minLat: -56, maxLat: 13, minLng: -82, maxLng: -34 },
    // Europe
    { minLat: 35, maxLat: 71, minLng: -10, maxLng: 40 },
    // Africa
    { minLat: -35, maxLat: 37, minLng: -18, maxLng: 52 },
    // Asia
    { minLat: 1, maxLat: 72, minLng: 26, maxLng: 180 },
    // Australia
    { minLat: -47, maxLat: -10, minLng: 110, maxLng: 180 },
    // Japan/Philippines area
    { minLat: 5, maxLat: 45, minLng: 120, maxLng: 150 },
  ];

  // More detailed coastline approximation using point-in-polygon-ish approach
  function isLand(lat, lng) {
    // Check if point is roughly within any continent
    for (const c of continents) {
      if (lat >= c.minLat && lat <= c.maxLat && lng >= c.minLng && lng <= c.maxLng) {
        // Add some noise/exclusion for oceans within bounding boxes
        // Caribbean Sea
        if (lat > 10 && lat < 25 && lng > -90 && lng < -60 && Math.random() > 0.3) continue;
        // Hudson Bay
        if (lat > 50 && lat < 65 && lng > -95 && lng < -75 && Math.random() > 0.4) continue;
        // Mediterranean
        if (lat > 30 && lat < 42 && lng > 0 && lng < 36 && Math.random() > 0.5) continue;
        // Indian Ocean gap between Africa and Asia
        if (lat > -10 && lat < 25 && lng > 40 && lng < 70 && Math.random() > 0.3) continue;
        // South China Sea
        if (lat > 0 && lat < 20 && lng > 100 && lng < 120 && Math.random() > 0.4) continue;
        return true;
      }
    }
    return false;
  }

  const dots = [];
  for (let y = 0; y < height; y += dotSpacing) {
    for (let x = 0; x < width; x += dotSpacing) {
      const lng = (x / width) * 360 - 180;
      const lat = 90 - (y / height) * 180;
      if (isLand(lat, lng)) {
        dots.push({ x, y });
      }
    }
  }

  return (
    <g>
      {dots.map((dot, idx) => (
        <circle
          key={idx}
          cx={dot.x}
          cy={dot.y}
          r={dotRadius}
          fill="currentColor"
          className="text-neutral-600"
        />
      ))}
    </g>
  );
}
