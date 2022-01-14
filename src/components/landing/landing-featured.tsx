import React from "react";
import { Image, Typography } from "antd";

import "./landing-featured.scss";

function LandingFeatured() {
  return (
    <div className="landing-featured">
      <Typography.Title level={5} className="featured-section">
        FEATURED PROJECT
      </Typography.Title>

      <Image
        src="assets/images/bgw.png"
        preview={false}
        alt="Baek Gunwoo"
        className="featured-image"
      />
      <div className="featured-image-border" />

      <Typography.Title level={3} className="featured-title">
        Support Gunwoo Baek's 1st Photo Album: "Summer"
      </Typography.Title>

      <Typography.Paragraph strong className="featured-description">
        A photograph album consisting of collection of visual "memories" from
        2021.
      </Typography.Paragraph>

      <Typography.Text type="secondary" strong className="featured-author">
        By Gunwoo Baek
      </Typography.Text>
    </div>
  );
}

export default LandingFeatured;
