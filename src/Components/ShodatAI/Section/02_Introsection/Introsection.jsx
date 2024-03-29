import React, { forwardRef } from "react";

const IntroSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div style={{ maxWidth: "2000px" }}>
        <div className=" h-190 bg-[#1C1B1B] p-5 md:p-15 z-10">
          <p className="text-2xl md:text-4xl font-light font-Poppins text-white ml-5 md:ml-9 mt-4 md:mt-6 mb-4 md:mb-6 leading-10 md:leading-14">
            Shodat’s streamlined data and AI solutions pave the way for a
            frictionless future, allowing you to surpass these obstacles and
            succeed in your initiatives.
          </p>
        </div>
      </div>
    </div>
  );
});

export default IntroSection;
