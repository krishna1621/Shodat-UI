import about from "../../Assets/Components/About/about.png";
import innovate from "../../Assets/Components/About/about-innovate.png";
import LeaderShip from "./LeaderShip";
function About() {
  return (
    <div className="grid ">
      <div
        className="w-full bg-cover bg-center relative h-[75vh] sm:h-screen"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="ml-5 sm:ml-20 mt-20 sm:mt-72">
          <p className="text-white font-bold font-sans text-4xl sm:text-6xl">
            About Shodat
          </p>
        </div>
      </div>
      <div className="bg-[#F0F5FF] h-[114vh]">
        <div className="mt-8 ml-4 sm:ml-16 pt-6 pl-4 text-2xl sm:text-4xl font-semibold">
          <p>Innovating Insights,</p>
        </div>
        <div className="ml-4 sm:ml-16 pl-4 pt-2 text-2xl sm:text-4xl font-semibold">
          <p>Accelerating Growth</p>
        </div>
        <div className="ml-4 sm:ml-16 pt-6 pl-4 font-sans text-[#57647C] text-base sm:text-lg">
          <p>
            In the heart of Silicon Valley, Shodat Inc. thrives at the
            intersection of innovation,
          </p>
          <p>
            data, and artificial intelligence. As a leading force in the tech
            landscape, we've
          </p>
          <p>
            dedicated ourselves to driving the future of business through
            advanced data analytics
          </p>
          <p>and cutting-edge AI solutions.</p>
        </div>
        <div className="ml-4 sm:ml-16 pt-6 pl-4 font-sans text-[#57647C] text-base sm:text-lg">
          <p>
            Expert in building data analytics & AI applications using cloud
            based compute,
          </p>
          <p>
            network and storage platforms for Silicon Valley giants like Paypal,
            Google, Cisco,
          </p>
          <p>
            Yahoo!, Symantec, and also Japanese conglomerates that include
            manufacturing,
          </p>
          <p>automotive, trading and banking multinationals.</p>
        </div>
        <div className="grid bg-white ml-4 sm:ml-[54%] h-auto sm:h-[60vh] w-full sm:w-[42%] mt-8 sm:mt-[-24%]">
          <div>
            <img
              src={innovate}
              alt="Innovation at Shodat"
              className="bg-no-repeat bg-cover bg-center sm:h-[56vh] sm:w-[92%] sm:ml-[4%] pt-[4%]"
            />
          </div>
        </div>
        <div className="bg-[#340D73] ml-4 sm:ml-16 h-60 w-full sm:w-[52%] mt-14 rounded-lg font-sans">
          <p className="text-white font-semibold text-lg sm:text-xl ml-4 sm:ml-9 pt-8">
            Vision
          </p>
          <p className="ml-4 sm:ml-9 text-white mt-2 pt-2 text-sm sm:text-base">
            Our vision is to illuminate the path to a smarter and more
            data-driven world. We aspire to be
          </p>
          <p className="ml-4 sm:ml-9 text-white">
            the guiding light in the realm of AI and Data Analytics, leading
            businesses and individuals
          </p>
          <p className="ml-4 sm:ml-9 text-white">
            towards a future where data is more than just information it's a
            strategic asset that fuels
          </p>
          <p className="ml-4 sm:ml-9 text-white">
            innovation, informs decisions, and transforms the way we operate.
          </p>
        </div>
        <div className="bg-[#F4BE00] ml-4 sm:ml-[58%] h-[33vh] w-full sm:w-[36%] mt-8 sm:mt-[-16%] rounded-lg pt-5">
          <p className="text-black font-semibold text-lg sm:text-xl ml-4 sm:ml-9 pt-8">
            Mission
          </p>
          <p className="ml-4 sm:ml-9 text-black mt-2 pt-2 text-sm sm:text-base">
            To leverage the transformative power of AI and
          </p>
          <p className="ml-4 sm:ml-9 text-black">
            data analytics contributing to a smarter, more
          </p>
          <p className="ml-4 sm:ml-9 text-black">
            insightful, and more connected world for our
          </p>
          <p className="ml-4 sm:ml-9 text-black">clients and society.</p>
        </div>
      </div>
      <LeaderShip />
    </div>
  );
}
export default About;
