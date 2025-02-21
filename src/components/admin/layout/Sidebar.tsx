"use client";
import React from "react";
import {
  FaEye,
  FaUserGraduate,
  FaBuilding,
  FaChartBar,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaBell,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

const sidebarItems = [
  {
    icon: <FaEye />,
    title: "Overview",
    badge: undefined,
    link: "/admin",
  },
  {
    icon: <FaUserGraduate />,
    title: "Student",
    badge: 19,
    link: "/admin/student",
  },
  {
    icon: <FaBuilding />,
    title: "Dormitory",
    badge: undefined,
    link: "/admin/dormitory",
  },
  {
    icon: <FaChartBar />,
    title: "Thống Kê & Báo cáo",
    badge: 10,
    link: "/admin/statistic",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Báo cáo vi phạm",
    badge: undefined,
    link: "/admin/report",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Đăng ký kiểm duyệt",
    badge: undefined,
    link: "/admin/approval",
  },
  {
    icon: <FaBell />,
    title: "Thông báo",
    badge: undefined,
    link: "/admin/notification",
  },
];

const Sidebar = () => {
  const currentPath = usePathname();

  // Xác định mục active ngay từ đầu để tránh bị nhảy về 0
  const getInitialActiveIndex = () => {
    return sidebarItems.findIndex(
      (item) =>
        item.link === currentPath ||
        (currentPath.includes(item.link) && item.link !== "/admin")
    );
  };
  const [active, setActive] = React.useState(getInitialActiveIndex());

  const handleClick = (index: number, link: string) => {
    setActive(index);
    redirect(link);
  };
  return (
    <nav className="mt-5 space-y-3">
      {sidebarItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
          classname={
            active === index
              ? "flex items-center gap-3 p-3 rounded-lg bg-admin-theme text-white cursor-pointer "
              : ""
          }
          changeMenu={() => handleClick(index, item.link)}
        />
      ))}
      <Link
        href={"/login"}
        className="mt-auto flex items-center gap-3 p-3 text-gray-600 cursor-pointer hover:text-red-500 no-underline"
      >
        <BiLogOut />
        <span>Logout</span>
      </Link>
    </nav>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  badge?: number;
  classname?: string;

  changeMenu?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  badge,
  classname,

  changeMenu,
}) => {
  return (
    <div
      className={
        classname
          ? classname
          : "flex items-center gap-3 p-3 rounded-lg text-gray-600 cursor-pointer hover:bg-gray-100 transform transition-transform duration-200 hover:scale-105 bg-gray-50"
      }
      onClick={changeMenu}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>
      {badge && (
        <span className="bg-admin-notification text-white text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

export default Sidebar;
