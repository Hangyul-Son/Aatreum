import React from "react";
import { Col, Dropdown, Menu, Space, Typography } from "antd";
import "./portfolio-sort-by.scss";

function PortfolioSortBy() {
  return (
    <Col xs={24} sm={12} className="bio-sort">
      <Dropdown
        overlayClassName="bio-sort-overlay"
        overlay={
          <Menu>
            <Menu.Item>
              <Typography.Text strong>Porsche</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text strong>Tesla</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text strong>Mazda</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text strong>Jaguar</Typography.Text>
            </Menu.Item>
            <Menu.Item>
              <Typography.Text strong>Mitsubishi</Typography.Text>
            </Menu.Item>
          </Menu>
        }
        className="bio-sort-dropdown"
      >
        <Space size={90}>
          <Typography.Text strong>SORT BY</Typography.Text>
          <Typography.Text strong>+</Typography.Text>
        </Space>
      </Dropdown>
    </Col>
  );
}

export default PortfolioSortBy;
