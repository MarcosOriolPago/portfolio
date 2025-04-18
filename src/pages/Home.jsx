import { useState, useEffect } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navbar } from "../components/Navbar";
import { MobileMenu } from "../components/MobileMenu";
import Main from "../components/sections/Main";
import { Contact } from "../components/sections/Contact";
import Timeline from "../components/sections/Timeline";
import Projects from "../components/sections/Projects";
import { Footer } from "../components/Footer";

function Home() {
  const [isLoaded, setIsLoaded] = useState(() => {
    return localStorage.getItem("hasLoadedBefore") === "true";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      localStorage.setItem("hasLoadedBefore", "true");
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;