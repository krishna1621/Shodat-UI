import React from "react";
import backgroundImage from "../../../../Assets/Components/SolutionAI/hero-bg.png";
import ArrowRight from "../../../../Assets/Components/HomePage/01_Slider_Home/arrow-right.png";

const SolutionBanner = () => {
  return (
    <div
      className="w-full h-[790px] bg-cover bg-center relative "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute ml-4 md:ml-20 mt-12 md:mt-60 ">
        <p className="text-3xl md:text-[61px] font-semibold leading-[50px] md:leading-[91.5px] font-poppins text-white ">
          Pioneering AI Innovations
        </p>
        <h3 className="text-2xl font-medium font-poppins md:font-[39px] leading-[58.5px] text-white pt-2 md:pt-4">
          Transforming data into intelligent action
        </h3>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0">
        <div className="h-[100px] w-[100px] bg-[#F3D157]  flex items-center justify-center ">
          <img src={ArrowRight} alt="Arrow Right" />
        </div>
      </div>
    </div>
  );
};

export default SolutionBanner;
