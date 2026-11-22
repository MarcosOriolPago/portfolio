import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/[0.06] mt-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link
            href="/#main"
            className="font-mono text-base font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            marcos<span className="text-blue-600">.tech</span>
          </Link>

          <p className="text-neutral-500 text-xs">
            &copy; {currentYear} marcos.tech. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/MarcosOriolPago"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.04] transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.04] transition-all duration-200"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
