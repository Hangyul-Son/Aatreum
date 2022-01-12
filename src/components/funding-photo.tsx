import React from "react";
import { Col, Divider, Image, Row } from "antd";

function FundingPhoto() {
  return (
    <div className="funding-photo-container">
      <Image
        src="assets/images/car.jpg"
        className="funding-photo"
        preview={false}
      />
    </div>
  );
}

export default FundingPhoto;
