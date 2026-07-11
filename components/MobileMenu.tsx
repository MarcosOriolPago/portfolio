"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  const links = [
    { href: "#main", label: "Home" },
    { href: "#work", label: "Career" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-neutral-950/95 backdrop-blur-xl"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-neutral-300 text-3xl focus:outline-none cursor-pointer hover:text-white transition-colors"
            aria-label="Close Menu"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {links.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-2xl font-semibold text-neutral-300 hover:text-white my-4 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
