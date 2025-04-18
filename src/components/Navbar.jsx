
import { useEffect } from "react";
import ViewPageButton from "./buttons/ViewPageButton";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-10 left-[20%] right-[20%] w-auto z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#main" className="font-mono text-xl font-bold text-white">
            {" "}
            marcos<span className="text-blue-500">.tech</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#work"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Work{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
          <ViewPageButton page="about" text="About Me" />
        </div>
      </div>
    </nav>
  );
};
