import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductionReadyAi = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 bg-blue-100">
      {/* Top Grid (lg 12) */}
      <div className="col-span-12 lg:col-span-full mt-6">
        <p className="font-sans text-4xl lg:text-6xl font-normal text-left pl-10 pt-10 lg:ml-8 text-black">
          <span className="font-bold text-purple-900">
            Production-ready AI,
          </span>
          <br /> enriched with industry experience
        </p>
      </div>
      <div className="col-span-12 sm:col-span-full md:col-span-full lg:col-span-6 mt-8">
        <p className="bg-purple-900 text-white font-sans text-2xl lg:text-3xl font-light text-left p-10 rounded-lg ml-8">
          Our market ready solutions provide flexible and scalable capabilities
          that enterprises need to successfully become AI-fueled organizations
        </p>
      </div>
      {/* Bottom Grids (lg 6) */}
      <div className="col-span-12 sm:col-span-full md:col-span-full lg:col-span-6 mt-8">
        <p className="text-gray-700 font-sans font-medium text-lg lg:text-xl leading-9 text-left pl-10 pb-5 lg:ml-20">
          Redefining the infusion of machine learning in heavy industries for a
          decade, we at Shodat Inc are poised for a paradigm shift in the
          industry with ready AI—eOps Fabric™, an edge analytics, and operations
          platform. The platform leverages a powerful combination of computer
          vision, predictive analytics, and generative AI to predict operational
          defects, automate RCA reports, and propose impactful enhancements that
          promise significant cost benefits.
        </p>
        <div className="py-10 md:ml-[100px]">
          <button
            className=" text-black font-openSans text-base font-normal py-2 px-4 h-11  w-40 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
            }}
          >
            <MdOutlineKeyboardArrowRight
              className="w-6 h-6 mr-2 rounded-full"
              style={{ background: "#ffffff" }}
            />
            <span className="text-white">Let’s Talk AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductionReadyAi;
