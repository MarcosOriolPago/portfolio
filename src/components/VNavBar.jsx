import { useEffect, useState } from "react";
import { User, Utensils, Bike, Plane } from "lucide-react";

const iconSize = 25;
const sections = [
  { id: "My self", icon: <User size={iconSize} /> },
  { id: "Coocking", icon: <Utensils size={iconSize} /> },
  { id: "Sports", icon: <Bike size={iconSize} /> },
  { id: "Travelling", icon: <Plane size={iconSize} /> }
];

export default function VerticalNav() {
  const [active, setActive] = useState("home");

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
        fixed top-[10%] bottom-[10%] right-[1%] z-40 p-2 shadow-lg rounded-2xl 
        flex flex-col items-center backdrop-blur-md pt-25 pb-25 justify-between
        bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 opacity-70 group-hover:opacity-100 animate-gradient-y
    ">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`p-2 rounded-full transition-all duration-300 ${
            active === section.id
              ? "bg-indigo-500 text-white scale-110 shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {section.icon}
        </a>
      ))}
    </div>
  );
}
