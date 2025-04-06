import { useState } from "react";

export const ShowContentOnHover = ({ children, hiddenContent }) => {
  const [hovered, setHovered] = useState(false);
  const [showHidden, setShowHidden] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    // Wait for the duration of the animation (match with tailwind duration-1000)
    setTimeout(() => setShowHidden(true), 1000);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowHidden(false); // Hide immediately when leaving
  };

  return (
    <div
      className="relative w-full flex justify-center items-center perspective-[1000px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main content with rotation and slide */}
      <div
        className={`transition-transform duration-1000 transform-gpu ${
          hovered ? "-translate-x-110" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: hovered ? "rotateY(45deg) scaleX(0.6) scaleY(0.7)" : "rotateY(0deg) scaleX(1) scaleY(1)",
        }}
      >
        {children}
      </div>
      {showHidden && (
        <div className= {`${"absolute left-3/11 right-1/5 p-4 border-3 border-indigo-300 rounded-xl border-dashed translate-x-[160px]"}`}>
          {hiddenContent}
        </div>
      )}
    </div>
  );
};