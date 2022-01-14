import React from "react";
import { Col, Row } from "antd";
import "./funding-main-landing.scss";

import FundingCover from "./funding-cover";
import FundingDescription from "./funding-description";
import FundingNotice from "./funding-notice";
import FundingPhase from "./funding-phase";
import FundingTitle from "./funding-title";

function FundingMainLanding() {
  return (
    <div className="funding-main-landing">
      <Row className="funding-main-upperhalf">
        <Col span={24}>
          <FundingTitle />
        </Col>

        <Col xs={24} sm={24} md={15} className="funding-cover-col">
          <FundingCover />
        </Col>

        <Col xs={24} sm={24} md={9} lg={9} xl={9}>
          <FundingDescription />
        </Col>
      </Row>

      <FundingPhase />
      <FundingNotice />
    </div>
  );
}

export default FundingMainLanding;
