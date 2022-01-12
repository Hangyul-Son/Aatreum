import { Typography } from "antd";
import React from "react";

import "./bio-short-intro.scss";

const { Text } = Typography;

function BioShortIntro() {
  return (
    <aside className="short-intro-container">
      <div className="container-group">
        <div className="col-1">
          <Typography.Title level={2} className="col-1-text">
            I'm in <em>love</em> with cars
          </Typography.Title>
        </div>

        <div className="col-2">
          <Text strong>ABOUT GUNWOO BAEK</Text>
          <br />
          <Text>
            He is an awesome amateur photographer He is an awesome amateur
            photographer He is an awesome amateur photographer
          </Text>
        </div>
      </div>
    </aside>
  );
}

export default BioShortIntro;
