import { useEffect, useState } from "react";
import SeeLessButton from "./buttons/SeeLessButton";

export const ShowContentOnClick = ({ children, hiddenContent, clicked, setClicked}) => {
  const [showHidden, setShowHidden] = useState(false);
  const [appearWait, setAppearWait] = useState(false);

  useEffect(() => {
    setShowHidden(clicked);
    setTimeout(() => setAppearWait(clicked), 500);
  }, [clicked]);

  return (
    <div className={`relative w-full flex justify-center items-center perspective-[1000px]`}>
      {/* Main content with rotation and slide on click */}
      <div
        className={`transition-transform duration-1000 transform-gpu ${
          showHidden && hiddenContent ? "-translate-x-[100%]" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: showHidden && hiddenContent
            ? "rotateY(45deg) scaleX(0.6) scaleY(0.7)"
            : "rotateY(0deg) scaleX(1) scaleY(1)",
        }}
      >
        {children}
      </div>

      {/* Hidden content revealed on click */}
      {appearWait && showHidden && hiddenContent && (
        <div className={`absolute w-[65%] ${clicked ? 'translate-x-[25%]' : ''}`}>
          <SeeLessButton clicked={clicked} setClicked={setClicked} />
          {hiddenContent}
        </div>
      )}
    </div>
  );
};