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
          {index !== 0 ? <Divider className="recommend-divider" /> : undefined}

          <Row key={project.id} gutter={15} className="recommend-container">
            <Col span={8}>
              <Image
                src={project.imageSrc}
                preview={false}
                className="recommend-image"
              />
            </Col>

            <Col span={16}>
              <div className="recommend-text">
                <Typography.Title level={5} className="recommend-title">
                  {project.title}
                </Typography.Title>
                <Typography.Paragraph
                  strong
                  className="recommend-count"
                >{`${project.count} Footsteps approached`}</Typography.Paragraph>
                <Typography.Paragraph
                  type="secondary"
                  strong
                >{`By ${project.author}`}</Typography.Paragraph>
              </div>
            </Col>
          </Row>
        </>
      ))}
    </div>
  );
}

export default LandingRecommend;
