"use client";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationIcon: React.FC = () => {
  return (
    <div
      className="d-flex align-items-center me-4"
      style={{ cursor: "pointer" }}
    >
      <IoMdNotificationsOutline size={25} />
      <span className="text-secondary">Thông báo</span>
    </div>
  );
};

export default NotificationIcon;
