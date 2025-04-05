import React from 'react';

const SkillIconGroup = ({ children }) => {
    return (
      <div
        className="flex flex-wrap sm:flex-nowrap -space-x-3 sm:-space-x-2 pointer-events-none"
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="rounded-full bg-white shadow-md p-2 sm:p-3 border border-gray-200 bg-gradient-to-r from-purple-200 to-indigo-100
                       pointer-events-auto 
                       transition-transform 
                       hover:scale-105 
                       motion-reduce:transition-none 
                       hover:brightness-105 
                       hover:shadow-lg 
                       hover:z-10 
                       group-hover:z-10
                       supports-[hover]:hover:scale-105"
          >
            {child}
          </div>
        ))}
      </div>
    );
  };

export default SkillIconGroup;