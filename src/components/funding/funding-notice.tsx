import React from "react";
import { Row, Col, Typography } from "antd";
import "./funding-notice.scss";

function FundingNotice() {
  return (
    <Row className="funding-notice-container">
      <Col span={8} className="notice-col">
        <Typography.Paragraph className="funding-notice-text">
          Instant NFT reward by Aatreum, a certificate that verifies your
          support
        </Typography.Paragraph>
      </Col>
      <Col span={8} className="notice-col">
        <Typography.Paragraph className="funding-notice-text">
          The project can have 3 or 5 different phases depending on its scale.
          Each phase of support provides you with a NFT that contains the
          progress of the project.
        </Typography.Paragraph>
      </Col>
      <Col span={8} className="notice-col">
        {/* <AlertOutlined className="/> */}
        <Typography.Paragraph className="funding-notice-text">
          You can buy or sell your previous NFTs to other users on our
          marketplace. Be aware! Without owning the previous phase NFTs, you can
          not support the project!
        </Typography.Paragraph>
      </Col>
    </Row>
  );
}

export default FundingNotice;
