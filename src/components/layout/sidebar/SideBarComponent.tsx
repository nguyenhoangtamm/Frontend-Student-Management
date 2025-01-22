"use client";

import React, { useState } from "react";
import Link from "next/link";

const SidebarComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light align-items-start `}>
        <div className="container-fluid flex-column">
            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <Link href="/dashboard" className="navbar-brand fw-bold fs-4 mb-3 me-auto m-2 collapse navbar-collapse">
                Trang chủ
            </Link>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
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
);
};

export default SidebarComponent;
