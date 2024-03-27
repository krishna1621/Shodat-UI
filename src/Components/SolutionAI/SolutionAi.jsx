import React from "react";
import PredictiveAnalytics from "./Section/03_AdvancedPredictive/PredictiveAnalytics";
import CognitiveComputing from "./Section/04_CognitiveComputing/CognitiveComputing";
import NaturalLanguageProcessing from "./Section/05_NaturalLanguageProcessing/05_NaturalLanguageProcessing";
import ComputerVision from "./Section/06_ComputerVision/ComputerVision";
import ParaGraph from "./Section/02_Para/ParaGraph";
import ContinuousInnovation from "./Section/08_Innovation/ContinuousInnovation";
import SolutionBanner from "./Section/01_SolutionBanner/SolutionBanner";
import EmergingTechnologies from "./Section/07_EmergingTechnologies/EmergingTechnologies";
import InnovationAction from "./Section/09_InnovationAction/InnovationAction";
import SuccessStories from "./Section/10_SuccessStories/SuccessStories";
import InnovationJourney from "./Section/11_InnovationJourney/InnovationJourney";

const SolutionAi = () => {
  return (
    <div className="flex justify-center items-center w-auto">
      <div className="container ">
        <SolutionBanner />
        <ParaGraph />
        <PredictiveAnalytics />
        <CognitiveComputing />
        <NaturalLanguageProcessing />
        <ComputerVision />
        <EmergingTechnologies />
        <ContinuousInnovation />
        <InnovationAction />
        <SuccessStories />
        <InnovationJourney />
      </div>
    </div>
  );
};

export default SolutionAi;
