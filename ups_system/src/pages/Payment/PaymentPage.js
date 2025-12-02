import React, { useState } from "react";
import { Card, Form, Radio, Input, Button } from "antd";
import "./PaymentPage.css";

export default function PaymentPage() {
  const [hasCards] = useState(true); // 模拟用户是否已有绑定卡（你可以从后端获取）
  const [selectedMethod, setSelectedMethod] = useState("saved");

  // 示例：假设用户之前绑定过这两张卡
  const savedCards = [
    { id: 1, last4: "1234" },
    { id: 2, last4: "9901" }
  ];

  const onFinish = (values) => {
    console.log("Payment submitted:", values);
  };

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

          {/* 输入新卡信息 */}
          {selectedMethod === "new" && (
            <div className="new-card-section">
              <h3 className="section-title">Card Information</h3>

              <Form.Item
                name="cardNumber"
                label="Card Number"
                rules={[
                  { required: true, message: "Please enter card number" },
                  { len: 16, message: "Card number must be 16 digits" }
                ]}
              >
                <Input maxLength={16} />
              </Form.Item>

              <div className="grid-2">
                <Form.Item
                  name="expiry"
                  label="Expiry Date (MM/YY)"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="MM/YY" maxLength={5} />
                </Form.Item>

                <Form.Item
                  name="cvv"
                  label="CVV"
                  rules={[
                    { required: true, message: "Required" },
                    { len: 3, message: "3-digit security code" }
                  ]}
                >
                  <Input maxLength={3} />
                </Form.Item>
              </div>
            </div>
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
