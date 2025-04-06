import { useState } from "react";

export const DoorOpenEffect = ({children}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="perspective-[1000px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`transition-transform duration-1000 transform-gpu ${hovered ? "-translate-x-80" : ""}`}
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