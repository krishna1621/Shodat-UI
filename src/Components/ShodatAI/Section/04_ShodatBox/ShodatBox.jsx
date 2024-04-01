import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";

export const ShodatBox = () => {
  return (
    <div
      className="relative w-full bg-[#432071] p-4 z-20 flex flex-col md:flex-row items-center"
      style={{ maxWidth: "2000px" }}
    >
      <div className="">
        <div className="md:ml-14">
          <h2 className="text-white text-2xl font-sans font-bold leading-10 md:text-4xl md:leading-14 mb-2">
            Our Pillars
          </h2>
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-10 md:leading-14 mb-2">
            of AI
          </h2>
        </div>
      </div>
      <div className="md:hidden w-full h-2 bg-[#F3D157] mt-4 mb-4"></div>
      {/* Vertical line for larger screens */}
      <div className="hidden md:block h-32 w-2 ml-9 bg-[#F3D157] mr-6 md:mr-10"></div>
      <div className="flex flex-col md:justify-between mt-4 md:mt-0">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <li className="text-[#FFFFFF] text-[18] font-sans font-normal leading-7">
            AI powered Enterprises
          </li>
          <li className="text-[#FFFFFF] text-[18] font-sans font-normal leading-7 xl:ml-48">
            AI Powered Customers
          </li>
          <li className="text-[#FFFFFF] text-[18] font-sans font-normal leading-7  xl:ml-48">
            AI enabled Platform
          </li>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <li className="text-[#FFFFFF] text-[18] font-sans font-normal leading-7   mb-2 md:mb-0  ">
            AI for Good
          </li>
          <li className="text-[#FFFFFF] text-[18] font-sans font-normal leading-7 mb-2 md:mb-0  xl:ml-36">
            Responsible AI
          </li>
          <div className="md:w-100"></div> {/* Gap of 100px */}
          <button
            className="flex items-center justify-center w-full md:w-40 h-11 text-black font-normal rounded-3xl"
            style={{ background: "#F3D157" }}
          >
            <img
              src={LeftArrow}
              className="w-11 h-11 mr-2 rounded-full "
              style={{
                background: "#ffffff",
                width: "24px",
                height: "24px",
              }}
            />

            <span>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShodatBox;
