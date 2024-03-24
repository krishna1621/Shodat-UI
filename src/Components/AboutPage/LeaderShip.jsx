import leader from "../../Assets/Components/About/leader.png";
function LeaderShip() {
  return (
    <div className="grid gap-4 ">
      <div className="h-screen">
        <div className="bg-gradient-to-r from-purple-400 via-yellow-200 to-yellow-200 sm:h-[60vh] sm:w-[42%]  sm:mt-20 ml-16"></div>
        <div
          style={{ backgroundImage: `url(${leader})` }}
          className="bg-no-repeat bg-cover bg-center sm:h-[56vh] sm:w-[40%]  sm:ml-20 sm:mt-[-28%]"
        ></div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <p className="text-[#340D73] sm:text-lg  font-bold sm:ml-[50%] sm:mt-[-28%] font-sans">
            LEADERSHIP
          </p>
          <p className="ml-[50%] text-[#57647C] font-normal  text-base font-sans mt-2">
            We offer an extensive set of digital solutions that power
            applications & services
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal  text-base font-sans">
            enabling companies & organizations to deliver best user experiences
            to their{" "}
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal text-base font-sans">
            customers & employees.
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal  text-basefont-sans mt-6">
            We are a company of seasoned experts with proven industry experience
            in building
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal  text-basefont-sans ">
            {" "}
            data analytics & AI applications using cloud-based compute, network,
            and storage
          </p>
          <p className="ml-[50%] text-[#57647C] font-normal  text-basefont-sans ">
            platforms for Silicon Valley giants like Paypal, Google, Cisco,
            Yahoo!, Symantec, and{" "}
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal  text-basefont-sans ">
            also Japanese conglomerates that include manufacturing, automotive,
            trading, and{" "}
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal  text-basefont-sans ">
            {" "}
            banking multinationals.
          </p>
          <p className="ml-[50%] text-[#57647C] font-normal text-base font-sans mt-6">
            Headquartered in Sunnyvale, California USA and with center of
            excellence centers in{" "}
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal text-base font-sans ">
            {" "}
            India, our partnerships with technology solution providers across
            US, UK, and Japan{" "}
          </p>
          <p className="ml-[50%]  text-[#57647C] font-normal text-base font-sans ">
            {" "}
            help us deliver quick and robust solutions for clients across the
            globe.
          </p>
        </div>
        <div className="grid sm:mt-[15%]">
          <div className="bg-gray-100 sm:w-[18%] ml-16 sm:h-56 rounded-lg text-center">
            <p className="text-gray-500 font-semibold font-sans pt-8">
              REPEATED CLIENTS IN OVER
            </p>
            <p className="text-purple-800 text-6xl font-sans font-bold pt-6">
              10
            </p>
            <p className="text-gray-500 font-bold font-sans pt-6">COUNTRIES</p>
          </div>
          <div className="bg-gray-100 sm:w-[18%] sm:h-56 rounded-lg text-center ml-[27%] mt-[-15%]">
            <p className="text-gray-500 font-semibold font-sans pt-8">
              REVENUE GENERATED IN
            </p>
            <p className="text-gray-500 font-semibold font-sans pt-2">
              US FROM FORTUNE 500
            </p>
            <p className="text-gray-500 font-semibold font-sans pt-2">
              COMPANIES
            </p>
            <p className="text-purple-800 text-5xl font-sans font-semibold pt-4">
              80%
            </p>
          </div>
          <div className="bg-gray-100 sm:w-[18%] sm:h-56 rounded-lg text-center ml-[50%] mt-[-15%]">
            <p className="text-gray-500 font-semibold font-sans pt-8">
              GLOBAL OFFICES &{" "}
            </p>
            <p className="text-gray-500 font-semibold  font-sans pt-2">
              {" "}
              PARTNERSHIP IN
            </p>
            <p className="text-purple-800 text-5xl font-sans font-semibold pt-4">
              4
            </p>
            <p className="text-gray-500 font-semibold font-sans pt-6">
              COUNTRIES
            </p>
          </div>
          <div className="bg-gray-100 sm:w-[18%] sm:h-56 rounded-lg font-sans text-center ml-[73%] sm:mt-[-15%]">
            <p className="text-gray-500 font-semibold pt-11 font-sans">
              SUCCESSFUL PROJECTS
            </p>
            <p className="text-purple-800 text-5xl font-semibold pt-7 font-sans">
              100+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeaderShip;
