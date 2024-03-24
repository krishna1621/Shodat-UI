import React from "react";
import EdgeOperation from "./Section/07_EdgeOperation/EdgeOperation";
import EdgeInfrastructure from "./Section/05_EdgeInfrastructure/EdgeInfrastructure";
import WhyeOps from "./Section/04_WhyEOps/WhyeOps";
import Banner from "./Section/01_Banner/Banner";
import Platform2 from "./Section/02_WhyShodatAI/Platform2";
import { Platform } from "./Section/08_OperationalChallenges/Platform";

const PlatformPage = () => {
  return (
    <div>
      <Banner />
      <Platform2 />
      <WhyeOps />
      <EdgeInfrastructure />
      <EdgeOperation /> <Platform />
    </div>
  );
};

export default PlatformPage;
