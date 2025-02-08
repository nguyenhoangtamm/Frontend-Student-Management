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
    offCampus:undefined,
  };
  return (
    <div>
      <StudentProfile data={studentData} />
    </div>
  );
}
