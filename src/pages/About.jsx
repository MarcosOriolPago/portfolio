import React from "react";
import ViewPageButton from "../components/buttons/ViewPageButton";
import VNavBar from "../components/VNavBar";
import Gallery from "../components/Gallery";

export default function About() {
    const textBack = "Return Home"
    return (
        <div>
            <div className="fixed top-10 left-10 z-40">
                <ViewPageButton page={"#home"} text={textBack} goBack={true}/>    
            </div>
            <VNavBar />
            <Gallery imgs_folder={
                [
                    "/gallery/salmon.jpg", "/gallery/cars1.jpg", "/gallery/bread1.jpg",
                    "/gallery/salmon.jpg", "/gallery/cars1.jpg", "/gallery/bread1.jpg"
                ]} />
        </div>
    )
}