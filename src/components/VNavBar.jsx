import { useEffect, useState, useRef } from "react";
import { User, Utensils, Bike, Plane, Music } from "lucide-react";

const iconSize = 24;

const sections = [
  { id: "Myself", icon: User },
  { id: "Cooking", icon: Utensils },
  { id: "Sports", icon: Bike },
  { id: "Music", icon: Music },
  { id: "Travelling", icon: Plane },
];

const defaultSectionId = sections[0]?.id || '';

export default function VerticalNav() {
  const [active, setActive] = useState(defaultSectionId);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  // === Section highlight logic ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestCandidate = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const top = entry.boundingClientRect.top;
            if (top <= 15) {
              if (!bestCandidate || top > bestCandidate.boundingClientRect.top) {
                bestCandidate = entry;
              }
            }
          }
        });

        if (bestCandidate) {
          setActive(bestCandidate.target.id);
        }
      },
      {
        rootMargin: "0px 0px -85% 0px",
        threshold: 0.05,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // === Scroll listener: hide on scroll, show after 2s of no scroll ===
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false); // Hide immediately on any scroll

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsVisible(true); // Re-show after 2s of scroll inactivity
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`
        fixed right-6 top-1/2 -translate-y-1/2 z-50
        transition-all duration-700 ease-in-out
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="
        bg-black/30 backdrop-blur-md rounded-3xl p-3
        flex flex-col gap-8 items-center shadow-lg border border-white/10
      ">
        {sections.map(({ id, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`
              group p-2 rounded-full transition-all duration-300
              ${active === id
                ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-md"
                : "text-gray-400 hover:text-white hover:scale-110"}
            `}
            aria-label={`Scroll to ${id} section`}
          >
            <Icon size={iconSize} />
          </a>
        ))}
      </div>
    </div>
  );
}
