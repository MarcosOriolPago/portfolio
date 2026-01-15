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

  // === Combined Scroll Listener for Visibility & Active Section ===
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Visibility (Hide on scroll, show after delay)
      setIsVisible(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      // 2. Handle Active Section Update
      // Find the last section that has passed the top threshold (e.g., top <= 100px)
      let currentActiveId = active;

      // We start from the active one or searching all? Searching all is safer.
      // We want the *last* section whose top is <= viewport offset.
      // If we use a small offset like 150px, it feels natural.
      const threshold = 150;

      let foundSection = null;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is above our threshold, it's a candidate.
          // Because sections are ordered top-to-bottom, the last candidate we find
          // is the one currently "active" (scrolled past).
          if (rect.top <= threshold) {
            foundSection = section.id;
          }
        }
      }

      if (foundSection && foundSection !== active) {
        setActive(foundSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active]);

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
