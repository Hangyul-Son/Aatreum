import React from "react";
import { Image, Progress, Typography } from "antd";

import "./landing-cover.scss";

function LandingCover() {
  return (
    <div className="landing-cover-container">
      <Image
        src="assets/images/jfla.png"
        preview={false}
        alt="J.Fla"
        width="100%"
        className="landing-cover"
      />
      <div className="cover-mask" />

      <div className="cover-text">
        <Typography.Title level={2} className="cover-title">
          Support J.Fla's Debut: "About"
          <br />
          Featured Singers
        </Typography.Title>

        <Typography.Paragraph className="cover-subtitle">
          Fund via NFT
        </Typography.Paragraph>

        <Progress
          percent={60}
          strokeWidth={2.5}
          showInfo={false}
          strokeColor="white"
          trailColor="rgba(255, 255, 255, 0.2)"
        />
      </div>
    </div>
  );
}

export default LandingCover;
