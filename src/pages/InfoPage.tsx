import React from "react";
import { Card, Col, Row } from "antd";

import './InfoPage.css';

export const InfoPage = () => {
  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={8} offset={8}>
          <Card title="React + TS + Ant Design app" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};
