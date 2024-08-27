import React from "react";

import "./TheHeader.css";

const TheHeader = () => {
  return (
    <header className="relative flex items-center w-full px-[40px] h-[80px] bg-[#161616]">
      <span className="flex items-center mt-[5px] text-[#ffffff] text-[2.5rem] font-['RubikMono']">
        <p className="">IT</p>

        <p className="mt-[8px] mx-[10px] text-[1.5rem] font-['NewAmsterdam']">
          is
        </p>

        <p className="font-['RubikMono']">База</p>
      </span>
    </header>
  );
};

export default TheHeader;
