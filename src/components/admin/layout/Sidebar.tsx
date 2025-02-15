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
import { redirect } from "next/navigation";


const sidebarItems = [
  {
    icon: <FaEye />,
    title: "Overview",
    badge: undefined,
    link: "/admindashboard",
  },
  {
    icon: <FaUserGraduate />,
    title: "Student",
    badge: 19,
    link: "/admindashboard/student",
  },
  {
    icon: <FaBuilding />,
    title: "Dormitory",
    badge: undefined,
    link: "/adminDashboard/dormitory",
  },
  {
    icon: <FaChartBar />,
    title: "Thống Kê & Báo cáo",
    badge: 10,
    link: "/adminDashboard/statistic",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Báo cáo vi phạm",
    badge: undefined,
    link: "/adminDashboard/report",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Đăng ký kiểm duyệt",
    badge: undefined,
    link: "/adminDashboard/approval",
  },
  {
    icon: <FaBell />,
    title: "Thông báo",
    badge: undefined,
    link: "/adminDashboard/notification",
  },
];

const Sidebar = () => {
  const [active, setActive] = React.useState(0);
  const handleClick = (index: number,link:string) => {
    setActive(index);
    redirect(link);
  };
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 flex flex-col">
      {/* Menu Items */}
      <nav className="mt-5 space-y-3">
        {sidebarItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
            classname={
              active === index
                ? "flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer"
                : ""
            }
            changeMenu={() => handleClick(index,item.link)}
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto flex items-center gap-3 p-3 text-gray-600 cursor-pointer hover:text-red-500">
        <BiLogOut />
        <span>Logout</span>
      </div>
    </div>
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
        : "flex items-center gap-3 p-3 rounded-lg text-gray-600 cursor-pointer hover:bg-gray-100 transform transition-transform duration-200 hover:scale-105"
      }
      onClick={changeMenu}
    >
      <div className="flex items-center gap-3">
      {icon}
      <span>{title}</span>
      </div>
      {badge && (
      <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {badge}
      </span>
      )}
    </div>
  );
};

export default Sidebar;
