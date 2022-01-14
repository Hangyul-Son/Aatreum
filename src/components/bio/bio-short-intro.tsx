import { Col, Row, Space, Typography } from "antd";
import React from "react";

import "./bio-short-intro.scss";

const { Text } = Typography;

function BioShortIntro() {
  return (
    <Row align="middle" className="short-intro-container">
      <Col xs={24} sm={12} className="short-intro-title">
        <Typography.Title level={1}>
          I'm in <em>love</em> with cars
        </Typography.Title>
      </Col>

      <Col xs={24} sm={12} className="short-intro-paragraph">
        <Space direction="vertical" className="short-intro-paragraph-space">
          <Text strong>ABOUT GUNWOO BAEK</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
            augue condimentum, porttitor ex ut.
          </Text>
        </Space>
      </Col>
    </Row>
  );
}

export default BioShortIntro;
