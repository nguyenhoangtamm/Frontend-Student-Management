import StudentProfile from "@/components/profile/StudentProfile";
import { Student } from "@/interface/studentInterface";
import React from "react";

export default function Profile() {
  const studentData: Student = {
    code: "0022411792",
    name: "Nguyễn Hoàng Tam",
    gender: "Nam",
    avatar: "/avatar.jpg",
    status: "Đang học",
    classId: "002241480101B",
    level: "Đại học",
    faculty: "Khoa Sư phạm Toán - Tin",
    major: "Khoa học Máy tính",
    campus: "Cơ sở 1",
    educationType: "Chính Quy",
    course: "Khóa 2022",
    phone: "0123456789",
    address: "Đồng Tháp",
    dateOfBirth: "01/01/2000",
    birthPlace: "Đồng Tháp",
    email: "tamnguyen@example.com",
    offCampus: {
      id: "123",
      name: "Nhà trọ A",
      room: "234",
      address: "123 Đường Nguyễn Văn A",
      owner: "Nguyễn Văn B",
      phone: "0912345678",
      contract_status: "active",
      approval_status: "confirmed",
      contractStart: "01/01/2023",
      contractEnd: "31/12/2023",
      price: "2,000,000",
      electricityPrice: "3,500",
      waterPrice: "15,000",
      serviceFee: "100,000",
      wifiFee: "200,000",
      image: "/house.jpg",
    },
  };
  return (
    <div>
      <StudentProfile data={studentData} />
    </div>
  );
}
