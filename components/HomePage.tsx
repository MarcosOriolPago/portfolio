"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import Main from "./sections/Main";
import Timeline from "./sections/Timeline";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import { Footer } from "./Footer";

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(localStorage.getItem("hasLoadedBefore") === "true");
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("hasLoadedBefore", "true");
    }
  }, [isLoaded]);

  if (isLoaded === null) {
    return <div className="min-h-screen bg-background" />;
  }

  const showLoading = !isLoaded;

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 noise-overlay ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main />
        <Timeline />
        <Projects />
        <Education />
        <Footer />
      </div>
    </>
  );
}
