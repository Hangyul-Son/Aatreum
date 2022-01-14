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
        <div className="project-image-description">
          <Row className="project-image-description-row">
            <Col span={15}>
              <FundingCover />
            </Col>
            <Col span={9}>
              <FundingDescription />
            </Col>
          </Row>
        </div>
      </Row>
      <FundingPhase />
      <FundingNotice />
      <Row className="funding-main-lowerhalf">
        <Col span={14}>
          <FundingDescriptionSpecific />
        </Col>
        <Col span={10}>
          <FundingSidebio />
        </Col>
      </Row>
    </div>
  );
}

export default FundingMain;
