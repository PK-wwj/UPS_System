import React from "react";
import { Form, Input, InputNumber, Select, Button, Card } from "antd";
import "./CreateShipmentPage.css";

const { Option } = Select;

export default function CreateShipmentPage() {

  const onFinish = (values) => {
    console.log("Submitted shipment data:", values);
  };

  return (
    <div className="ups-container">
      <Card title="Create a Shipment" className="ups-card">
        <Form layout="vertical" onFinish={onFinish}>

          {/* Package Info */}
          <h3 className="section-title">Package Information</h3>
          <div className="grid-4">
            <Form.Item name="weight" label="Weight (kg)" rules={[{ required: true }]}>
              <InputNumber step={0.001} min={0} className="full-width" />
            </Form.Item>

            <Form.Item name="length" label="Length (cm)" rules={[{ required: true }]}>
              <InputNumber step={0.01} min={0} className="full-width" />
            </Form.Item>

            <Form.Item name="width" label="Width (cm)" rules={[{ required: true }]}>
              <InputNumber step={0.01} min={0} className="full-width" />
            </Form.Item>

            <Form.Item name="height" label="Height (cm)" rules={[{ required: true }]}>
              <InputNumber step={0.01} min={0} className="full-width" />
            </Form.Item>

            <Form.Item name="type" label="Package Type" rules={[{ required: true }]}>
              <Select>
                <Option value={1}>Standard</Option>
                <Option value={2}>Fragile</Option>
                <Option value={3}>Document</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Sender Address */}
          <h3 className="section-title">Sender Address</h3>
          <div className="grid-3">
            <Form.Item name={["sender", "label"]} label="Label" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["sender", "line1"]} label="Street" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["sender", "city"]} label="City" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["sender", "state"]} label="State" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["sender", "postalcode"]} label="Postal Code" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["sender", "country"]} label="Country" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </div>

          {/* Receiver Address */}
          <h3 className="section-title">Receiver Information</h3>
          <div className="grid-3">

            <Form.Item name={["receiver", "companyname"]} label="Company Name">
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "contactname"]} label="Contact Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "email"]} label="Email" rules={[{ required: true, type: "email" }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "phone"]} label="Phone" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "line1"]} label="Street" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "city"]} label="City" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "state"]} label="State" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "postalcode"]} label="Postal Code" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={["receiver", "country"]} label="Country" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="ups-submit-btn">
              Submit Shipment
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  );
}
