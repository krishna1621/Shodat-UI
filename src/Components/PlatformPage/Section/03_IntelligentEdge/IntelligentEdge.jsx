import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const IntelligentEdge = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-envenly  ">
      <div className="font-sans text-[42px] leading-[66px] px-6 font-bold  mb-4 md:mb-0">
        Smarter Operations with Intelligent Edge
      </div>

      <button
        className="flex items-center justify-center w-40 ml-6 h-11 text-black font-normal  rounded-3xl"
        style={{ background: "#F3D157" }}
      >
        <MdOutlineKeyboardArrowRight
          className="w-6 h-6 mr-2 rounded-full text-black"
          style={{ background: "#FFFFFF" }}
        />
        <span>Free Trail</span>
      </button>
    </div>
  );
};

export default IntelligentEdge;
