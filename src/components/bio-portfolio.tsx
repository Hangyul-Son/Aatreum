import React from "react";
import { Col, Row, Image, Card } from "antd";

import "./bio-portfolio.scss";

const carSource = ["car1.png", "car2.png", "car3.png", "car4.png"];

function BioPortfolio() {
  return (
    <div className="pf-container">
      <Row className="pf-row">
        {carSource.map((imageSource, index) => (
          <Col span={12}>
            <Card
              hoverable
              style={{ height: "500px" }}
              cover={
                <Image
                  style={{ height: "300px" }}
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
