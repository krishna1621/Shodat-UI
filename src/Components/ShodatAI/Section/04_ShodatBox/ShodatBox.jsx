import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";

export const ShodatBox = () => {
  return (
    <>
      <div className="bg-[#432071] px-4 sm:px-1 py-2 sm:py-4 ">
        <div className="max-w-7xl py-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-4 ">
            <div className="col-span-1 md:col-span-2 lg:col-span-4   lg: ml-10    ">
              <div className="flex flex-col  lg:flex-row   ">
                <div className=" lg:w-80 md:w-1/2 mt-6 lg:mt-0  md:ml-60  lg:ml-0">
                  <h2 className="text-white text-2xl font-sans font-bold leading-10 px-14 lg:px-0 md:text-2xl lg:text-3xl mb-4 hidden lg:block">
                    Our Pillars
                  </h2>
                  <h2 className="text-white text-2xl font-sans font-bold leading-10 px-14 lg:px-0 md:text-2xl lg:text-3xl mb-4 hidden lg:block">
                    of AI
                  </h2>
                  <h2 className="text-white text-2xl font-sans font-bold leading-10 px-14 lg:px-0  md:text-2xl lg:text-3xl mb-4  lg:hidden ">
                    Our Pillars of Ai
                  </h2>
                </div>
                <div className="w-full  mt-6 lg:mt-0">
                  <div className=" lg:border-l-4 border-yellow-400 pl-20 md:-ml-8 pt-4 lg:pt-0 md:border-t-4   border-t-4 lg:border-t-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                      <div>
                        <ul className="text-[#FFFFFF] text-[18] font-sans font-normal leading-7 list-disc">
                          <li> AI powered Enterprises</li>
                          <br></br>
                          <li> AI for Good</li>
                        </ul>
                      </div>

                      <div>
                        <ul className="text-white text-base list-disc">
                          <li> AI Powered Customers</li>
                          <br></br>
                          <li> Responsible AI</li>
                        </ul>
                      </div>

                      <div>
                        <ul className="text-white text-base list-disc">
                          <li> AI enabled Platform</li>
                          <br></br>
                          <div className="md:w-100"></div>
                          <button className="text-black font-openSans text-base font-normal py-2 px-4 h-11 w-40 rounded-full flex items-center justify-center bg-[#F3D157]">
                            <img
                              src={LeftArrow}
                              alt="Left Arrow"
                              className="w-11 h-11 mr-2 rounded-full "
                              style={{
                                background: "#ffffff",
                                width: "24px",
                                height: "24px",
                              }}
                            />

                            <span>Get Started</span>
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShodatBox;
