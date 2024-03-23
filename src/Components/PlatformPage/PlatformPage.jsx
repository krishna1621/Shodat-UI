import React from "react";
import EdgeOperation from "./Section/07_EdgeOperation/EdgeOperation";
import EdgeInfrastructure from "./Section/05_EdgeInfrastructure/EdgeInfrastructure";
import WhyeOps from "./Section/04_WhyEOps/WhyeOps";
import Banner from "./Section/01_Banner/Banner";

const PlatformPage = () => {
  return (
    <div>
      <Banner />
      <WhyeOps />
      <EdgeInfrastructure />
      <EdgeOperation />
    </div>
  );
};

export default PlatformPage;
