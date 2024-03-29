import React from "react";
import backgroundImage from "../../../../Assets/Components/HomePage/08_ContactPage/bg-color.png";

const ScheduleMeetingForm = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center h-[465px] w-[500px] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-1/2 left-[230px] transform -translate-x-1/2 -translate-y-1/2">
          <div className=" h-[380px] w-[360px] relative">
            <h2 className="text-center font-openSans text-3xl font-semibold mb-8 text-black">
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
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent text-black"
                ></textarea>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-black text-white font-poppins font-medium py-2 px-4 rounded-full w-full"
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
