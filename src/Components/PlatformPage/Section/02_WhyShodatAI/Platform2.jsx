import React from "react";
import ecl1 from "../../../../Assets/Components/PlatformPage/02_WhyShodatAI/Ellipse 1569.png";
import ecl2 from "../../../../Assets/Components/PlatformPage/02_WhyShodatAI/Ellipse 1576.png";
import ecl4 from "../../../../Assets/Components/PlatformPage/02_WhyShodatAI/Ellipse 1568.png";
import ecl5 from "../../../../Assets/Components/PlatformPage/02_WhyShodatAI/Ellipse 1572.png";
import ecl6 from "../../../../Assets/Components/PlatformPage/02_WhyShodatAI/Ellipse 1574.png";
import ecl7 from "../../../../Assets/Components/PlatformPage/02_WhyShodatAI/Ellipse 1570.png";

const Platform2 = () => {
  return (
    <div className=" bg-white p-8 rounded-2xl">
      <div className="grid gap-8">
        <div className="bg-white p-8 rounded-xl">
          <p className="text-black text-2xl font-semibold mb-4">
            A one-stop cloud-native operations platform that transforms raw
            operational data into business values and discovers potential
            operational inefficiencies, risks & security threats faster by
            providing
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 "
            style={{
              marginTop: "70px",
            }}
          >
            {renderFeature("Easy asset onboarding & tracking")}
            {renderFeature("Vision & telemetry powered ops visibility")}
            {renderFeature("Predictive maintenance")}
            {renderFeature("Edge-enabled cognitive models")}
            {renderFeature("Adaptive BI")}
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl " style={{}}>
          <p className="text-black text-2xl font-semibold mb-4">
            Why Shodat Platform?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {renderStat(
              ecl1,
              ecl2,
              ecl4,
              "Reduce cost to adopt PDM & BI strategies by - 40%",
              "#340D73"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl7,
              "Predict & reduce operational failures by - 35%",
              "#F9C407"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl5,
              "Predict time for complex RCA by - 80%",
              "#01A79D"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl6,
              "Reduce time for auditing & compliance by - 66%",
              "#000000"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderFeature = (text) => (
  <div className="flex items-center">
    {[...Array(1)].map((_, index) => (
      <div key={index} className="relative">
        <div
          className="bg-black rounded-lg p-7"
          style={{
            height: "99px",
            width: "240px",
          }}
        >
          <p className="text-white">{text}</p>
        </div>
        {index !== 4 && (
          <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 -ml-2">
            <div className="bg-black w-1 h-1"></div>
          </div>
        )}
      </div>
    ))}
  </div>
);

const renderStat = (image1, image2, image3, text, backgroundColor) => (
  <div className="flex items-center relative">
    <div
      className="w-24 h-24 bg-black flex justify-center items-center relative rounded"
      style={{
        height: "60px",
        width: "360px",
        backgroundColor: backgroundColor,
        marginTop: "30%",
      }}
    >
      <img
        src={image1}
        className="absolute h-12"
        alt="Ellipse 1"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
      <img
        src={image2}
        className="absolute h-12"
        alt="Ellipse 2"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
      <svg
        width="100%"
        height="150%"
        style={{ position: "absolute", bottom: 30, left: 0 }}
      >
        <line
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          stroke="#340D73"
          strokeWidth="1"
        />
      </svg>
      <img
        src={image3}
        className="absolute h-12"
        alt="Ellipse 4"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
      <img
        src={image3}
        className="absolute h-12"
        alt="Ellipse 4"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "-170px",
          height: "20px",
          width: "20px",
        }}
      />
    </div>
    <p
      className="absolute top-0 left-0 right-0 text-xs text-center"
      style={{ marginTop: "10px" }}
    >
      {text}
    </p>
  </div>
);

export default Platform2;
