"use client";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";

interface Notification {
    title: string;
    slug: string;
}
interface NotificationIconProps {
    notifications: Notification[];
}
export default function NotificationIcon({ notifications }: NotificationIconProps) {
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
                    {notifications.map((notification, index) => (
                        <Dropdown.Item key={index} href={`/notifications/${notification.slug}`}>
                            {notification.title}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

