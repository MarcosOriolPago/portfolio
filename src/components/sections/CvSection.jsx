import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { Download, ExternalLink, FileText } from "lucide-react";

export const CvSection = () => {
  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-sm font-mono text-blue-400 tracking-wider uppercase">
              Resume
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xl mb-12">
            A summary of my experience, education, skills, and projects.
            Download the full PDF or preview it below.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* CV Preview */}
          <RevealOnScroll>
            <div className="lg:col-span-3 relative group">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="img/cv-preview.png"
                    alt="CV Preview"
                    className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* CV Info + Actions */}
          <RevealOnScroll>
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Highlights */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h3 className="text-lg font-semibold text-neutral-100 mb-4 flex items-center gap-2">
                  <FileText size={18} className="text-blue-400" />
                  Highlights
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-neutral-400 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">{">"}</span>
                    <span>
                      <strong className="text-neutral-200">AI / ML Engineer</strong> at IDNEO Technologies
                      -- embedded AI for automotive
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">{">"}</span>
                    <span>
                      <strong className="text-neutral-200">Software Engineer</strong> at PRBB - Hospital del Mar
                      -- focused ultrasound for neuronal stimulation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">{">"}</span>
                    <span>
                      <strong className="text-neutral-200">Research Intern</strong> at i3S Porto
                      -- neuromorphic hardware & memory detection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">{">"}</span>
                    <span>
                      <strong className="text-neutral-200">M.Sc. Neuroengineering</strong> -- UPC
                      (2025 - 2027)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">{">"}</span>
                    <span>
                      <strong className="text-neutral-200">B.Sc. Bioengineering</strong> -- UIC Barcelona
                      (2020 - 2024)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Skills snapshot */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h3 className="text-lg font-semibold text-neutral-100 mb-4">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "PyTorch", "React", "TypeScript",
                    "Docker", "Git", "C/C++", "TailwindCSS",
                    "Neuromorphic Computing", "Embedded AI",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <motion.a
                  href="cv.pdf"
                  download="Marcos_Oriol_CV.pdf"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
                <motion.a
                  href="cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-200 py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Open Full PDF
                </motion.a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
