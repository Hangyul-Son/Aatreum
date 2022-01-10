import React from "react";
import { Button, Image, Input, Menu } from "antd";
import "./top-navigation.scss";

const { Search } = Input;

function TopNavigation() {
  const menuItems = ["Featured Creators", "Donate", "Marketplace", "More"];

  return (
    <div className="top-navigation">
      <Image
        src="assets/images/aatreum-logo.png"
        preview={false}
        alt="Aatrium"
        className="logo"
      />
      <Menu mode="horizontal" className="navigation-menu">
        {menuItems.map((name, index) => (
          <Menu.Item key={index}>{name}</Menu.Item>
        ))}

        <Menu.Item key={menuItems.length} className="search-bar">
          <Search placeholder="Who are you looking for?" allowClear />
        </Menu.Item>

        <Menu.Item key={menuItems.length + 1}>Log In</Menu.Item>
        <Menu.Item key={menuItems.length + 2}>Sign Up</Menu.Item>
        <Menu.Item key={menuItems.length + 3}>
          <Button className="navigation-button">Be a Creator</Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default TopNavigation;
