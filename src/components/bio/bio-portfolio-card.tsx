import React from "react";
import { Card, Col, Image, Space, Typography } from "antd";
import "./bio-portfolio-card.scss";

import { Project } from "../../contexts/funding-slice";
import PortfolioCardMeta from "./portfolio-card-meta";

type Properties = {
  project: Project;
};

const { Text } = Typography;

function BioPortfolioCard({ project }: Properties) {
  return (
    <Col
      xs={24}
      sm={24}
      md={24}
      lg={12}
      xl={12}
      key={project.id}
      className="pf-card-col"
    >
      <Card
        hoverable
        cover={
          <Image
            src={window.location.origin + project.imgSrc}
            preview={{
              mask: (
                <Space direction="vertical">
                  <Text className="pf-card-mask-text">READ STORY</Text>
                  <Image
                    src={`${window.location.origin}/assets/images/arrow-green.png`}
                    preview={false}
                    className="pf-card-mask-arrow"
                  />
                </Space>
              ),
              maskClassName: "pf-card-mask",
            }}
            className="pf-card-img"
          />
        }
        className="pf-card"
      >
        <PortfolioCardMeta
          author={project.author}
          type={project.category}
          title={project.title}
          date={project.date}
          minted={project.id % 2 === 1}
        >
          {project.description}
        </PortfolioCardMeta>
      </Card>
    </Col>
  );
}

export default BioPortfolioCard;
