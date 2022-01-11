import React from "react";
import Template from "./template";
import "../styles/funding.scss";

import FundingMain from "../components/funding-main";

function Funding() {
  return (
    <Template pageName="funding">
      <FundingMain />
    </Template>
  );
}

export default Funding;
