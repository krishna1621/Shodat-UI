import React from "react";
import PredictiveAnalytics from "./Section/03_AdvancedPredictive/PredictiveAnalytics";
import CognitiveComputing from "./Section/04_CognitiveComputing/CognitiveComputing";
import NaturalLanguageProcessing from "./Section/05_NaturalLanguageProcessing/05_NaturalLanguageProcessing";
import ComputerVision from "./Section/06_ComputerVision/ComputerVision";
import ParaGraph from "./Section/02_Para/ParaGraph";
import ContinuousInnovation from "./Section/08_Innovation/ContinuousInnovation";

const SolutionAi = () => {
  return (
    <div>
      <ParaGraph />
      <PredictiveAnalytics />
      <CognitiveComputing />
      <NaturalLanguageProcessing />
      <ComputerVision />
      <ContinuousInnovation />
    </div>
  );
};

export default SolutionAi;
