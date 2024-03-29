import React from "react";
import ScheduleMeetingForm1 from "./ScheduleMeetingForm1";
import ScheduleMeetingForm from "./ScheduleMeetingForm";

const MeetingForm = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center  justify-evenly py-14 "
      style={{ background: "#340D73" }}
    >
      {/* Left side (70% width on large screens and above) */}
      <div className="lg:w-7/12 xl:w-7/12 xxl:w-7/12 mx-10">
        <ScheduleMeetingForm1 />
      </div>

      {/* Right side (30% width on large screens and above) */}
      <div className="lg:w-5/12 xl:w-5/12 xxl:w-5/12 mx-10">
        <ScheduleMeetingForm />
      </div>
    </div>
  );
};

export default MeetingForm;
