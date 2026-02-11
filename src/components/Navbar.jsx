import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewPageButton from "./buttons/ViewPageButton";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 lg:top-6 lg:left-[15vw] lg:right-[15vw] z-40 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border border-white/10 shadow-2xl"
          : "bg-transparent border border-transparent"
      } rounded-2xl`}
    >
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex justify-between items-center h-14">
          <a
            href="#main"
            className="font-mono text-base lg:text-lg font-bold text-neutral-100 hover:text-white transition-colors"
          >
            marcos<span className="text-blue-400">.tech</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {["work", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative px-4 py-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <ViewPageButton page="about" text="About Me" />
        </div>
      </div>
    </motion.nav>
  );
};
