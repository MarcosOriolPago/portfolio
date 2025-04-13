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
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagePaths = [
        "/gallery/profileCarousel/profile.jpg",
        "/gallery/profileCarousel/profile1.jpg",
        "/gallery/profileCarousel/profile1.jpg",
        "/gallery/profileCarousel/profile1.jpg",
        // Add more images as needed
      ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      }, 3000); // change image every 3 seconds
  
      return () => clearInterval(interval); // clean up
    }, []);
  
    return (
      <div className="flex items-center justify-center mb-4">
        <img
          src={imagePaths[currentIndex]}
          alt="Profile"
          className="w-52 h-52 object-cover rounded-2xl shadow-lg border-2 border-blue-500 transition-all duration-700 ease-in-out"
          key={currentIndex} // helps with triggering animation
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