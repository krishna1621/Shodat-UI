import React from "react";
import backgroundImage from "../../../../Assets/Components/HomePage/08_ContactPage/bg-color.png";

const ScheduleMeetingForm = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center h-[385px] w-[300px] md:h-[465px] md:w-[500px] mt-4 lg:mt-0  bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-[150px] left-[150px] md:top-1/2 md:left-[230px] transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-[300px] w-[200px] md:h-[380px] md:w-[360px] relative md:p-2">
            <h2 className="text-center font-openSans text-lg md:text-3xl font-semibold mb-4 md:mb-8 mt-4 lg:mt-0 text-black">
              Scheduling a Meeting
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent text-black"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent text-black"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent text-black"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent text-black"
                />
              </div>
              <div className="mb-4">
                <input
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent text-black"
                />
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-black text-white font-poppins text-base leading-6 font-medium md:py-2 md:px-4 rounded-full w-full"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeetingForm;
