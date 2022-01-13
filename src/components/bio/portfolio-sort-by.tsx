import React from "react";
import { Col, Dropdown, Menu, Space, Typography } from "antd";

function PortfolioSortBy() {
  return (
    <Col xs={24} sm={12} className="pf-sort">
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              >
                1st menu item
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
              >
                2nd menu item (disabled)
              </a>
            </Menu.Item>
            <Menu.Item disabled>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
              >
                3rd menu item (disabled)
              </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
          </Menu>
        }
        className="bio-sort-dropdown"
      >
        <Space size={70}>
          <Typography.Text>Sort By</Typography.Text>
          <Typography.Text>+</Typography.Text>
        </Space>
      </Dropdown>
    </Col>
  );
}

export default PortfolioSortBy;
