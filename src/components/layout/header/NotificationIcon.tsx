"use client";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationIcon: React.FC = () => {
  return (
    <div
      className="d-flex align-items-center me-4"
      style={{ cursor: "pointer" }}
    >
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="d-flex align-items-center border-0"
        >
          <IoMdNotificationsOutline size={25} />
          <span className="text-secondary">Thông báo</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="/profile">Thông báo 1</Dropdown.Item>
        <Dropdown.Item href="#/logout">Thông báo 2</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>

      
    </div>
  );
};

export default NotificationIcon;
