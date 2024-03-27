import React from "react";
import MeetingForm from "./Section/07_Scheduling_Metting/MeetingForm";
import SliderHome from "./Section/01_Slider_Home/SliderHome";
import { TabsContain } from "./Section/06_PartnerOfChoice/TabsContain";
import EmbracingPower from "./Section/03_EmbracingPower/EmbracingPower";
import CardsComponent from "./Section/04_Discover_Shodat/CardsComponent";
import ShodatDifference from "./Section/05_ShodatDifference/ShodatDifference";
import ProductionReadyAi from "./Section/02_ProductionReadyAI/ProductionReadyAI";
import FinalFooter from "../Footer/FinalFooter";
import FooterForAllPagesExceptHome from "../Footer/FooterForAllPagesExceptHome";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container ">
        <SliderHome />
        {/* <ProductionReadyAi /> */}
        <EmbracingPower />
        <CardsComponent />
        <ShodatDifference />
        {/* <TabsContain /> */}
        <MeetingForm />
        <FooterForAllPagesExceptHome />
      </div>
    </div>
  );
};

export default Home;
