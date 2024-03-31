import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";

export const ShodatBox = () => {
  return (
    <div
      className=" w-full  bg-[#432071] z-20 flex flex-col md:flex-row items-center py-10"
      // style={{ maxWidth: "2000px" }}
    >
      <div className="">
        <div className="md:ml-14">
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-10 md:leading-14 mb-2">
            Our Pillars
          </h2>
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-10 md:leading-14 mb-2">
            of AI
          </h2>
        </div>
      </div>

      <div
        className=" h-29 bg-yellow-500 top-0 left-100 md:left-144 ml-80 md:ml-0 mt-1 md:mt-0"
        style={{ width: "4px", height: "120" }}
      ></div>
      <div className="flex flex-col md:justify-between mt-4 md:mt-0 md:ml-6 pl-6 ">
        <div className="flex flex-row justify-between items-center mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-white text-lg font-semibold mb-2 md:ml-20">
              AI powered Enterprises
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-lg font-semibold mb-2 md:ml-20">
              AI Powered Customers
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-lg font-semibold mb-2 md:ml-20">
              AI enabled Platform
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="text-white text-lg font-semibold mb-2  md:ml-20">
            AI for Good
          </p>
          <div className="md:w-200"></div> {/* Gap of 200px */}
          <p className="text-white text-lg font-semibold mb-2 md:ml-20">
            Responsible AI
          </p>
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
