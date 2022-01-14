import React from "react";
import { Col, Row, Tabs } from "antd";
import "../funding/funding-main.scss";

import FundingDescriptionSpecific from "./funding-description-specific";
import FundingSidebio from "./funding-sidebio";
import FundingMainLanding from "./funding-main-landing";

const { TabPane } = Tabs;

function FundingMain() {
  return (
    <>
      <FundingMainLanding />

      <Tabs className="funding-main-tabs">
        <TabPane tab="Campaign" key="1">
          <Row>
            <Col xs={24} sm={24} md={16} className="funding-main-specific-col">
              <FundingDescriptionSpecific />
            </Col>
            <Col xs={24} sm={24} md={8} className="funding-main-side-col">
              <FundingSidebio />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="FAQ" key="2" />
        <TabPane tab="Updates" key="3" />
      </Tabs>
    </>
  );
}

export default FundingMain;
