import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const ScheduleMeetingForm1 = () => {
  return (
    <div className="p-4 md:px-8  ">
      <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white  mb-4 md:mb-6 sm:leading-5 md:leading-[60px]">
        Unlock the untapped potential of your business with the transformative
        capabilities of AI.
      </h2>
      <p className="font-openSans text-base md:text-lg  font-light text-white  mb-4 md:mb-6 md:leading-[33px] sm:leading-5">
        From automating repetitive tasks to optimizing decision-making through{" "}
        advanced analytics, artificial intelligence is the key to scalability
        and innovation.
      </p>
      <button
        className=" text-black font-openSans text-base font-normal py-2 px-4 h-11  w-40 rounded-full flex items-center justify-center"
        style={{ background: "#F3D157" }}
      >
        <MdOutlineKeyboardArrowRight
          className="w-6 h-6 mr-2 rounded-full"
          style={{ background: "#ffffff" }}
        />
        <span>Let’s Talk AI</span>
      </button>
    </div>
  );
};

export default ScheduleMeetingForm1;
