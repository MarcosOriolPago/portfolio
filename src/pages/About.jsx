import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Utensils, Bike, Plane, Music, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { FloatingDock } from "../components/ui/FloatingDock";
import { WorldMap } from "../components/ui/WorldMap";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { Spotlight } from "../components/ui/Spotlight";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import Gallery from "../components/Gallery";
import { Footer } from "../components/Footer";

const dockItems = [
  { title: "About", icon: <User size={20} />, href: "#about" },
  { title: "Cooking", icon: <Utensils size={20} />, href: "#cooking" },
  { title: "Sports", icon: <Bike size={20} />, href: "#sports" },
  { title: "Music", icon: <Music size={20} />, href: "#music" },
  { title: "Travel", icon: <Plane size={20} />, href: "#travel" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-neutral-950/80 backdrop-blur-md text-sm text-neutral-300 hover:text-white hover:border-white/20 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>
      </motion.div>

      {/* Floating Dock Navigation */}
      <FloatingDock items={dockItems} />

      {/* Hero / About Me */}
      <AboutHero />

      {/* Hobbies as flowing sections */}
      <CookingSection />
      <SportsSection />
      <MusicSection />
      <TravellingSection />

      <Footer />
    </div>
  );
}

/* ---------- ABOUT HERO ---------- */
function AboutHero() {
  const imagePaths = [
    "/profileCarousel/calcot.jpg",
    "/profileCarousel/cruzcampo.jpg",
    "/profileCarousel/moto_pitline.jpg",
    "/profileCarousel/paella.jpg",
    "/profileCarousel/oporto_insta.jpg",
    "/profileCarousel/sunset_skimo.jpg",
    "/profileCarousel/moto_carmen.JPG",
    "/profileCarousel/enduro_cerdaña.jpg",
    "/profileCarousel/kenia_canoa.jpg",
    "/profileCarousel/napolesprpr.jpg",
    "/profileCarousel/inspira.jpg",
    "/profileCarousel/prismas.jpg",
    "/profileCarousel/pitline_valldaran.jpg",
    "/profileCarousel/oporto_algarve.jpg",
    "/profileCarousel/carmen_galicia.JPG",
    "/profileCarousel/enduro_chamonix.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
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
        {/* Photo carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 lg:w-80 lg:h-80 shrink-0"
        >
          <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-3xl" />
          <img
            src={imagePaths[currentIndex]}
            alt="Profile"
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Photo counter */}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-xs text-neutral-400 font-mono">
            {currentIndex + 1}/{imagePaths.length}
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-sm font-mono text-blue-400 tracking-wider uppercase">
              About Me
            </span>
          </motion.div>

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

/* ---------- SECTION WRAPPER ---------- */
function HobbySection({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-sm font-mono text-blue-400 tracking-wider uppercase">
              {subtitle || id}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-10">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ---------- COOKING ---------- */
function CookingSection() {
  return (
    <HobbySection id="cooking" title="Cooking" subtitle="Hobby">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Gallery
          imgs_folder={[
            "/gallery/coocking/salmon.jpg",
            "/gallery/coocking/pizza.jpg",
            "/gallery/coocking/bacalao.jpg",
            "/gallery/coocking/paella.jpg",
            "/gallery/coocking/bread1.jpg",
            "/gallery/coocking/bread2.jpg",
            "/gallery/coocking/bread3.jpg",
            "/gallery/coocking/bread4.jpg",
          ]}
        />
      </motion.div>
    </HobbySection>
  );
}

/* ---------- SPORTS ---------- */
function SportsSection() {
  return (
    <HobbySection id="sports" title="Sports" subtitle="Passion">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Gallery
          imgs_folder={[
            "/gallery/sports/chamonix.jpg",
            "/gallery/sports/jump.png",
            "/gallery/sports/moto.jpg",
            "/gallery/sports/moto.gif",
            "/gallery/sports/bike.gif",
            "/gallery/sports/runner.jpg",
            "/gallery/sports/runner.gif",
            "/gallery/sports/padel.jpg",
            "/gallery/sports/ski.jpg",
            "/gallery/sports/ski.gif",
          ]}
        />
      </motion.div>
    </HobbySection>
  );
}

/* ---------- MUSIC ---------- */
function MusicSection() {
  return (
    <HobbySection id="music" title="Music" subtitle="Expression">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Gallery
          imgs_folder={[
            "/gallery/music/acoustic.gif",
            "/gallery/music/inspira2.jpg",
            "/gallery/music/quilombo.gif",
            "/gallery/music/bodapilar.gif",
            "/gallery/music/nota79.gif",
            "/gallery/music/cerdaña.jpg",
            "/gallery/music/navidad.jpg",
          ]}
        />
      </motion.div>
    </HobbySection>
  );
}

/* ---------- TRAVELLING ---------- */
function TravellingSection() {
  // Connections from Barcelona to visited places
  const connections = [
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: -1.28, lng: 36.81 } }, // Nairobi
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 9.92, lng: -84.09 } }, // Costa Rica
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 45.92, lng: 6.86 } }, // Chamonix
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 40.85, lng: 14.26 } }, // Naples
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 51.50, lng: -0.12 } }, // London
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 53.34, lng: -6.26 } }, // Dublin
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 41.15, lng: -8.62 } }, // Oporto
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 37.74, lng: -25.67 } }, // Azores
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 31.23, lng: 121.47 } }, // Shanghai
    { start: { lat: 41.39, lng: 2.15 }, end: { lat: 52.36, lng: 4.90 } }, // Amsterdam
  ];

  return (
    <HobbySection id="travel" title="Travelling" subtitle="Adventure">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 lg:p-8 overflow-hidden"
      >
        <WorldMap dots={connections} lineColor="#3b82f6" />

        {/* Places list */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            "Nairobi, Kenya",
            "Costa Rica",
            "Chamonix, France",
            "Naples, Italy",
            "Padova, Italy",
            "Palermo, Sicily",
            "Rome, Italy",
            "Venice, Italy",
            "London, UK",
            "Dublin, Ireland",
            "Oporto, Portugal",
            "Lisbon, Portugal",
            "Azores, Portugal",
            "Lijiang, China",
            "Shangri-La, China",
            "Yangshuo, China",
            "Zhangjiajie, China",
            "Shanghai, China",
            "Amsterdam, Netherlands",
          ].map((place) => (
            <div
              key={place}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-400"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              {place}
            </div>
          ))}
        </div>
      </motion.div>
    </HobbySection>
  );
}
