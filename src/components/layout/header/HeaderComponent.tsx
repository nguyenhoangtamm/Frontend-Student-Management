"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NotificationIcon from "./NotificationIcon";
import UserProfile from "./UserProfile";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="fw-bold fs-4">
          {" "}
          <Image src="/path/to/logo.png" alt="Logo" width={50} height={50} />
          Student Management
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
