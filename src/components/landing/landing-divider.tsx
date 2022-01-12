import React from "react";
import { Col, Divider } from "antd";
import "./landing-divider.scss";

type Properties = {
  colProps: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  dividerType: "horizontal" | "vertical";
};

function LandingDivider({ colProps, dividerType }: Properties) {
  return (
    <Col {...colProps} className="landing-divider-col">
      <Divider type={dividerType} className="landing-divider" />
    </Col>
  );
}

export default LandingDivider;
