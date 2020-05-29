import React from "react";
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SmileOutlined,
  ScheduleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;

export const Navbar = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Header>
      <div className="logo" onClick={() => history.push('/')}>
        <SmileOutlined /> React + TS
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        className="nav"
      >
        <Menu.Item key="/">
          <Link to="/">
            <ScheduleOutlined style={{ fontSize: "20px", margin: 0 }} />
          </Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <NavLink to="/about">
            <InfoCircleOutlined style={{ fontSize: "20px", margin: 0 }} />
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
