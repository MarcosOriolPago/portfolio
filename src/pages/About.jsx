import React, {useState, useEffect} from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icon

import ViewPageButton from "../components/buttons/ViewPageButton";
import VNavBar from "../components/VNavBar";
import Gallery from "../components/Gallery";


export default function About() {
    const textBack = "Return Home"
    return (
        <>
            {/* Heading */}
            <div className="fixed top-10 left-10 z-40">
                <ViewPageButton page={"#home"} text={textBack} goBack={true}/>    
            </div>
            <VNavBar />

            {/* Sections */}
            <div className="relative z-10">
                <MySelf id="Myself" />
                <Coocking id="Coocking" />
                <Sports id="Sports" />
            </div>
        </>
    )
}


const MySelf = ({id}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen" id={id}>
            <CarouselProfile />
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-center max-w-3xl">
                I am an energyc and optimistic person with great motivation to learn and grow. I find the 
                world fascinating, specifically the biological systems. My ambition lead me to learn software 
                due to its versatility and countless applications. 
                Aside being an eager learner, I like spending time with friends, 
                doing sport, and enjoying nature. These activities help me to stay on track.
            </p>
        </div>
    );
}

const Coocking = ({id}) => {
    return (
      <Section title="Coocking" id={id}>
        <Gallery imgs_folder={
            [
                "/gallery/coocking/salmon.jpg", "/gallery/coocking/pizza.jpg", "/gallery/coocking/bacalao.jpg", "/gallery/coocking/paella.jpg",
                "/gallery/coocking/bread1.jpg", "/gallery/coocking/bread2.jpg", "/gallery/coocking/bread3.jpg", "/gallery/coocking/bread4.jpg",
            ]} />
      </Section>
    );
  };

const Sports = ({id}) => {
    return (
        <Section title="Sports" id={id}>
            <Gallery imgs_folder={
                [
                    "/gallery/sports/chamonix.jpg", "/gallery/sports/jump.png", "/gallery/sports/moto.jpg", "/gallery/sports/moto.gif",
                    "/gallery/sports/bike.gif", "/gallery/sports/padel.jpg", 
                ]} />
        </Section>
    )
}

const CarouselProfile = () => {
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
    const interval = setInterval(() => {
        setFade(false); // Start fade out

        setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        setFade(true); // Fade in new image
        }, 500); // duration of fade out
    }, 4000);

    return () => clearInterval(interval);
    }, []);

    return (
    <div className="flex items-center justify-center mb-4 relative w-80 h-80">
        <img
        src={imagePaths[currentIndex]}
        alt="Profile"
        className={`absolute w-full h-full object-cover rounded-2xl shadow-lg border-2 border-blue-500 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
        }`}
        />
    </div>
    );
};
  

const Section = ({ title, children, id}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mx-20" id={id}>
        <div
          className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 text-center cursor-pointer select-none flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-4xl font-bold text-gray-300">{title}</h2>
          <span className="text-gray-400">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
  
        {/* Collapsible content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4">{children}</div>
        </div>
      </div>
    );
  };
