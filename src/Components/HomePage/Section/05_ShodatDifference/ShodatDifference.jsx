import React from "react";
import Innovate from "../../../../Assets/Components/HomePage/05_ShodatDifference/Innovate.png";
import Manage from "../../../../Assets/Components/HomePage/05_ShodatDifference/Manage.png";
import Modernize from "../../../../Assets/Components/HomePage/05_ShodatDifference/Modernize.png";
import Secure from "../../../../Assets/Components/HomePage/05_ShodatDifference/Secure.png";
import { FaArrowRight } from "react-icons/fa";

function ShodatDifference() {
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Discover the Shodat difference</h1>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
            <div className=" shadow-lg overflow-hidden">
              <img
                src={Innovate}
                alt="Innovate"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-lg font-bold mb-2">Innovate</h2>
                  <p className="text-sm">
                    Cultivating innovation Redefining possibilities in data
                    analytics
                  </p>
                </div>
                <div className="flex justify-end">
                  <FaArrowRight className="text-white p-2 rounded-full" />
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
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-lg font-bold mb-2">Manage</h2>
                  <p className="text-sm">
                    Effortless data management Unleashing control and insight in
                    every byte
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
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-lg font-bold mb-2">Modernize</h2>
                  <p className="text-sm">
                    Modernizing data and applications Transforming your business
                    for the digital era
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
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-lg font-bold mb-2">Secure</h2>
                  <p className="text-sm">
                    Securing your data Ensuring compliance with Cybersecurity
                    solutions
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
