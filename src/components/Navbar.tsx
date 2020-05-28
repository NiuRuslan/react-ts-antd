import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SmileOutlined,
  ScheduleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;

export const Navbar = () => {
  return (
    <Header>
      <div className="logo">
        <SmileOutlined /> React + TS
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="nav"
      >
        <Menu.Item key="1">
          <Link to="/">
            <ScheduleOutlined style={{fontSize: '20px', margin:0}}/>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/about">
            <InfoCircleOutlined style={{fontSize: '20px', margin:0}} />
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
