import { useEffect, useState } from "react";
import { User, Utensils, Bike, Plane, Music } from "lucide-react";

const iconSize = 24;

const sections = [
  { id: "Myself", icon: User },
  { id: "Coocking", icon: Utensils }, // double-check this ID matches the section
  { id: "Sports", icon: Bike },
  { id: "Music", icon: Music },
  { id: "Travelling", icon: Plane }
];

export default function VerticalNav() {
  const [active, setActive] = useState("Myself");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="
      fixed right-6 top-1/2 -translate-y-1/2 z-50
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
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
