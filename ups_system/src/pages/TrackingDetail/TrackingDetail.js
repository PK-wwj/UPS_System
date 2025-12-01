import React from "react";
import { Card, Typography, Timeline, Input, Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import "./TrackingDetail.css";

const { Title, Text } = Typography;

function TrackingDetail() {
  const trackingNumber = "1ZE569864204544641";

  const timelineData = [
    {
      title: "Delivered",
      location: "FRESH MEADOWS, NY, US",
      time: "11/21/2025, 1:08 PM",
    },
    {
      title: "Out for Delivery",
      location: "Maspeth, NY, US",
      time: "11/21/2025, 9:47 AM",
    },
    {
      title: "On the Way",
      location: "Maspeth, NY, US",
      time: "11/21/2025, 7:43 AM",
    },
    {
      title: "We Have Your Package",
      location: "Ontario, CA, US",
      time: "11/14/2025, 3:59 PM",
    },
    {
      title: "Label Created",
      location: "United States",
      time: "",
    },
  ];

  return (
    <div className="tracking-page">

      {/* LEFT COLUMN – Shipment Overview */}
      <Card className="tracking-main">

        <Text>Your shipment</Text>
        <Title level={4}>{trackingNumber}</Title>

        <div className="delivered-box">
          <CheckCircleFilled className="delivered-icon" />
          <div>
            <Text strong>Delivered On</Text>
            <Title level={4} style={{ margin: 0 }}>
              Friday, Nov 21 at 1:08 P.M. at Front Door
            </Title>
          </div>
        </div>

        <div className="destination-box">
          <Text type="secondary">Delivered To</Text>
          <Title level={5} style={{ marginTop: 4 }}>
            FRESH MEADOWS, NY US
          </Title>
        </div>

        {/* Shipment Timeline */}
        <Timeline className="tracking-timeline">
          {timelineData.map((t, i) => (
            <Timeline.Item
              key={i}
              dot={<CheckCircleFilled style={{ color: "#008060" }} />}
            >
              <strong>{t.title}</strong>
              <br />
              <Text>{t.location}</Text>
              {t.time && (
                <>
                  <br />
                  <Text type="secondary">{t.time}</Text>
                </>
              )}
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>

      {/* CENTER – Delivery Photo Section */}
      <Card className="delivery-photo">
        <Title level={4}>Delivery Photo Available.</Title>
        <Text>Enter destination postal code to view the photo</Text>
        <Input style={{ marginTop: 12 }} placeholder="Postal Code" />
        <Button type="primary" style={{ marginTop: 15 }}>
          View Photo
        </Button>
      </Card>

      {/* RIGHT COLUMN – Track Another Package + Spam Warning */}
      <div className="tracking-right">

        <Card className="track-another">
          <Text strong>Track Another Package</Text>
          <Input placeholder="Enter Tracking Number" style={{ marginTop: 10 }} />
          <Button type="primary" block style={{ marginTop: 12 }}>
            Track
          </Button>
        </Card>

        <Card className="safety-card">
          <Title level={5}>Stay Safe – Avoid Fraud and Scams</Title>
          <Text>
            Received a suspicious text, call, or email? Don’t respond.
          </Text>
          <Button type="default" block style={{ marginTop: 12 }}>
            Tips to Avoid Fraud
          </Button>
        </Card>

      </div>
    </div>
  );
}

export default TrackingDetail;
