import React from "react";
import { Typography, Progress, Button, Row, AutoComplete } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./funding-description.scss";

function FundingDescription() {
  return (
    <div className="funding-description-container">
      <Row className="funding-description-upperhalf" gutter={[0, 30]}>
        <Typography.Title level={4} className="funding-title">
          Project Description
        </Typography.Title>
        <Typography.Paragraph className="funding-reward-description">
          <CheckOutlined /> Final product will include full digital album of
          "Summer" packaged in a NFT
          <br />
          <CheckOutlined /> Signed physcial photo album of "Summer"
          <br />
          <CheckOutlined /> Exclusive nfts containing the progress of the
          project
          <br />
          <CheckOutlined /> Rights to continue the support of the project
          <br />
        </Typography.Paragraph>
        <Typography.Title level={4} className="funding-deadline">
          11 days left
        </Typography.Title>
        <Typography.Paragraph className="funding-deadline-description">
          Support ends on 26th of January
        </Typography.Paragraph>
        <Typography.Title level={4} className="funding-deadline">
          50 Angels
        </Typography.Title>
        <Typography.Paragraph className="funding-deadline-description">
          Supporting Baek Gun Woo's Project
        </Typography.Paragraph>
      </Row>
      <Row>
        <Typography.Title level={3} className="funding-progress">
          74/100 NFT supported
        </Typography.Title>
        <Progress
          percent={60}
          strokeWidth={3.5}
          showInfo={false}
          strokeColor="green"
          trailColor="#74B72E"
        />
        <Button
          type="primary"
          ghost={true}
          loading={true}
          className="funding-button"
          block={true}
        >
          SUPPORT
        </Button>
      </Row>
    </div>
  );
}

export default FundingDescription;
