"use client";

import { useAuth } from "@/services/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
interface UserProfileProps {
    name: string;
    userImage?: string;
}
export default function UserProfile({ name, userImage }: UserProfileProps) {
    const { logout, error } = useAuth();
    const router = useRouter();
    const handleLout = async () => {
        await logout();
        if (!error) {
            router.push('/login');
        }
    };
    return (
        <Dropdown align="end">
            <Dropdown.Toggle
                variant="light"
                className="d-flex align-items-center border-0"
            >
                {/* {userImage ? (
          <Image
            src={userImage}
            alt={name?name:"User"}
            className="rounded-circle"
            style={{ width: '32px', height: '32px' }}
          />
        ) : (
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
            style={{ width: '32px', height: '32px', fontWeight: 'bold' }}
          >
            {name?.charAt(0)}
          </div>
        )} */}
                <div
                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                    style={{
                        width: "32px",
                        height: "32px",
                        fontWeight: "bold",
                    }}
                >
                    {name?.charAt(0)}
                </div>
                <span className="ms-2 text-secondary">{name}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/profile">Hồ sơ</Dropdown.Item>
                <Dropdown.Item href="/settings">Đổi mật khẩu</Dropdown.Item>
                <Dropdown.Item onClick={handleLout}>Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
