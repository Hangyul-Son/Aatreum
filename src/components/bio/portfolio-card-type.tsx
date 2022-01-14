import React from "react";
import { Divider, Typography } from "antd";
import "./portfolio-card-type.scss";

type Properties = {
  author: string;
  type: string;
};

const { Text } = Typography;

function PortfolioCardTypes({ author, type }: Properties) {
  return (
    <div className="pf-card-types">
      <Text strong type="secondary">
        {author}
      </Text>
      <Divider type="vertical" />
      <Text strong>{type}</Text>
    </div>
  );
}

export default PortfolioCardTypes;
