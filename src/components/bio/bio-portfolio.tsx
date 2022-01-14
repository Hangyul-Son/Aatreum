import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Image, Card, Typography } from "antd";
import "./bio-portfolio.scss";

import { RootState } from "../../contexts/store";
import PortfolioCardMeta from "./portfolio-card-meta";
import PortfolioSortBy from "./portfolio-sort-by";
import BioPortfolioMore from "./bio-portfolio-more";

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
      <Typography.Text className="pf-title">PREVIOUS PROJECTS</Typography.Text>

      <Row className="pf-row">
        <PortfolioSortBy />
        <BioPortfolioMore />

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
