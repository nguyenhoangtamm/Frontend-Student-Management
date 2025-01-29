"use client";
import React, {  useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Avatar from "@images/dashboard/avatar.png"
import Image from "next/image";
interface UserInfoProps {
  student_code: string;
  full_name: string;
  gender: string;
  email: string;
  date_of_birth: string;
  birthplace: string;
  department: string;
}

const UserInfoComponent: React.FC<{
  data: UserInfoProps;
  className?: string;
}> = ({ data, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#0d47a1",
        color: "white",
        borderRadius: "8px",
        marginLeft: "1rem",
      }}
      className={`p-3 ${className} `}
    >
      <div className={`text-center `}>
        <div
          className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
          style={{ width: "72px", height: "72px", fontSize: "36px" }}
        >
          <Image src={Avatar} alt="User" width={50} height={50} />
        </div>
        <h5 className="fw-bold">{data.full_name}</h5>
        <div className="d-flex justify-content-center align-items-center">
          <span>{data.email}</span>
          <Button variant="link" className="text-white ms-2 p-0"></Button>
        </div>
      </div>
      <hr className="border-light" />
      <Card.Body className="px-2">
        <p>
          MSSV: <span className="fw-bold">{data.student_code}</span>
        </p>
        <p>
          Giới Tính: <span className="fw-bold">{data.gender}</span>
        </p>
        <p>
          Ngày Sinh: <span className="fw-bold">{data.date_of_birth}</span>
        </p>
        <p>
          Nơi Sinh: <span className="fw-bold">{data.birthplace}</span>
        </p>
        <p>
          Khoa: <span className="fw-bold">{data.department}</span>
        </p>
        <div className="text-center mt-3">
          <Link
            href="/profile"
            className="btn btn-light btn-sm fw-bold text-primary"
          >
            Xem chi tiết
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default UserInfoComponent;
