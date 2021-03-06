import React, { ReactNode } from "react";
import { Image, Typography } from "antd";
import "./portfolio-card-meta.scss";

import PortfolioCardTypes from "./portfolio-card-type";

type Properties = {
  author: string;
  type: string;
  title: string;
  minted: boolean;
  date: string;
  children: ReactNode;
};

function PortfolioCardMeta({
  author,
  type,
  title,
  date,
  minted,
  children,
}: Properties) {
  return (
    <div className="pf-card-meta-container">
      <Image
        src={
          window.location.origin +
          "/assets/images/" +
          (minted ? "minted.png" : "progress.jpg")
        }
        className={minted ? "pf-card-minted" : "pf-card-progress"}
        preview={false}
      />
      <PortfolioCardTypes author={author} type={type} />
      <div className="meta-title-container">
        <Typography.Title level={3} className="meta-title">
          {title}
        </Typography.Title>
      </div>
      <br />
      <Typography.Text strong className="meta-children">
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
