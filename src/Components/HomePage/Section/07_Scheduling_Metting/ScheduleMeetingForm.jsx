import React from "react";
import backgroundImage from "../../../../Assets/Components/HomePage/08_ContactPage/bg-color.png";
const ScheduleMeetingForm = () => {
  return (
    <div className="relative">
      <div
        className="absolute h-full w-full  ml-[-50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Adjust opacity as needed
      ></div>
      <div className="bg-white rounded-3xl p-8 max-w-md md:mb-6 mt-5 mb-5  relative  ">
        <h2 className="text-center font-openSans text-3xl font-semibold mb-8">
          Scheduling a Meeting
        </h2>
        <form>
          <div className="mb-2">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="border-b border-gray-300 p-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              className="border-b border-gray-300 p-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="border-b border-gray-300 p-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              className="border-b border-gray-300 p-2 w-full focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="border-b border-gray-300 p-2 w-full focus:outline-none"
            ></textarea>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-black text-white font-poppins font-medium py-2 px-4 rounded-full w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default ScheduleMeetingForm;
