import { motion } from "framer-motion";
import { TracingBeam } from "../ui/TracingBeam";
import SkillIconGroup from "../SkillIconGroup";
import { RevealOnScroll } from "../RevealOnScroll";

import {
  SiJavascript, SiHtml5, SiPhp, SiMysql, SiTensorflow,
  SiPython, SiC, SiPandas, SiNumpy, SiGit, SiPytorch, SiLinux
} from "react-icons/si";

const timelineData = [
  {
    date: "2024 - present",
    title: "AI - ML Engineer",
    organization: "IDNEO Technologies Inc.",
    organizationUrl: "https://www.idneo.com/",
    location: "Barcelona, Spain",
    description:
      "Development of AI Models for embedded systems in the automotive industry, including data collection, model training, and deployment.",
    skills: [
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
      { icon: SiC, label: "C", color: "#A8B9CC" },
      { icon: SiPandas, label: "Pandas", color: "#150458" },
      { icon: SiNumpy, label: "NumPy", color: "#013243" },
      { icon: SiGit, label: "Git", color: "#F05032" },
    ],
  },
  {
    date: "2024 - 2025",
    title: "Software Engineer",
    organization: "PRBB",
    organizationUrl: "https://www.prbb.org/",
    location: "Barcelona, Spain",
    description:
      "Developing and implementing artificial intelligence tools for software designed for ultrasonic-based spinal cord stimulation.",
    skills: [
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: SiTensorflow, label: "Tensorflow", color: "#2dd4bf" },
      { icon: SiNumpy, label: "NumPy", color: "#013243" },
      { icon: SiGit, label: "Git", color: "#F05032" },
    ],
  },
  {
    date: "2024 Feb - Jul",
    title: "Computational Neuroscience Researcher",
    organization: "i3S - Instituto de Investigacao e Inovacao em Saude",
    organizationUrl: "https://www.i3s.up.pt/",
    location: "Porto, Portugal",
    description:
      "Neuromorphic computation on low-power microcontroller for closed-loop signal detection applications.",
    skills: [
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: SiPytorch, label: "Pytorch", color: "#f87171" },
      { icon: SiNumpy, label: "NumPy", color: "#013243" },
      { icon: SiLinux, label: "WSL", color: "#ffffff" },
    ],
  },
  {
    date: "2023 - 2024",
    title: "Software Developer",
    organization: "Skynet Legal",
    organizationUrl: "https://www.skynetlegal.com/",
    location: "Barcelona, Spain",
    description:
      "Automation, Web development, and Data Analysis for a legal tech startup.",
    skills: [
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: SiJavascript, label: "JavaScript", color: "#fb923c" },
      { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
      { icon: SiPhp, label: "PHP", color: "#4F5B93" },
      { icon: SiMysql, label: "SQL", color: "#E34F26" },
    ],
  },
];

function Timeline() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-sm font-mono text-blue-400 tracking-wider uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-16">
            Career History
          </h2>
        </RevealOnScroll>

        <TracingBeam className="pl-6 md:pl-20">
          <div className="flex flex-col gap-12">
            {timelineData.map((item, idx) => (
              <TimelineCard key={idx} {...item} index={idx} />
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

function TimelineCard({
  date,
  title,
  organization,
  organizationUrl,
  location,
  description,
  skills,
  index,
}) {
  return (
    <RevealOnScroll>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-8 backdrop-blur-sm hover:border-white/10 transition-colors duration-300"
      >
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-xs font-mono text-blue-400">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-100 mb-1">{title}</h3>

        {/* Organization */}
        {organization && (
          <p className="text-sm text-neutral-400 mb-1">
            {organizationUrl ? (
              <a
                href={organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-2 decoration-neutral-700 hover:decoration-blue-400"
              >
                {organization}
              </a>
            ) : (
              organization
            )}
          </p>
        )}

        {/* Location */}
        <p className="text-xs text-neutral-500 mb-4">{location}</p>

        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed mb-5">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-400"
            >
              <skill.icon style={{ color: skill.color }} size={12} />
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export default Timeline;
