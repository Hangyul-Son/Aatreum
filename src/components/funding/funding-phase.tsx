import React from "react";
import { Steps } from "antd";
import "./funding-phase.scss";

const { Step } = Steps;

function FundingPhase() {
  return (
    <div className="funding-phase-container">
      <Steps percent={40} current={1} responsive={false}>
        <Step title="Funding Published" />
        <Step title="Gathering Supporters" />
        <Step title="NFT Minted" />
      </Steps>
    </div>
  );
}
export default FundingPhase;
