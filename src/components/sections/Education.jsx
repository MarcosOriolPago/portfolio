import { RevealOnScroll } from "../RevealOnScroll";
import { GraduationCap } from "lucide-react";

const educationEntries = [
  {
    institution: "Universitat Politecnica de Catalunya (UPC)",
    degree: "Master of Neuroengineering and Rehabilitation, Neuroscience",
    period: "Sept. 2025 - Jan. 2027",
    details: "Robotics - Neurophysiology - Software",
  },
  {
    institution: "Universitat Internacional de Catalunya",
    degree: "Bioingenieria",
    period: "2020 - 2024",
    details:
      "Object Detection - Computer Vision - Mammalian cell culturing - Signal processing and visualization - SolidWorks - Gene and protein engineering - R - Python - 3D Printing",
  },
  {
    institution: "Viaro Global School",
    degree: "Scientific Bachelor",
    period: "2008 - 2020",
    details: null,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-100 mb-6">
            Education
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-16">
            My academic background in bioengineering and neuroengineering.
          </p>
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          {educationEntries.map((entry, index) => (
            <RevealOnScroll key={index}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.03]">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <GraduationCap size={20} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-neutral-100">
                        {entry.institution}
                      </h3>
                      <span className="text-sm font-mono text-neutral-500 shrink-0">
                        {entry.period}
                      </span>
                    </div>
                    <p className="text-base text-blue-300/80 mb-3">
                      {entry.degree}
                    </p>
                    {entry.details && (
                      <div className="flex flex-wrap gap-2">
                        {entry.details.split(" - ").map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
