import React from "react";
import { Divider, Typography } from "antd";

type Properties = {
  author: string;
  type: string;
};

function PortfolioCardTypes({ author, type }: Properties) {
  return (
    <>
      <Typography.Text type="secondary">{author}</Typography.Text>
      <Divider type="vertical" />
      <Typography.Text>{type}</Typography.Text>
    </>
  );
}

export default PortfolioCardTypes;
