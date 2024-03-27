import { useState, useEffect } from "react";
import img2 from "../../../../Assets/Components/HomePage/01_Slider_Home/slide-1.png";
import img3 from "../../../../Assets/Components/HomePage/01_Slider_Home/slide-2.png";
import ArrowRight from "../../../../Assets/Components/HomePage/01_Slider_Home/arrow-right.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbar from "../../../Navbar1/Navbar";

const SliderHome = () => {
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(img2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstVisible((prev) => !prev);
      setBackgroundImage((prevImage) => (prevImage === img2 ? img3 : img2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[790px] container bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />

      <div>
        <div
          className={`transition-opacity duration-2000 ${
            isFirstVisible ? "opacity-100" : "opacity-0"
          } absolute ml-4 md:ml-20 mt-12 md:mt-60`}
        >
          <p className="text-3xl md:text-6xl font-semibold font-Poppins text-white">
            Innovating Insights,
          </p>
          <p className="text-3xl md:text-6xl font-semibold font-Poppins text-white pt-4 md:pt-10">
            Accelerating Growth
          </p>
          <p className="text-xl md:text-4xl text-white font-Poppins font-medium pt-4 md:pt-10">
            Your data, our Expertise
          </p>
          <button
            className="flex items-center justify-center w-40 h-11 mt-10 text-white font-bold rounded-3xl"
            style={{ background: "#016C7B" }}
          >
            <MdOutlineKeyboardArrowRight
              className="w-6 h-6 mr-2 rounded-full text-black"
              style={{ background: "#ffffff" }}
            />
            <span>Get Started</span>
          </button>
        </div>
        <div
          className={`transition-opacity duration-2000 ${
            isFirstVisible ? "opacity-0" : "opacity-100"
          } absolute ml-4 md:ml-20 mt-12 md:mt-60`}
        >
          <p className="text-3xl md:text-6xl font-semibold text-white font-Poppins">
            Frictionless AI With Shodat
          </p>
          <p className="text-xl md:text-4xl font-semibold text-white font-Poppins pt-4 md:pt-10">
            Our AI Solutions Pave the way for a
          </p>
          <p className="text-xl md:text-4xl text-white font-Poppins font-medium pt-2 md:pt-4">
            frictionaless future,
          </p>
          <button
            className="flex items-center justify-center w-40 h-11 mt-10 text-white font-bold rounded-3xl"
            style={{ background: "#016C7B" }}
          >
            <MdOutlineKeyboardArrowRight
              className="w-6 h-6  mr-2 rounded-full text-black"
              style={{ background: "#ffffff" }}
            />
            <span>Get Started</span>
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0">
          <div className="h-[100px] w-[100px] bg-[#F3D157]  flex items-center justify-center ">
            <img src={ArrowRight} alt="Arrow Right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
