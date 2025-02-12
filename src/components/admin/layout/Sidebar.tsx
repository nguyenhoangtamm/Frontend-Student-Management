import React from "react";
import { FaEye, FaUserGraduate, FaBuilding, FaChartBar, FaExclamationTriangle, FaClipboardCheck, FaBell } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 flex flex-col">
      {/* Overview */}
      <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <FaEye />
        <span>Overview</span>
      </div>
      
      {/* Menu Items */}
      <nav className="mt-5 space-y-3">
        <MenuItem icon={<FaUserGraduate />} title="Student" badge={19} />
        <MenuItem icon={<FaBuilding />} title="Dormitory" badge={undefined} />
        <MenuItem icon={<FaChartBar />} title="Thống Kê & Báo cáo" badge={10} />
        <MenuItem icon={<FaExclamationTriangle />} title="Báo cáo vi phạm" badge={undefined} />
        <MenuItem icon={<FaClipboardCheck />} title="Đăng ký kiểm duyệt" badge={undefined} />
        <MenuItem icon={<FaBell />} title="Thông báo" badge={undefined} />
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
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, badge }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
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
