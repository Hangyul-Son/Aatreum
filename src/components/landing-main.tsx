import React from "react";
import { Col, Grid, Row } from "antd";
import "./landing-main.scss";

import LandingFeatured from "./landing-featured";
import LandingDivider from "./landing-divider";
import LandingRecommend from "./landing-recommend";

const { useBreakpoint } = Grid;

function LandingMain() {
  const screens = useBreakpoint();

  return (
    <Row align="middle" className="landing-main">
      <Col xs={24} sm={24} md={24} lg={13} xl={13}>
        <LandingFeatured />
      </Col>
      <LandingDivider
        colProps={{ xs: 24, sm: 24, md: 24, lg: 1, xl: 1 }}
        dividerType={screens.lg ? "vertical" : "horizontal"}
      />
      <Col xs={24} sm={24} md={24} lg={10} xl={10} className="recommend-col">
        <LandingRecommend />
      </Col>
    </Row>
  );
}

export default LandingMain;
