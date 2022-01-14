import React from "react";
import { Typography, Progress, Button, Steps } from "antd";
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
      {/* <Progress
        percent={10}
        strokeWidth={50}
        strokeColor={"#74B72E"}
        className="progress"
      /> */}
    </div>
  );
}
export default FundingPhase;
