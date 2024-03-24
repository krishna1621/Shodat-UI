import React from "react";
import ShodatHome from "./Section/01_ShodatHome/ShodatHome";
import IntroSection from "./Section/02_Introsection/Introsection";
import { Introsection2 } from "./Section/03_Introsection/Introsection2";
import { ShodatBox } from "./Section/04_ShodatBox/ShodatBox";
import ExplainableAISection from "./Section/05_Explanation/ExplantionableAISection";

const ShodatAI = () => {
  return (
    <div>
      <ShodatHome />
      <IntroSection />
      <Introsection2 />
      <ShodatBox />
      <ExplainableAISection />
    </div>
  );
};

export default ShodatAI;
