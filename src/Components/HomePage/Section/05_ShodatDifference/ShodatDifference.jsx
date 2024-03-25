import React from "react";
import Innovate from "../../../../Assets/Components/HomePage/05_ShodatDifference/Innovate.png";
import Manage from "../../../../Assets/Components/HomePage/05_ShodatDifference/Manage.png";
import Modernize from "../../../../Assets/Components/HomePage/05_ShodatDifference/Modernize.png";
import Secure from "../../../../Assets/Components/HomePage/05_ShodatDifference/Secure.png";
import { FaArrowRight } from "react-icons/fa";

function ShodatDifference() {
  return (
    <div className=" py-8">
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h1 className=" font-sans leading-[66px] text-[44px] font-bold">
            <span className="font-bold">Discover</span>{" "}
            <span className="font-semibold">&nbsp; the Shodat difference</span>
          </h1>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
            <div className=" shadow-lg overflow-hidden">
              <img
                src={Innovate}
                alt="Innovate"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex flex-col mt-24 justify-between p-4">
                <div>
                  <h2 className="font-sans text-xl leading-[30px] text-white font-bold mb-2">
                    Innovate
                  </h2>
                  <p className="text-sm font-sans text-white font-bold leading-5">
                    Cultivating innovation
                    <br />
                    Redefining possibilities in data analytics
                  </p>
                </div>
                <div className="flex justify-end text-pink-600">
                  <FaArrowRight className=" w-9 p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          {/* Repeat the same structure for other images */}
          <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
            <div className=" shadow-lg  overflow-hidden">
              <img
                src={Manage}
                alt="Manage"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex flex-col mt-24 justify-between p-4">
                <div>
                  <h2 className="font-sans text-xl leading-[30px] text-white font-bold mb-2">
                    Manage
                  </h2>
                  <p className="text-sm font-sans text-white font-bold leading-5">
                    Effortless data management <br /> Unleashing control and
                    insight in every byte
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaArrowRight className="text-white p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
            <div className=" shadow-lg overflow-hidden">
              <img
                src={Modernize}
                alt="Modernize"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex flex-col mt-24 justify-between p-4">
                <div>
                  <h2 className="font-sans text-xl leading-[30px] text-white font-bold mb-2">
                    Modernize
                  </h2>
                  <p className="text-sm font-sans text-white font-bold leading-5">
                    Modernizing data and applications <br />
                    Transforming your business for the digital era
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaArrowRight className="text-white p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
            <div className=" shadow-lg  overflow-hidden">
              <img
                src={Secure}
                alt="Secure"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex flex-col mt-24 justify-between p-4">
                <div>
                  <h2 className="font-sans text-xl leading-[30px] text-white font-bold mb-2">
                    Secure
                  </h2>
                  <p className="text-sm font-sans text-white font-bold leading-5">
                    Securing your data <br />
                    Ensuring compliance with Cybersecurity solutions
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaArrowRight className="text-white p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShodatDifference;
