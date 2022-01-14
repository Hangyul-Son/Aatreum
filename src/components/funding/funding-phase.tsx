import React from "react";
import { Steps } from "antd";
import "./funding-phase.scss";

const { Step } = Steps;

function FundingPhase() {
  return (
    <div className="funding-phase-container">
      <Steps percent={40} current={1}>
        <Step title="Phase One" />
        <Step title="Phase Two" />
        <Step title="Phase Three" />
      </Steps>
    </div>
  );
}
export default FundingPhase;
