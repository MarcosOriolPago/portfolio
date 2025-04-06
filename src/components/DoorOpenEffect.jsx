import { useState } from "react";

export const DoorOpenEffect = ({children}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-md mx-auto perspective-[600px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="
          transition-transform duration-500 transform-gpu
        "
        style={{
          transformStyle: "preserve-3d",
          transform: hovered ? "rotateY(45deg)" : "rotateY(0deg)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DoorOpenEffect;