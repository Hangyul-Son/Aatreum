import React from "react";
import { Col, Row } from "antd";
import "./funding-main.scss";

import FundingCover from "./funding-cover";
import FundingTitle from "./funding-title";
import FundingDescription from "./funding-description";
import FundingNotice from "./funding-notice";
import FundingDescriptionSpecific from "./funding-description-specific";

function FundingMain() {
  return (
    <div className="funding-main-container">
      <Row className="funding-main-upperhalf">
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
      <FundingNotice />
			<Row className="funding-main-lowerhalf">
				<Col span={14}>
					<FundingDescriptionSpecific />
			</Row>
    </div>
  );
}

export default FundingMain;
