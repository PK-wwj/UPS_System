import React from "react";
import { Layout, Menu, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./HomePage.css";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.js";

const { Content } = Layout;

function HomePage() {
  console.log("Navbar =", Navbar);
console.log("Layout =", Layout);
console.log("Content =", Content);
  useEffect(() => {
    console.log("HomePage loaded!");
    //execute in the first time
  }, []);
  console.log(Navbar, typeof Navbar);
  return (
    <Layout>
      {/* Navigation */}
      <Navbar/>

      {/* Track Section */}
      <Content className="track-section">
        <div className="track-box">
          <h2 className="track-title">Track</h2>

          <Input
            placeholder="Tracking Number or InfoNotice®"
            size="large"
            className="track-input"
          />

          <Button type="primary" shape="round" size="large" className="track-btn">
            Track
          </Button>

          <div className="help-link">
            Need help changing your delivery? <a href="#">Get Help</a>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default HomePage;
