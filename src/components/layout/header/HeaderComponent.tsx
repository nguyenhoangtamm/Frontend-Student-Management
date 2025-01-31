"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NotificationIcon from "./NotificationIcon";
import UserProfile from "./UserProfile";
import Image from "next/image";
import Link from "next/link";
import logo from "@icons/logo.png";

const Header: React.FC<{ className?: string }> = ( {className}) => {
  return (
    <Navbar bg="light" expand="lg" className={` ${className} border-bottom`}>
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="fw-bold fs-4">
          {" "}
          <Link href="/dashboard" style={{ textDecoration: 'none' }} >
            <Image src={logo} alt="Logo" width={50} height={50} />
            Student Management
          </Link>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <NotificationIcon />
          <UserProfile />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
