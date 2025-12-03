import React from "react"
import { Form, Input, Radio } from "antd"
import "./AddCardForm.css"

export default function AddCardForm() {
    return (
        <div className="add-card-container">
            <h3 className="section-title">Add New Card</h3>

            <Form.Item
                name="method"
                label="Card Type"
                rules={[{ required: true, message: "Please select card type" }]}
            >
                <Radio.Group>
                    <Radio value={1}>Debit Card</Radio>
                    <Radio value={2}>Credit Card</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="cardNumber"
                label="Card Number"
                rules={[
                    { required: true, message: "Please enter card number" },
                    { len: 16, message: "Card number must be 16 digits" }
                ]}
            >
                <Input maxLength={16} placeholder="1234567812345678" />
            </Form.Item>

            <div className="grid-2">
                <Form.Item
                    name="expiry"
                    label="Expiry (MM/YY)"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input placeholder="MM/YY" maxLength={4} />
                </Form.Item>

                <Form.Item
                    name="cvv"
                    label="CVV"
                    rules={[
                        { required: true, message: "Required" },
                        { len: 3, message: "3-digit security code" }
                    ]}
                >
                    <Input maxLength={3} placeholder="123" />
                </Form.Item>
            </div>
        </div>
    )
}
