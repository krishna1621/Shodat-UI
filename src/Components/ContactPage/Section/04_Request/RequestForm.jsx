import React, { useState } from "react";

const RequestForm = () => {
  const [meetingType, setMeetingType] = useState("");

  const handleMeetingTypeChange = (e) => {
    setMeetingType(e.target.value);
  };

  return (
    <div className="bg-white rounded-3xl py-8 lg:ml-20 max-w-md md:mb-6 mt-5 mb-5 ">
      <h2 className=" font-openSans text-3xl font-semibold mb-8 text-left">
        Send us a message
      </h2>
      <form>
        <div className="mb-4">
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
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
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
        <div className="mb-4">
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
          <textarea
            id="message"
            name="message"
            placeholder="Enter your query in details"
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          ></textarea>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-black text-white font-poppins font-medium py-2.5 px-10 rounded-full lg:w-[215px] "
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
