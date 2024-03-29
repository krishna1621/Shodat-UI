import backgroundImage from "../../../../Assets/Components/About/about.png";

const AboutBanner = () => {
  return (
    <div
      className=" w-full h-[490px]  bg-cover bg-center relative "
      style={{ backgroundImage: `url(${backgroundImage})`, maxWidth: "2000px" }}
    >
      <div className="absolute ml-4 md:ml-20 mt-60 md:mt-60 ">
        <p className="text-6xl md:text-[56px] font-bold leading-[70px] font-sans text-white ">
          About Shodat
        </p>
      </div>
    </div>
  );
};
export default AboutBanner;
