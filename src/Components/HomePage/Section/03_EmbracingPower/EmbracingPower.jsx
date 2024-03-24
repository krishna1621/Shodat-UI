import React from "react";
import EmbracingImages from "./EmbracingImages";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const EmbracingPower = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="px-8 py-16 md:px-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug text-purple-900">
            <span className="font-bold text-purple-900 text-6xl leading-13">
              Embracing
            </span>{" "}
            <span
              className="text-black font-thin text-4xl leading-11"
              style={{ fontSize: "44px", lineHeight: "52.8px" }}
            >
              power of data and advanced AI for the automotive industry
            </span>
          </h1>
          <p
            className="mt-4  text-gray-700 font-normal text-base leading-7 font-Poppins"
            style={{
              color: "#57647C",
              fontSize: "18px",
              lineHeight: "27px",
              fontWeight: 400,
            }}
          >
            How a subsidiary of the Japanese automotive manufacturer producing
            commercial vehicles and diesel engines achieved 30% reduction in
            year on year IT spend with improved infrastructure efficiency and
            minimal operational overhead.
          </p>

          <button
            className=" text-black font-openSans text-base font-normal py-2 mt-5 px-4 h-11  w-60 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
            }}
          >
            <MdOutlineKeyboardArrowRight
              className="w-6 h-6 mr-2 rounded-full"
              style={{ background: "#ffffff" }}
            />
            <span className="font-medium text-base leading-6 font-poppins text-white">
              Watch Ai in Action
            </span>
          </button>
        </div>

        <div className=" md:block">
          <EmbracingImages />
        </div>
      </div>
    </div>
  );
};

export default EmbracingPower;