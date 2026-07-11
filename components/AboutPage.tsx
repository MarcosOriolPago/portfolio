"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { User, Utensils, Bike, Plane, Music, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { FloatingDock } from "./ui/FloatingDock";
import { WorldMap } from "./ui/WorldMap";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import Gallery from "./Gallery";
import { Footer } from "./Footer";
import { OptimizedImage } from "./OptimizedImage";
import {
  profileCarouselImages,
  cookingGallery,
  sportsGallery,
  musicGallery,
  travelConnections,
} from "../data/about";

const dockItems = [
  { title: "About", icon: <User size={20} />, href: "#about" },
  { title: "Cooking", icon: <Utensils size={20} />, href: "#cooking" },
  { title: "Sports", icon: <Bike size={20} />, href: "#sports" },
  { title: "Music", icon: <Music size={20} />, href: "#music" },
  { title: "Travel", icon: <Plane size={20} />, href: "#travel" },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-neutral-950/80 backdrop-blur-md text-sm text-neutral-300 hover:text-white hover:border-white/20 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>
      </motion.div>

      <FloatingDock items={dockItems} />
      <AboutHero />
      <CookingSection />
      <SportsSection />
      <MusicSection />
      <TravellingSection />
      <Footer />
    </div>
  );
}

function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const preloadAdjacent = useCallback((index: number) => {
    const next = (index + 1) % profileCarouselImages.length;
    [profileCarouselImages[index], profileCarouselImages[next]].forEach((path) => {
      const img = new window.Image();
      img.src = path;
    });
  }, []);

  useEffect(() => {
    preloadAdjacent(0);
  }, [preloadAdjacent]);

  useEffect(() => {
    preloadAdjacent(currentIndex);
  }, [currentIndex, preloadAdjacent]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % profileCarouselImages.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <Spotlight fill="#3b82f6" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-background)_70%)]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 lg:w-80 lg:h-80 shrink-0"
        >
          <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-3xl" />
          <OptimizedImage
            src={profileCarouselImages[currentIndex]}
            alt="Profile"
            fill
            priority={currentIndex === 0}
            quality={70}
            sizes="(max-width: 1024px) 288px, 320px"
            className={`rounded-2xl border border-white/10 shadow-2xl object-cover transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-neutral-400 font-mono">
            {currentIndex + 1}/{profileCarouselImages.length}
          </div>
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-neutral-100 mb-6 text-balance"
          >
            The Person Behind{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              the Code
            </span>
          </motion.h1>

          <TextGenerateEffect
            words="I am an energetic and optimistic person with great motivation to learn and grow. I find the world fascinating, specifically the biological systems. My ambition led me to learn software engineering due to its versatility and countless applications."
            className="text-base text-neutral-400 leading-relaxed mb-4 max-w-lg"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-base text-neutral-500 leading-relaxed max-w-lg"
          >
            Aside from being an eager learner, I like spending time with friends,
            doing sport, and enjoying nature. These activities help me to stay on
            track.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function HobbySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-10">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function CookingSection() {
  return (
    <HobbySection id="cooking" title="Cooking">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Gallery imgs_folder={cookingGallery} />
      </motion.div>
    </HobbySection>
  );
}

function SportsSection() {
  return (
    <HobbySection id="sports" title="Sports">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Gallery imgs_folder={sportsGallery} />
      </motion.div>
    </HobbySection>
  );
}

function MusicSection() {
  return (
    <HobbySection id="music" title="Music">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Gallery imgs_folder={musicGallery} />
      </motion.div>
    </HobbySection>
  );
}

function TravellingSection() {
  return (
    <HobbySection id="travel" title="Travelling">
      <WorldMap dots={travelConnections} lineColor="#3b82f6" />
    </HobbySection>
  );
}
