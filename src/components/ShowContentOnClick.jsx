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
    <div className={`relative w-full flex justify-center items-center z-50 perspective-[1000px]`}>
      {/* Main content with rotation and slide on click */}
      <div
        className={`transition-transform duration-1000 transform-gpu ${
          showHidden && hiddenContent ? "-translate-x-[80%]" : ""
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
        <div className={`
        absolute p-4 w-[60%] border-3 border-indigo-300 rounded-xl border-dashed 
        shadow-lg ${clicked ? 'translate-x-[30%]' : ''}`}>
          <SeeLessButton clicked={clicked} setClicked={setClicked} />
          {hiddenContent}
        </div>
      )}
    </div>
  );
};