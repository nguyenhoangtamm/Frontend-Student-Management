// components/LoginComponent.tsx
import React from "react";
import Image from "next/image";
import defaultbg from "@bg/defaultbg.png";
import { Button } from "../ui/button";

const LoginComponent: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Image src={defaultbg} alt="background" layout="fill" objectFit="cover" />
      <div className="bg-dark text-white p-4 max-w-md opacity-90 z-10 rounded-lg shadow-lg" >
        <div className="text-center mb-4">
          <Image
            src="/logo.png"
            alt="SPMS Logo"
            width={60}
            height={60}
            className="mb-3"
          />
          <h4>Student Performance Monitoring System 4.0</h4>
        </div>
        <form>
          {/* Loại người dùng */}
          <div className="mb-3">
            <label htmlFor="userType" className="block text-sm font-medium">
              User Type
            </label>
            <select id="userType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Mã số sinh viên */}
          <div className="mb-3">
            <label htmlFor="userId" className="block text-sm font-medium">
              Enter Your ID
            </label>
            <input
              type="text"
              id="userId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="1921207"
            />
          </div>

          {/* Mật khẩu */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Enter Your Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Password"
            />
          </div>

          {/* Nút đăng nhập */}
          <Button type="submit" className="btn btn-primary w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
