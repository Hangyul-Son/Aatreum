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
      <br />
      <div className="meta-title-container">
        <Typography.Title level={3} className="meta-title">
          {title}
        </Typography.Title>
      </div>
      <br />
      <Typography.Text className="meta-children">
        {children}
        <br />
      </Typography.Text>
      <div className="meta-date">
        <Typography.Text italic>{date}</Typography.Text>
      </div>
    </div>
  );
}

export default PortfolioCardMeta;
