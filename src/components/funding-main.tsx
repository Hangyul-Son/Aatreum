import React from "react";
import { Col, Row } from "antd";
import "./funding-main.scss";

import FundingTitle from "./funding-title";

function FundingMain() {
    return (
        <Row align="middle" className="funding-main">
            <Col xs={24} sm={24} md={24} lg={13} xl={13}>
                <FundingTitle />
            </Col>
        </Row>
    );
}

export default FundingMain;
