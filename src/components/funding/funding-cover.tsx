import React from "react";
import { Image } from "antd";
import "./funding-cover.scss";

function FundingCover() {
  return (
    <Image
      src={window.location.origin + "/assets/images/car2.jpeg"}
      preview={false}
      alt="Car"
      className="funding-cover"
    />
  );
}

export default FundingCover;
