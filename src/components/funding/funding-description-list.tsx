import React from "react";
import { Typography, Space } from "antd";
import "./funding-description-list.scss";

import FundingDescriptionListItem from "./funding-description-list-item";

function FundingDescriptionList() {
  return (
    <Space direction="vertical">
      <FundingDescriptionListItem>
        Final product will include full digital album of "Summer" packaged in a
        NFT
      </FundingDescriptionListItem>
      <FundingDescriptionListItem>
        Signed physcial photo album of "Summer"
      </FundingDescriptionListItem>
      <FundingDescriptionListItem>
        Exclusive nfts containing the progress of the project
      </FundingDescriptionListItem>
      <FundingDescriptionListItem>
        Rights to continue the support of the project
      </FundingDescriptionListItem>

      <div className="funding-supporter-container">
        <Typography.Title level={4} className="funding-supporter">
          50
        </Typography.Title>

        <Typography.Paragraph className="funding-supporter-description">
          backers supporting
        </Typography.Paragraph>
      </div>

      <div className="funding-deadline-container">
        <Typography.Title level={4} className="funding-deadline">
          11
        </Typography.Title>

        <Typography.Paragraph className="funding-deadline-description">
          days to go
        </Typography.Paragraph>
      </div>
    </Space>
  );
}

export default FundingDescriptionList;
