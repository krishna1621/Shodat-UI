import ecl1 from "../../../../Assets/Components/PlatformPage/e2.svg";
import ecl2 from "../../../../Assets/Components/PlatformPage/e3.svg";
import ecl4 from "../../../../Assets/Components/PlatformPage/r4.svg";
import ecl5 from "../../../../Assets/Components/PlatformPage/r2.svg";
import ecl6 from "../../../../Assets/Components/PlatformPage/r1.svg";
import ecl7 from "../../../../Assets/Components/PlatformPage/r3.svg";

const Platform2 = () => {
  return (
    <div className=" bg-white  containerrounded-2xl ">
      <div className="grid gap-8 container ">
        <div className="bg-white p-8 rounded-xl">
          <p className="text-black text-2xl font-sans font-normal leading-10  mb-4">
            A one-stop cloud-native operations platform that transforms raw
            operational data into business values and discovers potential
            operational inefficiencies, risks & security threats faster by
            providing
          </p>
          <div
            className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 gap-6 "
            style={{}}
          >
            {renderFeature("Easy asset onboarding & tracking")}
            {renderFeature("Vision & telemetry powered ops visibility")}
            {renderFeature("Predictive maintenance")}
            {renderFeature("Edge-enabled cognitive models")}
            {renderFeature("Adaptive BI")}
          </div>
        </div>

        <div className="bg-white   container">
          <p className="text-black text-4xl font-sans font-semibold mb-4 lg:text-left px-8">
            Why Shodat Platform?
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{}}
          >
            {renderStat(
              ecl1,
              ecl2,
              ecl4,
              "Reduce cost to adopt PDM & BI strategies by - 40%",
              "#340D73",
              "130%",
              "#340D73",
              "-170px",
              "50px"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl7,
              "Predict & reduce operational failures by - 35%",
              "#F9C407",
              "110%",
              "#F9C407",
              "-112px",
              "80px"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl5,
              "Predict time for complex RCA by - 80%",
              "#01A79D",
              "250%",
              "#01A79D",
              "-290px",
              "20px"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl6,
              "Reduce time for auditing & compliance by - 66%",
              "#000000",
              "110%",
              "#000000",
              "-112px",
              "80px"
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
            <div className="bg-black  h-1 font-normal  text-18 font-sans"></div>
          </div>
        )}
      </div>
    ))}
  </div>
);

const renderStat = (
  image1,
  image2,
  image3,
  text,
  backgroundColor,
  svgHeight,
  strokeColor,
  image3MarginTop,
  paragraphMarginTop
) => (
  <div className="flex relative mt-6 lg:max-w-screen-lg">
    <div
      className="w-40 h-24 bg-black flex justify-center items-center relative "
      style={{
        height: "60px",
        width: "400px",
        backgroundColor: backgroundColor,
        marginTop: "45%",
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
        className="absolute"
        alt="Ellipse 2"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
      <svg
        width="100%"
        height={svgHeight}
        style={{ position: "absolute", bottom: 30, left: 0 }}
      >
        <line
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          stroke={strokeColor}
          strokeWidth="1"
        />
      </svg>
      <img
        src={image3}
        className="absolute h-12"
        alt="Ellipse 4"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: image3MarginTop,
          height: "20px",
          width: "20px",
        }}
      />
    </div>
    <p
      className="absolute top-0 left-0 right-0 text-sm sm:text-base lg:text-sm xl:text-xl  text-center font-semibold text-[#555555]"
      style={{
        marginTop: paragraphMarginTop,
      }}
    >
      {text}
    </p>
  </div>
);

export default Platform2;
