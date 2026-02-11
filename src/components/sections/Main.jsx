import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import { WavyBackground } from "../ui/WavyBackground";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

function Main() {
  return (
    <section id="main" className="relative">
      <WavyBackground
        className="min-h-screen w-full"
        colors={["#3b82f6", "#2563eb", "#1d4ed8", "#06b6d4", "#0891b2"]}
        waveOpacity={0.3}
        speed="slow"
        blur={12}
        backgroundFill="#050505"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse-glow" />
            <img
              src="/profile-light.png"
              alt="Marcos Oriol Pagonabarraga"
              className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-xl object-cover border-2 border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-neutral-100 mb-3 text-balance"
            >
              Marcos Oriol{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pagonabarraga
              </span>
            </motion.h1>

            <TextGenerateEffect
              words="Neuroengineer | Software Engineer"
              className="text-xl lg:text-2xl text-neutral-400 mb-8 font-mono"
            />
            <TextGenerateEffect
              words="Driven by curiosity and a lot of positive energy. My focus is at the intersection of engineering and neuroscience, where I love turning creative ideas into reality. I’m a big believer in the power of long-term resilience and meaningful collaboration. I want to build great things and make a positive impact on the community around me."
              className="text-base lg:text-lg text-neutral-500 mb-8 max-w-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/MarcosOriolPago"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 text-base"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 text-base"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="cv.pdf"
                download="Marcos_Oriol_CV.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300 text-base"
              >
                <Download size={18} />
                <span>CV</span>
              </a>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}

export default Main;
