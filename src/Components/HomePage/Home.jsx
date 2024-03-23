import React from "react";
import MeetingForm from "./Section/07_Scheduling_Metting/MeetingForm";
import SliderHome from "./Section/01_Slider_Home/SliderHome";
import DiscoverShodat from "./Section/04_Discover_Shodat/DiscoverShodat";

const Home = () => {
  return (
    <div>
      <SliderHome />
      {/* <DiscoverShodat /> */}
      <MeetingForm />
    </div>
  );
};

export default Home;
