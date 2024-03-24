import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Proven from "../06_PartnerOfChoice/Proven";
import Tabs2 from "../06_PartnerOfChoice/Tabs2";
import Tabs3 from "../06_PartnerOfChoice/Tabs3";
import Tabs4 from "../06_PartnerOfChoice/Tabs4";
import Tabs5 from "../06_PartnerOfChoice/Tabs5";

export default function TabsContainer() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="grid grid-cols-6 gap-4 ">
      <div className="col-span-12 md:col-span-10 lg:col-span-8">
        <div className="w-full mt-3">
          <div className="flex justify-center">
            {/* Centering the buttons */}
            <nav className="w-full">
              <div className="flex flex-wrap justify-evenly border-b">
                <button
                  className={`w-full md:w-auto p-4 text-left ${
                    value === 0
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                  onClick={(e) => handleChange(e, 0)}
                >
                  <span className="font-normal text-base md:text-lg text-left font-open-sans">
                    Proven
                  </span>
                </button>
                <button
                  className={`w-full md:w-auto p-4 text-left ${
                    value === 1
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                  onClick={(e) => handleChange(e, 1)}
                >
                  <span className="font-normal text-base md:text-lg font-open-sans">
                    Expertise
                  </span>
                </button>
                <button
                  className={`w-full md:w-auto p-4 text-left ${
                    value === 2
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                  onClick={(e) => handleChange(e, 2)}
                >
                  <span className="font-normal text-base md:text-lg font-open-sans">
                    Customization
                  </span>
                </button>
                <button
                  className={`w-full md:w-auto p-4 text-left ${
                    value === 3
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                  onClick={(e) => handleChange(e, 3)}
                >
                  <span className="font-normal text-base md:text-lg font-open-sans">
                    Innovation
                  </span>
                </button>
                <button
                  className={`w-full md:w-auto p-4 text-left ${
                    value === 4
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-black"
                  }`}
                  onClick={(e) => handleChange(e, 4)}
                >
                  <span className="font-normal text-base md:text-lg font-open-sans">
                    Responsible AI
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <div className="p-3">
            <Proven />
          </div>
          <div className="p-3">
            <Tabs2 />
          </div>
          <div className="p-3">
            <Tabs3 />
          </div>
          <div className="p-3">
            <Tabs4 />
          </div>
          <div className="p-3">
            <Tabs5 />
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
}
