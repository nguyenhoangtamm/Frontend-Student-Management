import StudentProfile from "@/components/profile/StudentProfile";
import { Student } from "@/interface/studentInterface";
import React from "react";

export default function Profile() {
  const studentData: Student = {
    id: "0022411792",
    name: "Nguyễn Hoàng Tam",
    gender: "Nam",
    avatar: "/avatar.jpg",
    status: "Đang học",
    classId: "002241480101B",
    level: "Đại học",
    faculty: "Khoa Sư phạm Toán - Tin",
    major: "Khoa học Máy tính",
    specialization: "Khoa học máy tính",
    enrollmentDate: "04/5/2023",
    campus: "Cơ sở 1",
    educationType: "Chính Quy",
    course: "Khóa 2022",
    offCampus: {
      address: "123 Đường Nguyễn Văn A",
      district: "Phường 3",
      city: "TP. Cao Lãnh",
      landlord: "Nguyễn Văn B",
      landlordPhone: "0912345678",
      status: "confirmed",
      contractStart: "01/01/2023",
      contractEnd: "31/12/2023",
      lastUpdated: "01/10/2023",
      price: "2,000,000",
      electricityPrice: "3,500",
      waterPrice: "15,000",
      serviceFee: "100,000",
      wifiFee: "200,000",
    },
  };
  return (
    <div>
      <StudentProfile data={studentData} />
    </div>
  );
}
