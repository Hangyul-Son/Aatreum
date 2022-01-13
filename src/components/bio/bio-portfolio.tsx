import React from "react";
import { Col, Row, Image, Card } from "antd";
import "./bio-portfolio.scss";

const carSource = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg"];

function BioPortfolio() {
  return (
    <div className="pf-container">
      <Row className="pf-row">
        {carSource.map((imageSource, index) => (
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="pf-col">
            <Card
              hoverable
              style={{ height: "100%" }}
              cover={
                <Image
                  style={{ height: "70%" }}
                  preview={false}
                  src={window.location.origin + "/assets/images/" + imageSource}
                />
              }
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BioPortfolio;
