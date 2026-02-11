import {
  SiPython,
  SiReact,
  SiTailwindcss,
  SiPytorch,
  SiDocker,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiTensorflow,
  SiNumpy,
  SiC,
  SiLinux,
  SiArduino,
  SiLatex,
  SiHtml5,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" },
  { icon: SiTensorflow, label: "TensorFlow", color: "#FF6F00" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiNumpy, label: "NumPy", color: "#013243" },
  { icon: SiC, label: "C/C++", color: "#A8B9CC" },
  { icon: SiLinux, label: "Linux", color: "#FCC624" },
  { icon: SiArduino, label: "Arduino", color: "#00979D" },
  { icon: SiLatex, label: "LaTeX", color: "#008080" },
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
];

function SkillPill({ icon: Icon, label, color }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] shrink-0">
      <Icon style={{ color }} size={18} />
      <span className="text-sm font-medium text-neutral-300 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  // Duplicate the list so the animation loops seamlessly
  const duplicated = [...skills, ...skills];

  return (
    <section className="py-12 overflow-hidden">
      {/* Heading */}
      <p className="text-center text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8">
        Technologies I work with
      </p>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

        {/* Row 1 -- scrolls left */}
        <div className="flex gap-4 mb-4 animate-marquee-left">
          {duplicated.map((skill, i) => (
            <SkillPill key={`row1-${i}`} {...skill} />
          ))}
        </div>

        {/* Row 2 -- scrolls right (reversed order for variety) */}
        <div className="flex gap-4 animate-marquee-right">
          {[...duplicated].reverse().map((skill, i) => (
            <SkillPill key={`row2-${i}`} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
