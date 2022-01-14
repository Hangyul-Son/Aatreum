import React from "react";
import { Col, Space, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./bio-portfolio-more.scss";

const { Text } = Typography;

function BioPortfolioMore() {
  return (
    <Col xs={24} sm={12} className="bio-more">
      <Space size={"large"}>
        <Text strong>
          SEE FILMS
          <RightOutlined />
        </Text>
        <Text strong>
          SEE ALL STORIES
          <RightOutlined />
        </Text>
      </Space>
    </Col>
  );
}

export default BioPortfolioMore;
