import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Briefcase, GraduationCap, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function BentoItem({ children, className = "", index = 0 }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export const CvSection = () => {
  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {/* CV Preview -- large card spanning 2 cols, 2 rows */}
          <BentoItem
            className="md:col-span-2 md:row-span-2 overflow-hidden group"
            index={0}
          >
            <div className="relative h-full">
              <img
                src="img/cv-preview.png"
                alt="CV Preview"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider mb-1">
                  Preview
                </p>
                <p className="text-sm text-neutral-300">
                  Full CV layout with career history, projects, skills, and education.
                </p>
              </div>
            </div>
          </BentoItem>

          {/* Career Highlights */}
          <BentoItem className="p-6 lg:col-span-2" index={1}>
            <h3 className="text-base font-semibold text-neutral-100 mb-4 flex items-center gap-2">
              <Briefcase size={16} className="text-blue-400" />
              Career Highlights
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-neutral-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5 shrink-0 font-mono text-xs">{">"}</span>
                <span>
                  <strong className="text-neutral-200">AI / ML Engineer</strong>{" "}
                  at IDNEO Technologies -- embedded AI for automotive
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5 shrink-0 font-mono text-xs">{">"}</span>
                <span>
                  <strong className="text-neutral-200">Software Engineer</strong>{" "}
                  at PRBB - Hospital del Mar -- focused ultrasound for neuronal stimulation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5 shrink-0 font-mono text-xs">{">"}</span>
                <span>
                  <strong className="text-neutral-200">Research Intern</strong>{" "}
                  at i3S Porto -- neuromorphic hardware & memory detection
                </span>
              </li>
            </ul>
          </BentoItem>

          {/* Education */}
          <BentoItem className="p-6" index={2}>
            <h3 className="text-base font-semibold text-neutral-100 mb-4 flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-400" />
              Education
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-neutral-400 leading-relaxed">
              <li>
                <strong className="text-neutral-200 block">M.Sc. Neuroengineering</strong>
                <span className="text-xs text-neutral-500">UPC -- 2025 - 2027</span>
              </li>
              <li>
                <strong className="text-neutral-200 block">B.Sc. Bioengineering</strong>
                <span className="text-xs text-neutral-500">UIC Barcelona -- 2020 - 2024</span>
              </li>
            </ul>
          </BentoItem>

          {/* Core Skills */}
          <BentoItem className="p-6" index={3}>
            <h3 className="text-base font-semibold text-neutral-100 mb-4 flex items-center gap-2">
              <Cpu size={16} className="text-blue-400" />
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "PyTorch", "React", "TypeScript",
                "Docker", "Git", "C/C++", "TailwindCSS",
                "Neuromorphic", "Embedded AI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoItem>

          {/* Download Actions -- spans full width on lg */}
          <BentoItem className="p-6 lg:col-span-4 md:col-span-2" index={4}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 flex items-center gap-3">
                <FileText size={20} className="text-blue-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-neutral-100">
                    Download my full CV
                  </p>
                  <p className="text-xs text-neutral-500">
                    PDF format, last updated 2025
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <motion.a
                  href="cv.pdf"
                  download="Marcos_Oriol_CV.pdf"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 flex-1 sm:flex-none bg-blue-500 hover:bg-blue-400 text-white py-2.5 px-5 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  <Download size={15} />
                  Download
                </motion.a>
                <motion.a
                  href="cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 flex-1 sm:flex-none bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-200 py-2.5 px-5 rounded-xl font-medium text-sm transition-all duration-300"
                >
                  <ExternalLink size={15} />
                  Open PDF
                </motion.a>
              </div>
            </div>
          </BentoItem>
        </div>
      </div>
    </section>
  );
};
