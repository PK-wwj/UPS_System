// src/pages/EmployeeDashboard.jsx
import React, { useState } from "react";
import { Table, Tag, Drawer } from "antd";
import "./EmployeeDashboard.css";   // 这里引入你的 css 文件

const mockData = [
  {
    id: "PKG001",
    recipient: "Alice Chen",
    site: "NJ-001",
    status: "In Transit",
    updated: "2025-12-02 10:20",
    weight: "3.2kg",
    address: "23 Hudson St, Jersey City, NJ"
  },
  {
    id: "PKG002",
    recipient: "Michael Li",
    site: "NJ-001",
    status: "Arrived",
    updated: "2025-12-02 09:00",
    weight: "1.1kg",
    address: "88 River Rd, Edgewater, NJ"
  }
];

export default function EmployeeDashboard() {
  const [selected, setSelected] = useState(null);

  const columns = [
    { title: "包裹编号", dataIndex: "id", key: "id" },
    { title: "收件人", dataIndex: "recipient", key: "recipient" },
    { title: "站点", dataIndex: "site", key: "site" },
    {
      title: "状态",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Arrived" ? "green" : "blue"}>{status}</Tag>
      )
    },
    { title: "最后更新时间", dataIndex: "updated", key: "updated" }
  ];

  return (
    <div className="employee-dashboard">
      <header className="employee-header">
        <h1 className="employee-title">员工包裹界面</h1>
        <p className="employee-subtitle">当前站点: NJ-001 · 包裹总数: {mockData.length}</p>
      </header>

      <section className="employee-content">
        <Table
          className="employee-table"
          dataSource={mockData}
          columns={columns}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => setSelected(record)
          })}
        />
      </section>

      <Drawer
        title="包裹详情"
        open={!!selected}
        onClose={() => setSelected(null)}
        width={400}
      >
        {selected && (
          <div className="employee-detail">
            <p><span className="detail-label">包裹编号:</span> {selected.id}</p>
            <p><span className="detail-label">收件人:</span> {selected.recipient}</p>
            <p><span className="detail-label">站点:</span> {selected.site}</p>
            <p><span className="detail-label">状态:</span> {selected.status}</p>
            <p><span className="detail-label">重量:</span> {selected.weight}</p>
            <p><span className="detail-label">地址:</span> {selected.address}</p>
            <p><span className="detail-label">更新时间:</span> {selected.updated}</p>
          </div>
        )}
      </Drawer>
    </div>
  );
}

