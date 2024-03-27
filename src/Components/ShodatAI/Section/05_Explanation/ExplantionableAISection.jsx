import React from "react";
import img2 from "../../../../Assets/Components/ShodaAIPage/ExplainableAI.png";
import img1 from "../../../../Assets/Components/ShodaAIPage/AIEthics.png";

const ExplainableAISection = () => {
  return (
    <div>
      <div
        className="left-0 w-full  z-20 mt-20 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        style={{
          "@media (min-width: 768px)": {
            marginTop: "600px",
          },
        }}
      >
        <div className="text-lg md:text-xl lg:text-2xl font-normal font-Poppins text-black ml-5 md:ml-9 mt-4  mb-4 md:mb-9 leading-9 md:leading-14">
          <img src={img2}></img>
          <h1 class="font-semibold text-4xl leading-10 text-black">
            Explainable AI (XAI)
          </h1>

          <p class="font-normal text-base leading-6 text-gray-600 align-bottom mt-4">
            Uncover the reasoning behind AI decisions with Explainable AI,
            providing transparency and building trust in machine-driven choices.
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 align-bottom mt-4">
            We at Shodat, focus on developing AI systems that can provide clear
            and understandable explanations for their decisions.
          </p>
        </div>
        <div className="text-lg md:text-xl lg:text-2xl font-normal font-Poppins text-black ml-5 md:ml-9 mt-4 md:mt-8 mb-4 md:mb-9 leading-9 md:leading-14">
          <img src={img1}></img>
          <h1 class="font-semibold text-4xl leading-10 text-black">
            AI Ethics and Bias Mitigation
          </h1>

          <p class="font-normal text-base leading-6 text-gray-600 align-bottom mt-4">
            At Shodat we pioneer responsible AI practices with a focus on ethics
            and bias mitigation, ensuring fairness and accountability in every
            algorithm.
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 align-bottom mt-4">
            Addressing ethical considerations and biases in AI algorithms to
            ensure fairness and responsible use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplainableAISection;
