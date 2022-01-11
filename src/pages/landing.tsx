import React from "react";
import Template from "./template";
import "../styles/landing.scss";

import LandingCover from "../components/landing-cover";
import LandingMain from "../components/landing-main";

function Landing() {
  return (
    <Template pageName="landing">
      <LandingCover />
      <LandingMain />
    </Template>
  );
}

export default Landing;
