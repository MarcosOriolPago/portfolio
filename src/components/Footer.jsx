import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RevealOnScroll } from './RevealOnScroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <RevealOnScroll className="fade-in">
      <footer className="bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-t border-white/10 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

            <div className="text-center sm:text-left">
              <a href="#Myself" className="font-mono text-lg font-bold text-white">
                marcos<span className="text-blue-500">.tech</span>
              </a>
            </div>

            <div className="text-gray-400 text-sm text-center">
              © {currentYear} marcos.tech. All rights reserved.
            </div>

            <div className="flex space-x-5">
              <a href="https://github.com/MarcosOriolPago" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </RevealOnScroll>
  );
};