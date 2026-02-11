import { motion } from "framer-motion";
import { Timeline } from "../ui/AceternityTimeline";
import SkillIconGroup from "../SkillIconGroup";
import { RevealOnScroll } from "../RevealOnScroll";

import {
  SiJavascript, SiHtml5, SiPhp, SiMysql, SiTensorflow,
  SiPython, SiC, SiPandas, SiNumpy, SiGit, SiPytorch, SiLinux
} from "react-icons/si";

const timelineEntries = [
  {
    title: "2024",
    content: (
      <div className="flex flex-col gap-8">
        {/* IDNEO */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-300"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-sm font-mono text-blue-400">Nov 2024 - Present</span>
          </div>

          <h3 className="text-2xl font-semibold text-neutral-100 mb-1">AI / ML Engineer</h3>
          <p className="text-base text-neutral-400 mb-1">
            <a
              href="https://www.idneo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 decoration-neutral-700 hover:decoration-blue-400"
            >
              IDNEO Technologies Inc.
            </a>
          </p>
          <p className="text-sm text-neutral-500 mb-5">Barcelona, Spain</p>
          <p className="text-base text-neutral-300 leading-relaxed mb-6">
            Development of AI models for embedded systems in the automotive industry,
            including data collection, model training, and deployment.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: SiPython, label: "Python", color: "#3776AB" },
              { icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
              { icon: SiC, label: "C", color: "#A8B9CC" },
              { icon: SiPandas, label: "Pandas", color: "#150458" },
              { icon: SiNumpy, label: "NumPy", color: "#013243" },
              { icon: SiGit, label: "Git", color: "#F05032" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-neutral-300"
              >
                <skill.icon style={{ color: skill.color }} size={14} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PRBB */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-300"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-sm font-mono text-blue-400">Sep 2024 - Dec 2024</span>
          </div>

          <h3 className="text-2xl font-semibold text-neutral-100 mb-1">Software Engineer</h3>
          <p className="text-base text-neutral-400 mb-1">
            <a
              href="https://www.prbb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 decoration-neutral-700 hover:decoration-blue-400"
            >
              PRBB - Hospital del Mar
            </a>
          </p>
          <p className="text-sm text-neutral-500 mb-5">Barcelona, Spain</p>
          <p className="text-base text-neutral-300 leading-relaxed mb-6">
            Developing and implementing artificial intelligence tools for software
            designed for ultrasonic-based spinal cord stimulation.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {[
              { icon: SiPython, label: "Python", color: "#3776AB" },
              { icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
              { icon: SiNumpy, label: "NumPy", color: "#013243" },
              { icon: SiGit, label: "Git", color: "#F05032" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-neutral-300"
              >
                <skill.icon style={{ color: skill.color }} size={14} />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Early 2024",
    content: (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-300"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-sm font-mono text-blue-400">Feb 2024 - Jul 2024</span>
        </div>

        <h3 className="text-2xl font-semibold text-neutral-100 mb-1">
          Computational Neuroscience Researcher
        </h3>
        <p className="text-base text-neutral-400 mb-1">
          <a
            href="https://www.i3s.up.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 decoration-neutral-700 hover:decoration-blue-400"
          >
            {'i3S - Instituto de Investigacao e Inovacao em Saude'}
          </a>
        </p>
        <p className="text-sm text-neutral-500 mb-5">Porto, Portugal</p>
        <p className="text-base text-neutral-300 leading-relaxed mb-6">
          Neuromorphic computation on low-power microcontrollers for closed-loop
          signal detection applications.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {[
            { icon: SiPython, label: "Python", color: "#3776AB" },
            { icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" },
            { icon: SiNumpy, label: "NumPy", color: "#013243" },
            { icon: SiLinux, label: "Linux", color: "#FCC624" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-neutral-300"
            >
              <skill.icon style={{ color: skill.color }} size={14} />
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    title: "2023",
    content: (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 backdrop-blur-sm hover:border-white/[0.12] transition-colors duration-300"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-sm font-mono text-blue-400">2023 - 2024</span>
        </div>

        <h3 className="text-2xl font-semibold text-neutral-100 mb-1">Software Developer</h3>
        <p className="text-base text-neutral-400 mb-1">
          <a
            href="https://www.skynetlegal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-4 decoration-neutral-700 hover:decoration-blue-400"
          >
            Skynet Legal
          </a>
        </p>
        <p className="text-sm text-neutral-500 mb-5">Barcelona, Spain</p>
        <p className="text-base text-neutral-300 leading-relaxed mb-6">
          Automation, web development, and data analysis for a legal tech startup.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {[
            { icon: SiPython, label: "Python", color: "#3776AB" },
            { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
            { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
            { icon: SiPhp, label: "PHP", color: "#777BB4" },
            { icon: SiMysql, label: "MySQL", color: "#4479A1" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-neutral-300"
            >
              <skill.icon style={{ color: skill.color }} size={14} />
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    ),
  },
];

function TimelineSection() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-base font-mono text-blue-400 tracking-wider uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-100 mb-6">
            Career History
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-12">
            My journey through bioengineering, neuroscience research, and software engineering.
          </p>
        </RevealOnScroll>

        <Timeline data={timelineEntries} />
      </div>
    </section>
  );
}

export default TimelineSection;
