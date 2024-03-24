import React from "react";
import MeetingForm from "./Section/07_Scheduling_Metting/MeetingForm";
import SliderHome from "./Section/01_Slider_Home/SliderHome";
import { TabsContain } from "./Section/06_PartnerOfChoice/TabsContain";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <TabsContain />
      <MeetingForm />
    </div>
  );
};

export default Home;
