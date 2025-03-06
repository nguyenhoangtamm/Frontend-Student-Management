"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NotificationIcon from "./NotificationIcon";
import Image from "next/image";
import Link from "next/link";
import logo from "@icons/logo.png";
import { useHeader } from "@/services/hooks/useStudent";
import UserProfile from "./UserProfile";

export default function Header() {
    const { data: dataSend, isLoading, isError } = useHeader();
    if (isLoading) {
        return;
    }

    if (isError) {
        return;
    }
    return (
        <Navbar bg="light" expand="lg" className={` border-bottom`}>
            <Container className="d-flex justify-content-between">
                <Navbar.Brand className="fw-bold fs-4">
                    <Link
                        href="/dashboard"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Image src={logo} alt="Logo" width={50} height={50} />
                        <span style={{ marginLeft: "10px" }}>
                            Student Management
                        </span>
                    </Link>
                </Navbar.Brand>
                <div className="d-flex align-items-center">
                    <NotificationIcon
                        notifications={dataSend.notifications}
                    />
                    <UserProfile
                        name={dataSend.full_name}
                        userImage={dataSend.avatar}
                    />
                </div>
            </Container>
        </Navbar>
    );
}
