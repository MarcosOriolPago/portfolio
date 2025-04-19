import { useEffect, useState } from "react";
import SeeLessButton from "./buttons/SeeLessButton";
import { motion } from "framer-motion";
import useIsLargeScreen from "../hooks/useIsLargeScreen";

export const ShowContentOnClick = ({ children, hiddenContent, clicked, setClicked }) => {
  const [showHidden, setShowHidden] = useState(false);
  const [appearWait, setAppearWait] = useState(false);

  const isLargeScreen = useIsLargeScreen();
  console.log("isLargeScreen", isLargeScreen);

  useEffect(() => {
    setShowHidden(clicked);
    setTimeout(() => setAppearWait(clicked), 500);
  }, [clicked]);

  return (
    <div className="relative flex justify-center items-center gap-6 perspective-[1200px]">
      {/* Main Card */}
      <motion.div
        initial={false}
        animate={{
          // Ensure the card is centered for those with no inner content
          x: showHidden && hiddenContent ? "-30vw" : "0vw", // Center or move left depending on the state
          rotateY: showHidden && hiddenContent ? 45 : 0,
          scaleX: showHidden && hiddenContent ? 0.4 : 1,
          scaleY: showHidden && hiddenContent ? 0.7 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`
          relative transform-gpu
          ${!isLargeScreen && showHidden && hiddenContent ? "hidden" : ""}
          `}
      >
        {children}
      </motion.div>

      {/* Hidden Content - Always mounted, just animated */}
      {hiddenContent && (
        <motion.div
          animate={{
            opacity: showHidden ? 1 : 0,
            display: showHidden ? "block" : "none",
            x: showHidden && isLargeScreen ? "35vw" : 0,
            pointerEvents: showHidden ? "auto" : "none", // prevent clicking when hidden
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
          block lg:absolute
          right-[5vw] 
          lg:left-1/3 transform lg:-translate-x-1/2 lg:max-w-[60vw]
          "
        >
          <SeeLessButton clicked={clicked} setClicked={setClicked} />
          {hiddenContent}
        </motion.div>
      )}
    </div>
  );
};
