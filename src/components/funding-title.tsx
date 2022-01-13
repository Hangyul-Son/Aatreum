import React from "react";
import { Typography } from "antd";

import "./funding-title.scss";

function FundingTitle() {
  return (
    <div className="funding-container">
      <Typography.Title level={3} className="cover-title">
        Gunwoo's 2nd Photo Album: "Summer"
      </Typography.Title>
      <Typography.Paragraph strong className="funding-description">
        Your vehicle can look entirely different each and every season. Capture
        every single moement of your car in memory.
      </Typography.Paragraph>
    </div>
  );
}
export default FundingTitle;
