import React from "react";

const DoorOpenEffect = ({ children }) => {
  return (
    <div className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
         style = {{transform: "translate(-50%, -50%) rotateX(0deg) scale(1)"}}
    >
        {children}

    </div>
  );
};

export default DoorOpenEffect;
