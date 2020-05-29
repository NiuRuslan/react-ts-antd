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
      <div className="logo" onClick={() => history.push(`${process.env.PUBLIC_URL}/`)}>
        <SmileOutlined /> React + TS
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`${process.env.PUBLIC_URL}/`]}
        selectedKeys={[location.pathname]}
        className="nav"
      >
        <Menu.Item key={`${process.env.PUBLIC_URL}/`}>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <ScheduleOutlined style={{ fontSize: "20px", margin: 0 }} />
          </Link>
        </Menu.Item>
        <Menu.Item key={`${process.env.PUBLIC_URL}/about`}>
          <NavLink to={`${process.env.PUBLIC_URL}/about`}>
            <InfoCircleOutlined style={{ fontSize: "20px", margin: 0 }} />
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
