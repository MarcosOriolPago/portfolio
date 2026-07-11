import { RevealOnScroll } from "../RevealOnScroll";
import { OptimizedImage } from "../OptimizedImage";

const educationEntries = [
  {
    institution: "Universitat Politecnica de Catalunya (UPC)",
    degree: "Master of Neuroengineering and Rehabilitation, Neuroscience",
    period: "Sept. 2025 - Jan. 2027",
    details: "Robotics - Neurophysiology - Software",
    logo: "img/upc.webp",
  },
  {
    institution: "Universitat Internacional de Catalunya",
    degree: "Bioingenieria",
    period: "2020 - 2024",
    details:
      "Object Detection - Computer Vision - Mammalian cell culturing - Signal processing and visualization - SolidWorks - Gene and protein engineering - R - Python - 3D Printing",
    logo: "img/uic.webp",
  },
  {
    institution: "Viaro Global School",
    degree: "Scientific Bachelor",
    period: "2008 - 2020",
    details: null,
    logo: "img/viaro.webp",
  },
];

export default function Education() {
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
          {educationEntries.map((entry) => (
            <RevealOnScroll key={entry.institution}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.03]">
                <div className="flex items-start gap-4">
                  <div className="relative mt-1 shrink-0 flex items-center justify-center w-18 h-18 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <OptimizedImage
                      src={entry.logo}
                      alt={`${entry.institution} logo`}
                      width={48}
                      height={48}
                      quality={80}
                      className="w-12 h-12 object-contain"
                    />
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
}
