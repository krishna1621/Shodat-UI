import backgroundImage from "../../../../Assets/Components/About/about.png";
import Navbar from "../../../Navbar1/Navbar";

const AboutBanner = () => {
  return (
    <div
      className="w-full h-[75vh] bg-cover bg-center bg-norepeat relative "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="absolute ml-4 md:ml-20 mt-12 md:mt-60 ">
        <p className="text-6xl md:text-[56px] font-bold leading-[70px] font-sans text-white ">
          About Shodat
        </p>
      </div>
    </div>
  );
};
export default AboutBanner;
