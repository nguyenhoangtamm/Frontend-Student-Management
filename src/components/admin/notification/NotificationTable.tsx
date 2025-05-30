"use client";
import { Button } from "antd";

import { MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";
import DeleteModal from "../modals/DeleteModal"; // Đổi tên thành DeleteModal
// Định nghĩa lại kiểu dữ liệu cho trạng thái thông báo
interface Notification {
  id: number;
  title: string;
  content: string;
  date: string;
  views: number;
}
const countNotifications = 10080;
const notifications: Notification[] = [
  {
    id: 1,
    title: "Thông báo A",
    content: "Nội dung thông báo A",
    date: "2024-02-19",
    views: 123,
  },
  {
    id: 2,
    title: "Thông báo B",
    content: "Nội dung thông báo B",
    date: "2024-02-18",
    views: 456,
  },
  {
    id: 3,
    title: "Thông báo C",
    content: "Nội dung thông báo C",
    date: "2024-02-17",
    views: 123,
  },
  {
    id: 4,
    title: "Thông báo D",
    content: "Nội dung thông báo D",
    date: "2024-02-16",
    views: 789,
  },
  {
    id: 5,
    title: "Thông báo E",
    content: "Nội dung thông báo E",
    date: "2024-02-15",
    views: 123,
  },
];

const extraNotifications: Notification[] = [
  ...notifications,
  {
    id: 6,
    title: "Thông báo F",
    content: "Nội dung thông báo F",
    date: "2024-02-14",
    views: 123,
  },
  {
    id: 7,
    title: "Thông báo G",
    content: "Nội dung thông báo G",
    date: "2024-02-13",
    views: 789,
  },
  {
    id: 8,
    title: "Thông báo H",
    content: "Nội dung thông báo H",
    date: "2024-02-12",
    views: 456,
  },
  {
    id: 9,
    title: "Thông báo I",
    content: "Nội dung thông báo I",
    date: "2024-02-11",
    views: 123,
  },
  {
    id: 10,
    title: "Thông báo J",
    content: "Nội dung thông báo J",
    date: "2024-02-10",
    views: 456,
  },
];

const NotificationTable: React.FC = () => {
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [notificationData, setNotificationData] = React.useState(notifications);
  const [viewButton, setViewButton] = React.useState("View More");
  const [check, setCheck] = React.useState(false);

  const handleViewMore = () => {
    if (viewButton === "View More") {
      setNotificationData(extraNotifications);
      setViewButton("View Less");
    } else {
      setNotificationData(notifications);
      setViewButton("View More");
    }
  };

  const handleDelete = () => {
    setOpenDelete(true);
    console.log("delete");
  };

  const handleSelectAll = () => {
    setCheck(!check);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3" onClick={handleSelectAll}>
                <input type="checkbox" />
              </th>
              <th className="p-3">Tiêu đề</th>
              <th className="p-3">Nội dung</th>
              <th className="p-3">Lượt xem</th>
              <th className="p-3">Ngày gửi</th>
              <th className="p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {notificationData.map((notification) => (
              <tr key={notification.id} className="border-t">
                <td className="p-3 text-center justify-center">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-center justify-center">
                  {notification.title}
                </td>
                <td className="p-3 text-center justify-center">
                  {notification.content}
                </td>
                <td className="p-3 text-center justify-center">
                  {notification.views}
                </td>
                <td className="p-3 text-center justify-center">
                  {notification.date}
                </td>
                <td className="p-3 flex gap-2 text-center justify-center">
                  <Button
                    style={{ border: "none" }}
                    href={"notification/" + notification.id}
                  >
                    <MdEdit size={16} />
                  </Button>
                  <Button style={{ border: "none" }} onClick={handleDelete}>
                    <Trash2 size={16} />
                  </Button>
                  <Button style={{ border: "none" }}>
                    <MoreVertical size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="p-3 text-gray-600">{countNotifications} Thông báo</p>
      <DeleteModal isOpen={isOpenDelete} setOpen={setOpenDelete} />
      <div className="mt-4 flex justify-center">
        <Button
          type="primary"
          onClick={handleViewMore}
          className="rounded-full bg-admin-theme text-white"
        >
          {viewButton}
        </Button>
      </div>
    </>
  );
};

export default NotificationTable;
