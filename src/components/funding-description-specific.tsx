import React from "react";
import { Typography, Image } from "antd";

function FundingDescriptionSpecific() {
  return (
    <div className="funding-description-specific">
      <Typography.Title level={3} className="cover-title">
        Story
      </Typography.Title>
      <Image
        src="../../assets/images/carmagazine.jpeg"
        preview={false}
        alt="CarMagazine"
        width="100%"
        className="magazine"
      ></Image>
    </div>
  );
}

export default FundingDescriptionSpecific;
