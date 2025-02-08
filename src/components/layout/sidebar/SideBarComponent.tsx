"use client";
import React, { useState } from "react";
import style from "@styles/sidebar.module.css";

import {
  AppstoreOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Button, Divider, Menu, Switch } from "antd";
import type { GetProp, MenuProps } from "antd";
import { Home, MenuIcon } from "lucide-react";
import Link from "antd/es/typography/Link";


type MenuTheme = GetProp<MenuProps, "theme">;

type MenuItem = GetProp<MenuProps, "items">[number];
const items: MenuItem[] = [
  {
    key: "0",
    icon: <Home />,
    label: (
      <Link
        href="/dashboard"
        className="navbar-brand fw-bold fs-4 mb-3 me-auto m-2"
      >
        Trang chủ
      </Link>
    ),
  },
  {
    key: "1",
    icon: <InfoCircleOutlined />,
    label: <Link href="/info">Xem Thông Tin</Link>,
  },
  {
    key: "2",
    icon: <CalendarOutlined />,
    label: <Link href="/housing">Tìm Nhà trọ</Link>,
  },
  {
    key: "3",
    icon: <CalendarOutlined />,
    label: <Link href="/declare">Khai báo Ngoại trú</Link>,
  },
  {
    key: "4",
    icon: <AppstoreOutlined />,
    label: "Luật pháp và quy định",
    children: [
      { key: "5", label: <Link href="/regulations">Quy định pháp luật</Link> },
      { key: "6", label: <Link href="/regulations">Quy định nhà trường</Link> },
    ],
  },
  {
    key: "7",
    icon: <LinkOutlined />,
    label: <Link href="/">Đăng xuất</Link>,
  },
];

const SideBarComponent: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      <nav
        className={`${style.sidebar} ${
          isOpen ? style.show : style.hidden
        } navbar navbar-expand-lg navbar-light bg-light align-items-start position-fixed d-flex flex-column `}
        style={{
          top: 100,
          left: 10,
          height: "50vh",
          width: "250px",
          zIndex: 1000,
        }}
      >
        <Divider type="vertical" />
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />

        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          theme={theme}
          items={items}
        />
      </nav>
      <Button
        className="position-fixed d-flex justify-content-center align-items-center"
        onClick={toggleNavbar}
        style={{
          top: 100,
          left: isOpen ? 260 : 10,
          transition: "ease 0.7s",
          zIndex: 1000,
        }}
      >
        <MenuIcon />
      </Button>
    </>
  );
};

export default SideBarComponent;
