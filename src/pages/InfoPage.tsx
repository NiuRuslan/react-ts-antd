import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Col, Row, Button, Anchor } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import "./InfoPage.css";

const { Link } = Anchor;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1849843_v5x82qchzy.js",
});

export const InfoPage = () => {
  const history = useHistory();

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }}>
          <Card title="React + TS + Ant Design app">
            <Anchor>
                <Link href="https://reactjs.org/" target="_blank" title={<><IconFont type="icon-react" /> React </>} />
                <Link href="https://www.typescriptlang.org/index.html" target="_blank" title={<><IconFont type="icon-typescript-def" /> TypeScript </>} />
                <Link href="https://ant.design/" target="_blank" title={<><IconFont type="icon-antdesign" /> Ant Design </>} />
                <Link href="https://github.com/NiuRuslan/react-ts-antd" target="_blank" title={<><IconFont type="icon-github" /> GitHub </>} />
            </Anchor>
            <br />
              <Button block onClick={() => history.push("/")}>
                Main Page
              </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
