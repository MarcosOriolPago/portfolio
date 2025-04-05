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
      <div className="p-6 bg-gradient-to-r from-purple-200 to-indigo-100">
        <h3 className="text-black text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 mb-4">{description}</p>
        {skills}
      </div>
      <a
        href={link}
        className="block text-center py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-b-lg transition-colors duration-300 hover:bg-blue-600"
      >
        View Project
      </a>
    </div>
  );

export default ProjectCard;
