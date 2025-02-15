// components/Navbar.tsx
import NotificationIcon from "@/components/layout/header/NotificationIcon";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
      <h2 className="text-xl font-bold mb-4">CoinBase</h2>

      <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 cursor-pointer" />
     
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-gray-500" />
          <span className="font-medium">Ông A Đê Min</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
