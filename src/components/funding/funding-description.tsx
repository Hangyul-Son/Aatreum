import React from "react";
import { Typography, Progress, Button, Space } from "antd";
import "./funding-description.scss";

import FundingDescriptionList from "./funding-description-list";

function FundingDescription() {
  return (
    <div className="funding-description-container">
      <Space className="funding-description-upperhalf" direction="vertical">
        <Typography.Title level={4} className="funding-title">
          Project Description
        </Typography.Title>

        <FundingDescriptionList />

        <div>
          <Typography.Title level={3} className="funding-progress">
            74/100 NFT purchased
          </Typography.Title>
          <Progress
            percent={60}
            strokeWidth={3.5}
            showInfo={false}
            strokeColor="#1AA170"
            trailColor="#E8E8E8"
          />
          <Button type="primary" className="funding-button">
            Support this project
          </Button>
        </div>
      </Space>
    </div>
  );
}

export default FundingDescription;
