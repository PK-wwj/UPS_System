import React, { useState } from "react";
import { Tabs, Card, Input, Button, Table, Form, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./Dashboard.css";

function Dashboard() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [packages, setPackages] = useState([
    { id: "1Z001", status: "In Transit", location: "Newark, NJ" },
    { id: "1Z002", status: "Delivered", location: "Jersey City, NJ" }
  ]);

  const [profile, setProfile] = useState({
    name: "pkwwj",
    phone: "123-456-7890",
    email: "pkwwj@example.com",
    password: "********"
  });

  const [wallet, setWallet] = useState([
    { type: "Visa", number: "**** 3491" },
    { type: "MasterCard", number: "**** 9988" }
  ]);

  const [addresses, setAddresses] = useState([
    { label: "Home Address", detail: "123 Main St, Newark, NJ" },
    { label: "Workplace", detail: "750 Broad St, Newark, NJ" }
  ]);

  const packageColumns = [
    {
      title: "Tracking Number",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location"
    }
  ];

  return (
    <div className="dashboard-container">
    <h1 className="page-title">Welcome,Wenjie Wang</h1>
      <Tabs defaultActiveKey="1" centered>
        
        {/* OVERVIEW */}
        <Tabs.TabPane tab="Overview" key="1">
          <Card className="track-card">
            <Input
              placeholder="Track a Package"
              size="large"
              prefix={<SearchOutlined />}
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <Button type="primary" size="large" className="track-btn">
              Track
            </Button>
          </Card>

          <Card title="My Shipments" className="shipments-card">
            <Table dataSource={packages} columns={packageColumns} rowKey="id" />
          </Card>
        </Tabs.TabPane>

        {/* PROFILE */}
        <Tabs.TabPane tab="Profile" key="2">
          <Card title="Basic Information" className="profile-card">
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input value={profile.name} />
              </Form.Item>
              <Form.Item label="Phone">
                <Input value={profile.phone} />
              </Form.Item>
              <Form.Item label="Email">
                <Input value={profile.email} />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password value={profile.password} />
              </Form.Item>

              <Button type="primary">Save</Button>
            </Form>
          </Card>
        </Tabs.TabPane>

        {/* WALLET */}
        <Tabs.TabPane tab="Wallet" key="3">
          <Card title="Payment Methods">
            <List
              dataSource={wallet}
              renderItem={(item) => (
                <List.Item>
                  {item.type} - {item.number}
                </List.Item>
              )}
            />

            <Button type="primary" style={{ marginTop: "12px" }}>
              Add Payment Method
            </Button>
          </Card>
        </Tabs.TabPane>

        {/* ADDRESSES */}
        <Tabs.TabPane tab="Addresses" key="4">
          <Card title="Saved Addresses">
            <List
              dataSource={addresses}
              renderItem={(item) => (
                <List.Item>
                  <strong>{item.label}</strong> — {item.detail}
                </List.Item>
              )}
            />

            <Button type="primary" style={{ marginTop: "12px" }}>
              Add New Address
            </Button>
          </Card>
        </Tabs.TabPane>

      </Tabs>
    </div>
  );
}

export default Dashboard;
