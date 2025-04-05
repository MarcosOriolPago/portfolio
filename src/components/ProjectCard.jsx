import React from 'react';

const ProjectCard = ({ title, description, image, link, skills }) => (
    <div className="max-w-xl m-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Main Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 object-cover transition-all duration-300 ease-in-out hover:brightness-75"
        />
        {/* Overlay for title */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
        </div>
      </div>
  
      {/* Card Content */}
      <div className="p-6">
        <p className="text-gray-600 mt-2">{description}</p>
  
        {/* Skills Section */}
        {skills}
      </div>
  
      {/* Action Button */}
      <a
        href={link}
        className="block text-center py-2 bg-blue-500 text-white rounded-b-lg transition-colors duration-300 hover:bg-blue-600"
      >
        View Project
      </a>
    </div>
  );

export default ProjectCard;
