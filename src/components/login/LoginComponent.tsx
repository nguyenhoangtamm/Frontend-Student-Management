// components/LoginComponent.tsx
import React from 'react';
import Image from 'next/image';
import defaultbg from '@bg/defaultbg.png';

const LoginComponent: React.FC = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative">
      <Image src={defaultbg} alt="background" layout="fill" objectFit="cover" />
      <div className="card bg-dark text-white p-4" style={{ maxWidth: '400px', opacity: 0.9, zIndex: 1 }}>
        <div className="text-center mb-4">
          <Image
            src="/logo.png" // Đường dẫn logo
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
            <label htmlFor="userType" className="form-label">
              User Type
            </label>
            <select id="userType" className="form-select">
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Mã số sinh viên */}
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">
              Enter Your ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-control"
              placeholder="1921207"
            />
          </div>

          {/* Mật khẩu */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Enter Your Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter Your Password"
            />
          </div>

          {/* Nút đăng nhập */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
