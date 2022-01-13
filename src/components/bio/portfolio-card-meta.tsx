import React, { ReactNode } from "react";
import { Image, Typography } from "antd";
import "./portfolio-card-meta.scss";

import PortfolioCardTypes from "./portfolio-card-type";

type Properties = {
  author: string;
  type: string;
  title: string;
  date: string;
  children: ReactNode;
};

function PortfolioCardMeta({
  author,
  type,
  title,
  date,
  children,
}: Properties) {
  return (
    <div className="pf-card-meta-container">
      <Image
        src={window.location.origin + "/assets/images/progress.jpg"}
        preview={false}
      />
      <PortfolioCardTypes author={author} type={type} />
      <Typography.Title>{title}</Typography.Title>
      <Typography.Text>
        {children}
        <br />
        {date}
      </Typography.Text>
    </div>
  );
}

export default PortfolioCardMeta;
