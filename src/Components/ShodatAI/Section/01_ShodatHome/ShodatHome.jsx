import shome from "../../../../Assets/Components/ShodaAIPage/shodathome.png";
import arrow from "../../../../Assets/Components/HomePage/01_Slider_Home/arrow-right.png";

const ShodatHome = () => {
  return (
    <div
      className="w-full min-h-screen relative bg-no-repeat bg-cover flex items-center "
      style={{ backgroundImage: `url(${shome})` }}
    >
      <div className="p-4 md:p-20 text-left">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          Ushering Era of
        </h1>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8">
          Frictionless AI with Shodat
        </h1>
        <div className="text-left">
          <p className="font-normal text-base lg:text-lg text-white mb-4">
            We pioneer frictionless AI solutions, seamlessly integrating
            cutting-edge technology
            <br></br>
            to streamline operations and elevate your business to new heights.
          </p>
          <p className="font-normal text-base lg:text-lg text-white">
            technology to streamline operations and elevate your business to new
            heights.
          </p>
        </div>
      </div>
      <div
        style={{
          marginLeft: "300px",
          width: "100px",
        }}
        className="h-100 w-100 bg-yellow-300 flex items-center justify-center ml-20 absolute bottom-0 left-80"
      >
        <img className="mt-12" src={arrow} alt="Arrow Right" />
      </div>
    </div>
  );
};

export default ShodatHome;
