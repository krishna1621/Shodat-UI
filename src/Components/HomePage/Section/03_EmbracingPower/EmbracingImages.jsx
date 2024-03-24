import React from "react";
import watch from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-Watch.png";
import prosense from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-prosense.png";
import trace from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-Trace.png";
import insights from "../../../../Assets/Components/HomePage/02_EmbracingPower/eOps-Insights.png";

function EmbracingImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-550 mx-auto lg:ml-10">
      <div className="mt-7 md:mt-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="ml-7">
            <div className="bg-white shadow-lg flex flex-col justify-between rounded-10 min-h-120 md:w-190 sm:w-190 xs:w-150">
              <img
                src={watch}
                alt="eOps Watch"
                className="w-full h-40 object-cover rounded-10"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Watch
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-lg flex flex-col justify-between rounded-10 min-h-150 md:w-250 sm:w-190 xs:w-150">
              <img
                src={prosense}
                alt="eOps Presense"
                className="w-full h-52 object-cover rounded-8"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Prosense
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="bg-white shadow-lg flex flex-col justify-between rounded-10 min-h-120 md:w-190 sm:w-190 xs:w-150">
              <img
                src={trace}
                alt="eOps Trace"
                className="w-full h-40 object-cover rounded-10"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Trace
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-lg flex flex-col justify-between rounded-10 min-h-150 md:w-250 sm:w-190 xs:w-150">
              <img
                src={insights}
                alt="eOps Insights"
                className="w-full h-52 object-cover rounded-8"
              />
              <p className="text-center font-semibold text-base mt-1">
                eOps Insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbracingImages;
