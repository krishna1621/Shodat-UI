import React from "react";
import backgroundImage from "../../../../Assets/Components/PlatformPage/platform-banner.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PlatformNavbar from "../PlatformNavbar";
function Banner() {
  return (
    <div>
      <div className="z-10 relative">
        <PlatformNavbar />
      </div>

      <div className="relative ">
        {/* Background image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-auto lg:w-1320 lg:h-500  lg:px-10 px-5 lg:mt-10 mt-16"
        />
        {/* Text */}
        <div className="absolute top-0 left-0  lg:p-10 lg:mt-16 lg:ml-10 lg:w-10/12">
          <h1 className="lg:text-[56px] md:text-[30px]  px-10 pt-8 lg:px-0 lg:py-0 font-bold text-white lg:leading-[70px]  lg:line-height-[70px]">
            The value of data lies not in having it, but in its precise and
            strategic utilization through advanced AI
          </h1>
          {/* Button */}
          <button
            className=" text-black font-openSans text-base text-nowrap font-normal py-2 px-4 lg:h-11 lg:w-48 h-7 w-30 
            rounded-full flex items-center justify-center md:ml-2 md:mt-16 mt-2 ml-8"
            style={{ background: "#F3D157" }}
          >
            <MdOutlineKeyboardArrowRight
              className="lg:w-6 lg:h-6 w-4 h-4 mr-2 rounded-full "
              style={{ background: "#ffffff" }}
            />
            <span>Explore Solutions</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
