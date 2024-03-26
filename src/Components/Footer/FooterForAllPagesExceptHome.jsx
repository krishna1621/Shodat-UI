import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import FooterForAll from "./FooterForAll";

const FooterForAllPagesExceptHome = () => {
  return (
    <div>
      <Footer1 />
      <FooterForAll />
      <Footer2 />
    </div>
  );
};

export default FooterForAllPagesExceptHome;
