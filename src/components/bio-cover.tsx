import React, { useLayoutEffect, useState } from "react";
import { Button, Image, Typography } from "antd";

import "./bio-cover.scss";

function BioCover() {
  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTop(document.documentElement.scrollTop);
    });
  }, []);

  console.log(scrollTop);

  return (
    <div
      className="bio-cover-container"
      style={{
        opacity: 1 - scrollTop / 500,
        transform: "translate(0," + -scrollTop / 10 + "px)",
      }}
    >
      <Image
        src={`${window.location.origin}/assets/images/bgw.png`}
        preview={false}
        alt="Gunwoo Baek"
        className="bio-cover"
      />
      <div className="cover-mask" />

      <div className="bio-cover-text">
        <Typography.Title level={1} className="bio-cover-title">
          May I photograph your car?
        </Typography.Title>
        <Button size="large" className="bio-cover-button">
          Read this Story
        </Button>
      </div>
    </div>
  );
}

export default BioCover;
