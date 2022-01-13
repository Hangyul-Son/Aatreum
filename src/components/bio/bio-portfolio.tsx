import React from "react";
import { Col, Row, Image, Card, Typography, Space } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./bio-portfolio.scss";
import "./portfolio-sort-by.scss";

import PortfolioCardMeta from "./portfolio-card-meta";
import PortfolioSortBy from "./portfolio-sort-by";
import { useSelector } from "react-redux";
import { RootState } from "../../contexts/store";

// const carSource = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg"];

function BioPortfolio() {
  const previousProjects = useSelector(
    (state: RootState) => state.funding.previousProjects
  );

  return (
    <div className="pf-container">
      <Image
        src={window.location.origin + "/assets/images/pf-logo.png"}
        preview={false}
        className="pf-logo"
      />
      <br />
      <Typography.Text className="pf-title">Previous Projects</Typography.Text>

      <Row className="pf-row">
        <PortfolioSortBy />
        <Col xs={24} sm={12} className="pf-link">
          <Space size={"large"}>
            <Typography.Text>
              SEE FILMS
              <RightOutlined />
            </Typography.Text>
            <Typography.Text>
              SEE ALL STORIES
              <RightOutlined />
            </Typography.Text>
          </Space>
        </Col>

        {previousProjects.map((project, index) => (
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            key={project.id}
            className="pf-col"
          >
            <Card
              hoverable
              cover={
                <Image
                  src={window.location.origin + project.imgSrc}
                  style={{ height: "70%" }}
                  preview={false}
                />
              }
              style={{ height: "100%" }}
            >
              <PortfolioCardMeta
                author={project.author}
                type={project.category}
                title={project.title}
                date={project.date}
              >
                {project.description}
              </PortfolioCardMeta>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BioPortfolio;
