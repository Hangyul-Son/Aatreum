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

    // <div className="short-intro-container">
    //   <div className="container-group">
    //     <div className="col-1">
    //       <Typography.Title level={2} className="col-1-text">
    //         I'm in <em>love</em> with cars
    //       </Typography.Title>
    //     </div>

    //     <div className="col-2">
    //       <Text strong>ABOUT GUNWOO BAEK</Text>
    //       <br />
    // <Text>
    //   He is an awesome amateur photographer He is an awesome amateur
    //   photographer He is an awesome amateur photographer
    // </Text>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BioShortIntro;
