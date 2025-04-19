import { useEffect, useState } from "react";
import { User, Utensils, Bike, Plane, Music } from "lucide-react"; // Assuming lucide-react icons

const iconSize = 24;

const sections = [
  { id: "Myself", icon: User },
  { id: "Coocking", icon: Utensils }, // Verify this ID exactly matches your section element's id attribute
  { id: "Sports", icon: Bike },
  { id: "Music", icon: Music },
  { id: "Travelling", icon: Plane }
];

// Default active section (e.g., the first one)
const defaultSectionId = sections[0]?.id || '';

export default function VerticalNav() {
  const [active, setActive] = useState(defaultSectionId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestCandidate = null;

        // Find the intersecting entry whose top is closest to 0 (viewport top)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const topPosition = entry.boundingClientRect.top;
            // Consider it a candidate if its top is at or slightly above the viewport top (adjust tolerance if needed)
            if (topPosition <= 15) {
              if (!bestCandidate || topPosition > bestCandidate.boundingClientRect.top) {
                bestCandidate = entry;
              }
            }
          }
        });

        // If we found a suitable candidate intersecting the top zone
        if (bestCandidate) {
          setActive(bestCandidate.target.id);
        }
        // If no suitable candidate is found, active state persists
      },
      {
        // Detect intersection only within the top ~2% of the viewport height
        rootMargin: "0px 0px -98% 0px",
        // Trigger as soon as any part (e.g., 1%) enters that top zone
        threshold: 0.01,
      }
    );

    // Observe each section element
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      } else {
        console.warn(`VerticalNav: Element with ID "${section.id}" not found. Check ID spelling and case.`);
      }
    });

    // Cleanup: Stop observing when the component unmounts
    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          observer.unobserve(el);
        }
      });
      // observer.disconnect(); // Disconnect is also an option for cleanup
    };
  }, []); // Empty dependency array: run effect only once on mount

  // *** JSX with full Tailwind classes included ***
  return (
    <div className="
      fixed right-6 top-1/2 -translate-y-1/2 z-50
      bg-black/30 backdrop-blur-md rounded-3xl p-3
      flex flex-col gap-8 items-center shadow-lg border border-white/10
    ">
      {sections.map(({ id, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`} // Allows clicking to navigate as well
          className={`
            group p-2 rounded-full transition-all duration-300
            ${active === id // Conditional styling based on active state
              ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-md" // Active style
              : "text-gray-400 hover:text-white hover:scale-110"} // Inactive style
          `}
          aria-label={`Scroll to ${id} section`}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}