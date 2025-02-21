// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
      <Image src={"/homelogo.png"} alt="logo" width={200} height={100} />

      <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <Link href={""} className="flex items-center space-x-4 ">
        <FaBell className="text-gray-500 cursor-pointer" />

        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-gray-500" />
          <span className="font-medium">Ông A Đê Min</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
