//The log in button need to add state,when not logged in
// display Log in.After logging in,Display User Center.
//The state of this button does not change when switching between pages.

import React from "react";
import { Layout, Menu, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { useEffect } from "react";

const { Header } = Layout;

function Navbar() {
  useEffect(() => {
    console.log("Navbar loaded!");
    //execute in the first time
  }, []);
  return (
    <Header className="ups-header">
      <div className="logo">UPS</div>

      <Menu mode="horizontal" className="ups-menu" items={[
        { label: "Shipping", key: "1" },
        { label: "Tracking", key: "2" },
        { label: "Products & Services", key: "3" },
        { label: "The UPS Store", key: "4" },
      ]}/>

      <div className="right-box">
        <SearchOutlined className="search-icon" />
        <Button shape="round" type="primary" className="login-btn">
          Log In
        </Button>
      </div>
    </Header>
  );
}

export default Navbar;
