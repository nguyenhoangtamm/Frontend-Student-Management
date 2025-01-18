"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavbarComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light align-items-start border">
            <div className="container-fluid flex-column ">
                
                <Link href="/" className="navbar-brand fw-bold fs-4 mb-3 me-auto m-2">
                    Trang chủ
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
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

export default NavbarComponent;
