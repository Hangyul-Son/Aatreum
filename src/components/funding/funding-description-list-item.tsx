import React from "react";
import { Space } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./funding-description-list-item.scss";

type Properties = {
  children: React.ReactNode;
};

function FundingDescriptionListItem({ children }: Properties) {
  return (
    <Space className="description-item">
      <CheckOutlined />
      {children}
    </Space>
  );
}

export default FundingDescriptionListItem;
