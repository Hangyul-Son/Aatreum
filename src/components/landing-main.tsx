import React from "react";
import { Col, Divider, Grid, Row } from "antd";
import "./landing-main.scss";

import LandingFeatured from "./landing-featured";

function LandingMain() {
  const screens = Grid.useBreakpoint();

  return (
    <Row className="landing-main" align="middle">
      <Col xs={24} sm={24} md={24} lg={16} xl={16}>
        <LandingFeatured />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={1}
        xl={1}
        className="landing-divider-col"
      >
        <Divider
          type={screens.lg ? "vertical" : "horizontal"}
          className="landing-divider"
        />
      </Col>
    </Row>
  );
}

export default LandingMain;
