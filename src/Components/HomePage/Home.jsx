import React from "react";
import MeetingForm from "./Section/07_Scheduling_Metting/MeetingForm";
import SliderHome from "./Section/01_Slider_Home/SliderHome";
import { TabsContain } from "./Section/06_PartnerOfChoice/TabsContain";
import DiscoverShodat from "./Section/04_Discover_Shodat/DiscoverShodat";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <DiscoverShodat />
      <TabsContain />
      <MeetingForm />
    </div>
  );
};

export default Home;
