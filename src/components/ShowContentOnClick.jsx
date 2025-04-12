import { useEffect, useState } from "react";
import SeeLessButton from "./buttons/SeeLessButton";
import { motion } from "framer-motion";

export const ShowContentOnClick = ({ children, hiddenContent, clicked, setClicked }) => {
  const [showHidden, setShowHidden] = useState(false);
  const [appearWait, setAppearWait] = useState(false);

  useEffect(() => {
    setShowHidden(clicked);
    setTimeout(() => setAppearWait(clicked), 500);
  }, [clicked]);

  return (
    <div className="relative flex justify-center items-center gap-6 perspective-[1000px]">
      {/* Main Card */}
      <motion.div
        initial={false}
        animate={{
          // Ensure the card is centered for those with no inner content
          x: showHidden && hiddenContent ? "-80%" : "0%", // Center or move left depending on the state
          rotateY: showHidden && hiddenContent ? 45 : 0,
          scaleX: showHidden && hiddenContent ? 0.5 : 1,
          scaleY: showHidden && hiddenContent ? 0.7 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative transform-gpu"
      >
        {children}
      </motion.div>

      {/* Hidden Content - Always mounted, just animated */}
      {hiddenContent && (
        <motion.div
          animate={{
            opacity: showHidden ? 1 : 0,
            x: showHidden ? "55%" : 0,
            pointerEvents: showHidden ? "auto" : "none", // prevent clicking when hidden
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-1/3 transform -translate-x-1/2 max-w-[clamp(300px,90%,800px)]"
        >
          <SeeLessButton clicked={clicked} setClicked={setClicked} />
          {hiddenContent}
        </motion.div>
      )}
    </div>
  );
};
