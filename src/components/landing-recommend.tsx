import React from "react";
import { Col, Divider, Image, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import "./landing-recommend.scss";

import { RootState } from "../contexts/store";

function LandingRecommend() {
  const fundingProjects = useSelector(
    (state: RootState) => state.funding.fundingProjects
  );

  return (
    <div className="landing-recommend">
      <Typography.Title level={5} className="recommend-section">
        RECOMMENDED FOR YOU
      </Typography.Title>

      {fundingProjects.map((project, index) => (
        <>
          {index !== 0 ? <Divider /> : undefined}

          <Row key={project.id} className="recommend-container">
            <Col span={8}>
              <Image
                src={project.imageSrc}
                preview={false}
                className="recommend-image"
              />
            </Col>

            <Col span={16}>
              <div className="recommend-text">
                <Typography.Title level={5}>{project.title}</Typography.Title>
                <Typography.Text>{`${project.count} Footsteps approached`}</Typography.Text>
                <br />
                <Typography.Text>{`By ${project.author}`}</Typography.Text>
              </div>
            </Col>
          </Row>
        </>
      ))}
    </div>
  );
}

export default LandingRecommend;
