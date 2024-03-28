import leader from "../../../../Assets/Components/About/leader.png";

function Leadership() {
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-8  p-14"
      style={{ maxWidth: "2000px" }}
    >
      <div className="md:w-1/2 ">
        <img
          src={leader}
          alt="Innovation at Shodat"
          className="w-full h-auto"
        />
      </div>
      {/* Content Column */}
      <div className="md:w-3/5  pl-4 md:pl-10 md:pt-3">
        <div className=" text-[#340D73] md:text-lg font-semibold md:ml-[0.1%] md:mt-[1%] font-sans">
          <p>LEADERSHIP</p>
        </div>
        <div className=" pt-2 text-2xl font-sans text:2xl md:text-4xl font-semibold">
          <p className=" text-[#57647C] font-normal  text-base font-sans mt-2">
            We offer an extensive set of digital solutions that power
            applications & services
          </p>
          <p className="  text-[#57647C] font-normal  text-base font-sans">
            enabling companies & organizations to deliver best user experiences
            to their
          </p>
          <p className=" text-[#57647C] font-normal text-base font-sans">
            customers & employees.
          </p>
        </div>
        <div className="font-sans md:text-[#57647C] text-base  md:leading-6 font-base  pt-4">
          <p className=" text-[#57647C] font-normal  text-basefont-sans mt-6">
            We are a company of seasoned experts with proven industry experience
            in building
          </p>
          <p className="  text-[#57647C] font-normal  text-basefont-sans ">
            {" "}
            data analytics & AI applications using cloud-based compute, network,
            and storage
          </p>
          <p className=" text-[#57647C] font-normal  text-basefont-sans ">
            platforms for Silicon Valley giants like Paypal, Google, Cisco,
            Yahoo!, Symantec, and{" "}
          </p>
          <p className=" text-[#57647C] font-normal  text-basefont-sans ">
            also Japanese conglomerates that include manufacturing, automotive,
            trading, and{" "}
          </p>
          <p className=" text-[#57647C] font-normal  text-basefont-sans ">
            {" "}
            banking multinationals.
          </p>
        </div>
        <div className="font-sans text-base md:text-[#57647C] md:leading-6 md:text-base  pt-4">
          <p className="text-[#57647C] font-normal text-base font-sans mt-6">
            Headquartered in Sunnyvale, California USA and with center of
            excellence centers in{" "}
          </p>
          <p className="  text-[#57647C] font-normal text-base font-sans ">
            {" "}
            India, our partnerships with technology solution providers across
            US, UK, and Japan{" "}
          </p>
          <p className=" text-[#57647C] font-normal text-base font-sans ">
            {" "}
            help us deliver quick and robust solutions for clients across the
            globe.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Leadership;
