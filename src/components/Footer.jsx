import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <a
            href="#main"
            className="font-mono text-base font-bold text-neutral-300 hover:text-white transition-colors"
          >
            marcos<span className="text-blue-400">.tech</span>
          </a>

          <p className="text-neutral-500 text-xs">
            {"&copy;"} {currentYear} marcos.tech. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/MarcosOriolPago"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
