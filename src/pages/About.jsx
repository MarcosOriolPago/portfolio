import React, {useState, useEffect} from "react";
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
            <MySelf />
            <Coocking />
        </>
    )
}


const MySelf = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
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
  

const Section = ({children}) => {
    return (
        <div className="mr-10 ml-10">
            {children}
        </div>
    )
}

const SectionTitle = ({ title }) => {
    return (
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
    );
}

const Coocking = () => {
    return (
        <Section>
            <SectionTitle title="Cooking" />
            <p className="text-lg text-center max-w-2xl">
                I enjoy cooking and experimenting with different cuisines. 
                Cooking is a creative outlet for me.
            </p>
            <Gallery imgs_folder={
                [
                    "/gallery/salmon.jpg", "/gallery/cars1.jpg", "/gallery/bread1.jpg",
                ]} />
        </Section>
    )
}