import React from "react";
import { Col, Row, Image, Card, Typography, Space } from "antd";
import "./bio-portfolio.scss";

import PortfolioCardMeta from "./portfolio-card-meta";
import PortfolioSortBy from "./portfolio-sort-by";

const carSource = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg"];

function BioPortfolio() {
  return (
    <div className="pf-container">
      <Image
        src={window.location.origin + "/assets/images/pf-logo.png"}
        preview={false}
        className="pf-logo"
      />
      <Typography.Title level={4} className="pf-title">
        THE STORIES
      </Typography.Title>

      <Row className="pf-row">
        <PortfolioSortBy />
        <Col xs={24} sm={12} className="pf-link">
          <Space>
            <Typography.Text>SEE FILMS</Typography.Text>
            <Typography.Text>SEE ALL STORIES</Typography.Text>
          </Space>
        </Col>

        {carSource.map((imageSource, index) => (
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="pf-col">
            <Card
              hoverable
              cover={
                <Image
                  style={{ height: "70%" }}
                  preview={false}
                  src={window.location.origin + "/assets/images/" + imageSource}
                />
              }
            >
              <PortfolioCardMeta
                author="SHANTELL MARTIN"
                type="ART"
                title="Well, ARE YOU?"
                date={new Date().toDateString()}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur volutpat enim ut tellus consectetur, in.
              </PortfolioCardMeta>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BioPortfolio;
