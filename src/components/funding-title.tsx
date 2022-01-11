import React from "react";
import { Typography } from "antd";

import "./funding-title.scss";

function FundingTitle() {
    return (
        <div className="funding-container">
            <Typography.Title level={5} className="cover-title">
                Gunwoo's 2nd Photo Album: "Summer"
            </Typography.Title>
        </div>
    );
}
export default FundingTitle;