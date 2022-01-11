import React from "react";
import { Col, Grid, Row } from "antd";

import LandingFeatured from "./landing-featured";
import LandingDivider from "./landing-divider";

const { useBreakpoint } = Grid;

function LandingMain() {
  const screens = useBreakpoint();

  return (
    <Row className="landing-main" align="middle">
      <Col xs={24} sm={24} md={24} lg={16} xl={16}>
        <LandingFeatured />
      </Col>
      <LandingDivider
        colProps={{ xs: 24, sm: 24, md: 24, lg: 1, xl: 1 }}
        dividerType={screens.lg ? "vertical" : "horizontal"}
      />
      <Col xs={24} sm={24} md={24} lg={7} xl={7}></Col>
    </Row>
  );
}

export default LandingMain;
