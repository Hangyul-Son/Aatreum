import React from "react";
import { Col, Row } from "antd";
import "../funding/funding-main.scss";

import FundingCover from "./funding-cover";
import FundingTitle from "./funding-title";
import FundingDescription from "./funding-description";
import FundingNotice from "./funding-notice";
import FundingDescriptionSpecific from "./funding-description-specific";
import FundingPhase from "./funding-phase";
import FundingSidebio from "./funding-sidebio";

function FundingMain() {
  return (
    <div className="funding-main-container">
      <Row className="funding-main-upperhalf">
        <Col span={24}>
          <FundingTitle />
        </Col>

        <Col xs={24} sm={24} md={15} lg={15} xl={15}>
          <FundingCover />
        </Col>

        <Col xs={24} sm={24} md={9} lg={9} xl={9}>
          <FundingDescription />
        </Col>
      </Row>

      <FundingPhase />
      <FundingNotice />

      <Row className="funding-main-lowerhalf">
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <FundingDescriptionSpecific />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <FundingSidebio />
        </Col>
      </Row>
    </div>
  );
}

export default FundingMain;
