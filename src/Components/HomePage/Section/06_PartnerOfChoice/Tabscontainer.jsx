import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Proven from "../06_PartnerOfChoice/Proven";
import Tabs2 from "../06_PartnerOfChoice/Tabs2";
import Tabs3 from "../06_PartnerOfChoice/Tabs3";
import Tabs4 from "../06_PartnerOfChoice/Tabs4";
import Tabs5 from "../06_PartnerOfChoice/Tabs5";
export default function Platformtabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <div className="container max-w-full font">
        <div className="grid container grid-cols-6 gap-4 ">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <div className="w-full lg: mt-3 ">
              <div className="flex  justify-start ">
                <nav className="w-full  md:ml-6 flex flex-wrap justify-evenly   lg:border-b-2 border-[#CCCCCC] ">
                  <button
                    className={`w-full   md:w-32  md:pr-0 md:h-14  font-sans lg:h-14   xl:pr-64  ${
                      value === 0
                        ? "border-b-4 border-blue-600 text-blue-600 "
                        : "text-black"
                    } md:text-left font-semibold text-lg`}
                    onClick={(e) => handleChange(e, 0)}
                  >
                    <span className="font-semibold text-base md:text-lg font-open-sans">
                      Proven
                    </span>
                  </button>
                  <button
                    className={`w-full md:w-32  font-sans   md:pr-0  xl:pr-64   ${
                      value === 1
                        ? "border-b-4 border-blue-600 text-blue-600"
                        : "text-black"
                    } md:text-left font-semibold text-lg`}
                    onClick={(e) => handleChange(e, 1)}
                  >
                    <span className="font-semibold text-base font-sans md:text-lg font-open-sans">
                      Expertise
                    </span>
                  </button>
                  <button
                    className={`w-full md:w-32  font-sans  md:pr-0  xl:pr-64   ${
                      value === 2
                        ? "border-b-4 border-blue-600 text-blue-600"
                        : "text-black"
                    } md:text-left font-semibold text-lg`}
                    onClick={(e) => handleChange(e, 2)}
                  >
                    <span className="font-semibold font-sans text-base md:text-lg font-open-sans">
                      Customization
                    </span>
                  </button>
                  <button
                    className={`w-full md:w-32  md:pr-0  xl:pr-64  ${
                      value === 3
                        ? "border-b-4 border-blue-600 text-blue-600"
                        : "text-black"
                    } md:text-left font-semibold text-lg`}
                    onClick={(e) => handleChange(e, 3)}
                  >
                    <span className="font-semibold font-sans text-base md:text-lg font-open-sans">
                      Innovation
                    </span>
                  </button>
                  <button
                    className={`w-full md:w-32 md:pr-0    xl:pr-48 ${
                      value === 4
                        ? "border-b-4 border-blue-600 text-blue-600"
                        : "text-black"
                    } md:text-left font-normal text-lg`}
                    onClick={(e) => handleChange(e, 4)}
                  >
                    <span className="font-semibold text-base font-sans md:text-lg ">
                      ResponsibleAI
                    </span>
                  </button>
                </nav>
              </div>
            </div>
            <SwipeableViews
              index={value}
              onChangeIndex={handleChangeIndex}
              style={{
                marginTop: "20px",
              }}
            >
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
      </div>
    </>
  );
}
