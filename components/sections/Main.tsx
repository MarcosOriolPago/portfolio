"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
import { WavyBackground } from "../ui/WavyBackground";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { OptimizedImage } from "../OptimizedImage";

export default function Main() {
  return (
    <section id="main" className="relative">
      <WavyBackground
        className="min-h-screen w-full"
        colors={["#3b82f6", "#2563eb", "#1d4ed8", "#06b6d4", "#0891b2"]}
        waveOpacity={0.15}
        speed="slow"
        blur={12}
        backgroundFill="#eceef1"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-60 h-60 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[28rem] 2xl:h-[28rem] shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse-glow" />
            <OptimizedImage
              src="/profile-light.webp"
              alt="Marcos Oriol Pagonabarraga"
              width={448}
              height={448}
              priority
              quality={75}
              sizes="(max-width: 1024px) 240px, 448px"
              className="relative w-60 h-60 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[28rem] 2xl:h-[28rem] rounded-xl object-cover border-2 border-black/10 shadow-2xl"
            />
          </motion.div>

          <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-3 text-balance"
            >
              Marcos Oriol{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Pagonabarraga
              </span>
            </motion.h1>

            <TextGenerateEffect
              words="Neuroengineer · ML, Robotics & Neuromorphic Systems"
              className="text-lg lg:text-xl text-neutral-600 mb-8 font-mono"
            />
            <TextGenerateEffect
              words="Working at the intersection of bioengineering, neuroscience and robotics. With a deep understanding of both electronic and biological systems, I am passionate about building neuro-inspired technology."
              className="text-base lg:text-lg text-neutral-500 mb-8 max-w-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 flex-wrap justify-center lg:justify-start"
            >
              <a
                href="https://github.com/MarcosOriolPago"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/10 bg-black/[0.03] text-neutral-700 hover:text-neutral-900 hover:border-black/20 hover:bg-black/[0.06] transition-all duration-300 text-base"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-oriol-pagonabarraga-a9a590143/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/10 bg-black/[0.03] text-neutral-700 hover:text-neutral-900 hover:border-black/20 hover:bg-black/[0.06] transition-all duration-300 text-base"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="/cv.pdf"
                download="Marcos_Oriol_CV.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-700 hover:text-neutral-900 hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300 text-base"
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
