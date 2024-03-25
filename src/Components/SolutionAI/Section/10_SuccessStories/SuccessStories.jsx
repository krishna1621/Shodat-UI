import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function SuccessStories() {
  return (
    <div className="w-full flex flex-col px-10 py-10">
      <div className="font-poppins text-[31px] leading-[46.5px]  px-4 font-semibold mb-4">
        Success Stories
      </div>
      <div className="font-poppins text-base leading-6 px-4 text-customGrey1 font-normal mb-4">
        Discover how organizations have embraced AI to achieve unparalleled
        <br />
        efficiency and strategic advantage
      </div>
      <div className="px-4">
        <button
          className="flex items-center justify-center w-40 h-11 mt-8 text-white font-normal rounded-3xl"
          style={{ background: "#016C7B" }}
        >
          <MdOutlineKeyboardArrowRight
            className="w-6 h-6  mr-2 rounded-full text-black"
            style={{ background: "#FFFFFF" }}
          />
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
}

export default SuccessStories;
