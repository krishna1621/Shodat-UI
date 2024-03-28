import React from "react";
import eopsWatch from "../../../../Assets/Components/PlatformPage/eOps-Watch.png";
import eopsTrace from "../../../../Assets/Components/PlatformPage/eOps-Trace.png";
import eopsProsense from "../../../../Assets/Components/PlatformPage/eOps-Prosense.png";
import eopsInsights from "../../../../Assets/Components/PlatformPage/eOps-Insights.png";
import borderimage from "../../../../Assets/Components/PlatformPage/Rectangle 9058.png";
function GridItem({ imageUrl, title, description }) {
  return (
    <div className="w-full bg-[#fffbef] md:w-1/2 lg:w-1/4 p-4 flex ">
      <div className="border-b flex">
        <div className="bg-white rounded-lg shadow-md p-4 border border-[#D1CFCF]">
          <div className="flex justify-center items-center mt-3 ">
            <img
              src={imageUrl}
              alt={title}
              className="w-48 h-32  object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="font-sans text-lg font-semibold mb-2 leading-7">
              {title}
            </h2>
            <p className="font-sans text-sm text-[#57647C] leading-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EdgeOperation() {
  const gridItems = [
    {
      imageUrl: eopsWatch,
      title: "eOps Watch",
      description:
        "Vision AI capabilities to provide edge asset recognition &  anomaly detection",
    },
    {
      imageUrl: eopsTrace,
      title: "eOps Trace",
      description:
        "Event- based edge asset tracking monitors & telemetry processing framework",
    },
    {
      imageUrl: eopsProsense,
      title: "eOps Prosense",
      description:
        "Proactive operations & predictive maintenance framework with anomaly detection, forecasting & problems/claims management features",
    },
    {
      imageUrl: eopsInsights,
      title: "eOps Insights",
      description:
        "Cognitive business intelligence functions including risk management & fraud detection",
    },
  ];

  return (
    <div
      className=" bg-[#fffbef] py-8 relative"
      style={{
        maxWidth: "2000px",
      }}
    >
      <div className="container mx-auto bg-[#fffbef] border-b-2  py-2">
        <div className="font-sans text-4xl font-semibold leading-[54px] mx-4 mb-4   ">
          Enterprise Edge Operations Application -{" "}
          <span className="font-light ">(SaaS)</span>
        </div>
        <div className="flex flex-wrap ">
          {gridItems.map((item, index) => (
            <GridItem key={index} {...item} />
          ))}
        </div>
        <img src={borderimage} className="absolute mt-[2px] ml-4" />
      </div>
    </div>
  );
}

export default EdgeOperation;
