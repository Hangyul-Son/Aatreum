import React from "react";
import { Row, Col, Image, Progress, Typography } from "antd";

import "./funding-cover.scss";

function FundingCover() {
  return (
    <div className="funding-cover-container">
      <Image
        src="../../assets/images/car2.jpeg"
        preview={false}
        alt="Car"
        width="100%"
        className="funding-cover"
      />
    </div>
  );
}

export default FundingCover;
