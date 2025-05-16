"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Image from "next/image";
import Avatar from "@images/dashboard/avatar.png";
import { FaUser } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardBodyType } from "@/schemaValidations/dashboard.schema";

interface UserInfoComponentProps {
  data: DashboardBodyType;
  className?: string;
}

const UserInfoComponent: React.FC<UserInfoComponentProps> = ({
  data,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Card chứa thông tin người dùng */}
      <Card
        className={`p-3 position-fixed ${className}`}
        style={{
          width: "18rem",
          backgroundColor: "#0d47a1",
          color: "white",
          borderRadius: "8px",
          top: 100,
          right: isOpen ? 10 : -300,
          transition: "right 0.5s ease",
          zIndex: 1000,
        }}
      >
        <div className="text-center">
          <div
            className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
            style={{ width: "72px", height: "72px", fontSize: "36px" }}
          >
            <Image src={Avatar} alt="User" width={50} height={50} />
          </div>
          <h5 className="fw-bold">{data.fullName}</h5>
          <div className="d-flex justify-content-center align-items-center">
            <span>{data.email}</span>
          </div>
        </div>
        <hr className="border-light" />
        <CardContent className="px-2">
          <p>
            MSSV: <span className="fw-bold">{data.code}</span>
          </p>
          <p>
            Giới Tính: <span className="fw-bold">{data.gender}</span>
          </p>
          <p>
            Ngày Sinh: <span className="fw-bold">{data.dateOfBirth}</span>
          </p>
          <p>
            Nơi Sinh: <span className="fw-bold">{data.birthplace}</span>
          </p>
          <p>
            Khoa: <span className="fw-bold">{data.faculty}</span>
          </p>
          <div className="text-center mt-3">
            <Link
              href="/profile"
              className="btn btn-light btn-sm fw-bold text-primary"
            >
              Xem chi tiết
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Nút điều khiển toggle */}
      <Button
        type="button"
        onClick={toggleSidebar}
        className="position-fixed d-flex justify-content-center align-items-center"
        style={{
          top: 100,
          // Điều chỉnh vị trí của nút phù hợp với sidebar bên phải
          right: isOpen ? 300 : 10,
          transition: "right 0.5s ease",
          zIndex: 1100,
        }}
      >
        <FaUser />
        {/* {isOpen ? <FaUser/> : "Mở"} */}
      </Button>
    </>
  );
};

export default UserInfoComponent;
