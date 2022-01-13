import { Col, Row, Space, Typography } from "antd";
import React from "react";

import "./bio-short-intro.scss";

const { Text } = Typography;

function BioShortIntro() {
  return (
    <Row align="middle" className="short-intro-container">
      <Col xs={24} sm={12} className="short-intro-title">
        <Text>
          I'm in <em>love</em> with cars
        </Text>
      </Col>

      <Col xs={24} sm={12} className="short-intro-paragraph">
        <Space direction="vertical" className="short-intro-paragraph-space">
          <Text strong>ABOUT GUNWOO BAEK</Text>
          <Text>
            He is an awesome amateur photographer He is an awesome amateur
            photographer He is an awesome amateur photographer
          </Text>
        </Space>
      </Col>
    </Row>
  );
}

export default BioShortIntro;
