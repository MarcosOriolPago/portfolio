import React from 'react';
import { useState } from 'react';
import {ShowContentOnClick} from './ShowContentOnClick';
import SeeMoreButton from './buttons/SeeMoreButton';
import { RevealOnScroll } from './RevealOnScroll';

import '../assets/styles/Projects.scss';


function ProjectCard ({ title, description, image, link, skills, detailedDescription }) {
    
    const [clicked, setClicked] = useState(false);
    
    return (
        <RevealOnScroll>
            <ShowContentOnClick
                hiddenContent= {detailedDescription}
                clicked={clicked}
                setClicked={setClicked}
            >
                <div className="mx-auto w-[80vw] sm:w-[90vw] lg:w-[35vw] border border-gray-400 shadow-lg rounded-lg overflow-hidden items-center">
                    {detailedDescription && <SeeMoreButton clicked={clicked} setClicked={setClicked} />}
                    {/* Main Image */}
                    <div className="relative">
                        <img
                        src={image}
                        alt={title}
                        className="w-full h-56 sm:h-64 object-cover transition-all duration-300 ease-in-out hover:brightness-75"
                        />
                    </div>
                
                    {/* Card Content */}
                    <div className="p-6 h-60 bg-gradient-to-r from-purple-200 to-indigo-100 flex flex-col">
                        <h3 className="text-black text-2xl font-semibold">{title}</h3>
                        <p className="text-gray-600 mt-2 mb-4">{description}</p>
                        <div className="flex-grow" />
                        <div className="flex justify-between">
                            {skills}
                            {link && <CheckRepo link={link} />}
                        </div>
                    </div>
                </div>
            </ShowContentOnClick>
        </RevealOnScroll>
    )
};


const CheckRepo = ({link}) => {
    return (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
        Check Repository
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rotate-180"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M2 12l19-9-4 9 4 9-19-9z" />
        </svg>
        </a>
    )
}



export default ProjectCard;
