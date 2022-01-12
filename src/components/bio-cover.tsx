import { Button, Image, Typography } from "antd";
import React from "react";

import "./bio-cover.scss";

function BioCover() {
  return (
    <div className="bio-cover-container">
      <Image
        src="../assets/images/bgw.png"
        preview={false}
        alt="Gunwoo Baek"
        width="100%"
        className="bio-cover"
      />
      <div className="cover-mask" />

      <div className="bio-cover-text">
        <Typography.Title level={1} className="bio-cover-title">
          May I photograph your car?
        </Typography.Title>
        <Button className="bio-cover-button">Read this Story</Button>
      </div>
    </div>
  );
}

export default BioCover;
