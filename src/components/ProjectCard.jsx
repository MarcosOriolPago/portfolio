import React from 'react';

const ProjectCard = ({ title, description, image, link, skills }) => (
    <div className="max-w-xl m-10 mx-auto border-1 border-gray-400 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Main Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 object-cover transition-all duration-300 ease-in-out hover:brightness-75"
        />
      </div>
  
      {/* Card Content */}
      <div className="p-6 h-full bg-gradient-to-r from-purple-200 to-indigo-100">
        <h3 className="text-black text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 mb-4">{description}</p>
        <div className="flex justify-between">
            {skills}
            <CheckRepo link={link} />
        </div>
      </div>
    </div>
  );


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
