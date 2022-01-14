import React from "react";
import { Typography } from "antd";
import "./funding-title.scss";

const { Title, Text } = Typography;

function FundingTitle() {
  return (
    <div className="funding-container">
      <Title level={2} className="cover-title">
        Gunwoo's 2nd Photo Album: "Summer"
      </Title>
      <Text className="funding-description">
        Vehicle can look entirely different each and every season. Capture every
        single moment of cars in memory.
      </Text>
    </div>
  );
}
export default FundingTitle;
