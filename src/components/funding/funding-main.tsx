import React from "react";
import { Col, Row } from "antd";
import "../funding/funding-main.scss";

import FundingDescriptionSpecific from "./funding-description-specific";
import FundingSidebio from "./funding-sidebio";
import FundingMainLanding from "./funding-main-landing";

function FundingMain() {
  return (
    <>
      <FundingMainLanding />

      <Row className="funding-main-lowerhalf">
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <FundingDescriptionSpecific />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <FundingSidebio />
        </Col>
      </Row>
    </>
  );
}

export default FundingMain;
