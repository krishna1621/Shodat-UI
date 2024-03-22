import { useState, useEffect } from "react";
import img2 from "../../../../Assets/Components/HomePage/01_Slider_Home/slide-1.png";
import img3 from "../../../../Assets/Components/HomePage/01_Slider_Home/slide-2.png";
import Navbar from "../../../Navbar/Navbar";

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
      className="w-full lg:h-[790px] md:h-[790x] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div>
        <div
          className={`transition-opacity duration-2000 ${
            isFirstVisible ? "opacity-100" : "opacity-0"
          } absolute ml-20 mt-60`}
        >
          <p className="text-6xl font-semibold font-Poppins text-white">
            Innovating Insights,
          </p>
          <p className="text-6xl font-semibold font-Poppins text-white  pt-10">
            Accelerating Growth
          </p>
          <p className="text-4xl  text-white font-Poppins font-medium  pt-10">
            Your data, our Expertise
          </p>
          <button
            className="px-4 py-2 mt-8 text-white font-Poppins font-bold rounded-3xl"
            style={{ background: "#016C7B" }}
          >
            Get Started
          </button>
        </div>
        <div
          className={`transition-opacity duration-2000 ${
            isFirstVisible ? "opacity-0" : "opacity-100"
          } absolute ml-20 mt-60`}
        >
          <p className="text-6xl font-semibold text-white font-Poppins">
            Frictionless AI With Shodat
          </p>
          <p className="text-4xl font-semibold text-white font-Poppins pt-10">
            Our AI Solutions Pave the way for a
          </p>
          <p className="text-4xl  text-white font-Poppins font-medium pt-4">
            frictionaless future,
          </p>
          <button
            className="px-4 py-2 mt-8 text-white font-bold rounded-3xl "
            style={{ background: "#016C7B" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
