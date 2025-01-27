"use client";

import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

const SidebarComponent: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={classNames(
          className,
          "navbar navbar-expand-lg navbar-light bg-light align-items-start position-fixed",
          { show: isOpen, "d-none": !isOpen }
        )}
        style={{
          top: 100,
          left: 10,
          height: "50vh",
          width: "250px",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid flex-column">
          <Link
            href="/dashboard"
            className="navbar-brand fw-bold fs-4 mb-3 me-auto m-2"
          >
            Trang chủ
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <Link href="/info" className="nav-link">
                  Xem Thông Tin
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/search" className="nav-link">
                  Tìm Nhà trọ
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/declare" className="nav-link">
                  Khai báo Ngoại trú
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/regulations" className="nav-link">
                  Luật pháp và quy định
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/logout" className="nav-link">
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        className="position-fixed"
        type="button"
        onClick={toggleNavbar}
        style={{
          top: 100,
          left: isOpen ? 260 : 10,
          height: "30px",
          width: "30px",
          zIndex: 1000,
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
};

export default SidebarComponent;
