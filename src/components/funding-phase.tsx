import React from "react";
import { Typography, Progress, Button } from "antd";

function FundingPhase() {
  return (
    <div className="funding-phase-container">
      <Progress percent={10} strokeWidth={50} className="progress" />
    </div>
  );
}
export default FundingPhase;
