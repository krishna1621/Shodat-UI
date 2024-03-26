import React from "react";
import AboutBanner from "./Section/01_AboutBanner/AboutBanner";
import AboutInnovate from "./Section/02_AboutInnovate/AboutInnovate";
import AboutVision from "./Section/03_AboutVision/AboutVision";
import Leadership from "./Section/04_Leadership/Leadership";
import Countries from "./Section/05_Countries/Countries";

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutInnovate />
      <AboutVision />
      <Leadership />
      <Countries />
    </div>
  );
}

export default About;
