import React, { useState } from "react";
import { Card, Form, Radio, Input, Button } from "antd";
import "./PaymentPage.css";
import AddCardForm from "../../components/AddCardForm/AddCardForm" // 引入新组件

export default function PaymentPage() {
  const [hasCards] = useState(true); // 模拟用户是否已有绑定卡（你可以从后端获取）
  const [selectedMethod, setSelectedMethod] = useState("saved");

  // 示例：假设用户之前绑定过这两张卡
  const savedCards = [
    { id: 1, last4: "1234" },
    { id: 2, last4: "9901" }
  ];

  const onFinish = async (values) => {
    console.log("submit values:", values)
    values.method = Number(values.method)//make it is int
    const response = await fetch("http://localhost:5000/api/payment/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    })
    const result = await response.json()
    console.log("Backend:", result)
    alert("Payment saved successfully!")
  }

  return (
    <div className="ups-payment-container">
      <Card className="ups-payment-card" title="Payment Method">
        <Form layout="vertical" onFinish={onFinish}>

          {/* 支付方式选择 */}
          <Form.Item label="Select Payment Method">
            <Radio.Group
              onChange={(e) => setSelectedMethod(e.target.value)}
              value={selectedMethod}
            >
              {hasCards && (
                <Radio value="saved">Use Saved Card</Radio>
              )}
              <Radio value="new">Use New Card</Radio>
            </Radio.Group>
          </Form.Item>

          {/* 显示已有卡片列表 */}
          {selectedMethod === "saved" && hasCards && (
            <Form.Item
              name="cardId"
              label="Select Your Card"
              rules={[{ required: true, message: "Please select a card" }]}
            >
              <Radio.Group className="card-list">
                {savedCards.map((card) => (
                  <Radio key={card.id} value={card.id}>
                    Card ending in {card.last4}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          )}

          {/* 只有选择 Use New Card 时才显示 */}
          {selectedMethod === "new" && (
            <AddCardForm />
          )}

          {/* 提交按钮 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="ups-pay-btn">
              Confirm Payment
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  );
}
