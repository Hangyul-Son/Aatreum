import React from "react";
import Template from "./template";
import "../styles/funding.scss";

import FundingMain from "../components/funding-main";
import FundingPhoto from "../components/funding-photo";

function Funding() {
  return (
    <Template pageName="funding">
      <FundingMain />
      <FundingPhoto />
    </Template>
  );
}

export default Funding;
