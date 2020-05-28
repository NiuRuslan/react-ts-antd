import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Col, Row, Button } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

import "./InfoPage.css";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1849843_8uck6j4jaxv.js",
});

export const InfoPage = () => {
  const history = useHistory();

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={8} offset={8}>
          <Card title="React + TS + Ant Design app">
            <p>
              <IconFont type="icon-react" /> React
            </p>
            <p>
              <IconFont type="icon-typescript-def" /> TypeScript
            </p>
            <p>
              <IconFont type="icon-antdesign" /> Ant Design
            </p>
            <Button block onClick={() => history.push('/')}>Main Page</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
