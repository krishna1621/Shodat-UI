import React, { useState } from "react";

const RequestForm = () => {
  const [meetingType, setMeetingType] = useState("");

  const handleMeetingTypeChange = (e) => {
    setMeetingType(e.target.value);
  };

  return (
    <div className="bg-white rounded-3xl py-5 lg:ml-10 md:h-[453.5px] max-w-md md:mb-6 mt-5 mb-5  ">
      <h2 className=" font-openSans text-[27px] leading-10 flex justify-center md:justify-normal font-semibold ml-2 mb-8 ">
        Send us a message
      </h2>
      <form className="font-sans font-normal px-4 md:px-0 text-sm  leading-5 ">
        <div className="mb-4 ">
          <select
            id="meetingType"
            name="meetingType"
            value={meetingType}
            onChange={handleMeetingTypeChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none "
          >
            <option value="" disabled selected>
              Select the Topic
            </option>
            <option value="In-person">In-person</option>
            <option value="Online">Online</option>
            <option value="Phone Call">Phone Call</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="border-b border-gray-300 p-2  w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4 ">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Phone number"
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            id="message"
            name="message"
            placeholder="Enter your query in details"
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
          <div className="mt-10 flex md:justify-normal ml-5 md:ml-0 justify-center">
            <button
              type="submit"
              className="bg-black text-white font-sans font-semibold text-base leading-6 py-2.5 px-10 rounded-full lg:w-[215px] "
            >
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
