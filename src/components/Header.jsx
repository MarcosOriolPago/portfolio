import React, { useState } from 'react';
import "../assets/styles/Header.scss"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
      <div className="flex justify-between items-center p-4 md:p-8">
        {/* Hamburger Menu for Mobile */}
        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-800 hover:text-indigo-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#work"
            className="text-gray-800 hover:text-indigo-600 transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-indigo-600 transition-colors"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-gray-800 hover:text-indigo-600 transition-colors"
          >
            Blog
          </a>
          <a
            href="#gallery"
            className="text-gray-800 hover:text-indigo-600 transition-colors"
          >
            Gallery
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4">
            <a
              href="#home"
              className="text-gray-800 hover:text-indigo-600 py-2"
            >
              Home
            </a>
            <a
              href="#work"
              className="text-gray-800 hover:text-indigo-600 py-2"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-indigo-600 py-2"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-800 hover:text-indigo-600 py-2"
            >
              Blog
            </a>
            <a
              href="#gallery"
              className="text-gray-800 hover:text-indigo-600 py-2"
            >
              Gallery
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
