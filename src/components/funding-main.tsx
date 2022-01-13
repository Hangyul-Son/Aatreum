import React from "react";
import { Col, Row } from "antd";
import "./funding-main.scss";

import FundingCover from "./funding-cover";
import FundingTitle from "./funding-title";
import FundingDescription from "./funding-description";

function FundingMain() {
  return (
    <Row className="funding-main">
      <Col span={24}>
        <FundingTitle />
      </Col>
      <Col span={15}>
        <FundingCover />
      </Col>
      <Col span={9}>
        <FundingDescription />
      </Col>
    </Row>
  );
}

export default FundingMain;
