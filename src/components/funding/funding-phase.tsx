import React from "react";
import { Typography, Progress, Button } from "antd";
import "./funding-phase.scss";
function FundingPhase() {
  return (
    <div className="funding-phase-container">
      <Progress
        percent={10}
        strokeWidth={50}
        strokeColor={"#74B72E"}
        className="progress"
      />
    </div>
  );
}
export default FundingPhase;
