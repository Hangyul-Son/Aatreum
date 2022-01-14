import React from "react";
import { useSelector } from "react-redux";
import { Image, Row, Col, Card, Button, Typography } from "antd";
import PortfolioCardMeta from "../bio/portfolio-card-meta";
import { RootState } from "../../contexts/store";
import "./funding-sidebio.scss";
import { BugTwoTone } from "@ant-design/icons";

function FundingSidebio() {
  const previousProjects = useSelector(
    (state: RootState) => state.funding.previousProjects
  );

  return (
    <div className="funding-sidebio-container">
      <Row className="sidebio-description">
        <Button
          type="primary"
          className="sidebio-button"
          block
          style={{
            whiteSpace: "normal",
            height: "auto",
            marginBottom: "20px",
          }}
        >
          <Image src="../../assets/images/bgw.png" className="sidebio-image" />
          <Typography.Text className="sidebio-description-text">
            ABOUT GUNWOO BAEK <br />
            He is a photographer who is very devoted in mobile vehicles. An
            amazing synergy between his two interest have made him a great
            photographer, the only one in his field.
          </Typography.Text>
        </Button>
      </Row>
      <Typography.Title level={4} className="sidebio-previous-projects">
        Other Projects
      </Typography.Title>
      <Row className="sidebio-projects">
        {previousProjects.map((project, index) => (
          <Col key={project.id} className="pf-col">
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

export default FundingSidebio;
