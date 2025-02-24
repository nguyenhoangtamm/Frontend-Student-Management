"use client";

import AddModal from "@/components/admin/modals/AddModal";
import SearchBar from "@/components/admin/ui/SearchBar";
import DataTable from "@/components/admin/ui/table/Table";

import React from "react";
import { IdCard, User, School, CheckCircle, LucideIcon } from "lucide-react";
import StatsCards from "@/components/admin/ui/Stats";
import { StatProps } from "@/interface/statProps";

const students = [
  {
    id: 1,
    status: "Đã khai báo",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "ĐHVBQ",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    status: "Chưa khai báo",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "1234",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    status: "Đã khai báo",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "1234",
    avatar: "/avatar3.png",
  },
  {
    id: 4,
    status: "Chờ duyệt",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "",
    avatar: "/avatar4.png",
  },
  {
    id: 5,
    status: "Chưa khai báo",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "",
    avatar: "/avatar5.png",
  },
  {
    id: 6,
    status: "Đã khai báo",
    name: "John Doe",
    mssv: "5678",
    class: "ABC",
    avatar: "/avatar6.png",
  },
  {
    id: 7,
    status: "Chờ duyệt",
    name: "Jane Smith",
    mssv: "9101",
    class: "DEF",
    avatar: "/avatar7.png",
  },
  {
    id: 8,
    status: "Chưa khai báo",
    name: "Alice Johnson",
    mssv: "1121",
    class: "GHI",
    avatar: "/avatar8.png",
  },
  {
    id: 9,
    status: "Đã khai báo",
    name: "Bob Brown",
    mssv: "3141",
    class: "JKL",
    avatar: "/avatar9.png",
  },
  {
    id: 10,
    status: "Chờ duyệt",
    name: "Charlie Davis",
    mssv: "5161",
    class: "MNO",
    avatar: "/avatar10.png",
  },
];
const dataColumns = [
  "mssv",
  "name",
  "class",
  "status",
  "avatar",
  "email",
  "phone",
  "address",
  "dob",
  "gender",
  "nationality",
  "enrollmentYear",
  "major",
  "gpa",
  "credits",
];
interface IFilter {
  id: string;
  label: string;
  icon: LucideIcon;
  option: string[];
}
const filters: IFilter[] = [
  {
    id: "1",
    label: "MSSV",
    icon: IdCard,
    option: ["1234", "5678", "9101", "1121", "3141", "5161"],
  },
  {
    id: "2",
    label: "Họ Tên",
    icon: User,
    option: [
      "Ramon Ridwan",
      "John Doe",
      "Jane Smith",
      "Alice Johnson",
      "Bob Brown",
      "Charlie Davis",
    ],
  },
  {
    id: "3",
    label: "Lớp",
    icon: School,
    option: ["ĐHVBQ", "1234", "ABC", "DEF", "GHI", "JKL", "MNO"],
  },
  {
    id: "4",
    label: "Trạng thái",
    icon: CheckCircle,
    option: ["Đã khai báo", "Chưa khai báo", "Chờ duyệt"],
  },
];

const stats: StatProps[] = [
  {
    name: "Total Students",
    label: ["Ngoại trú", "Nội trú", "Ở nhà", "Chưa khai báo"],
    labelNote: "Total",
    dataChart: [123, 140, 234, 50],
    backgroundColor: [
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
    ],
    borderWidth: 1,
    position: "bottom",
  },
  {
    name: "Total Dormitories",
    label: ["Dormitories"],
    labelNote: "Total",
    dataChart: [1040, 1040],
    backgroundColor: ["rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
    borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
    borderWidth: 1,
    position: "bottom",
  },
  {
    name: "Total Confirmed",
    label: ["Confirmed"],
    labelNote: "Total",
    dataChart: [1040, 1040],
    backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)"],
    borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
    borderWidth: 1,
    position: "bottom",
  },
  {
    name: "Total Unconfirmed",
    label: ["Unconfirmed"],
    labelNote: "Total",
    dataChart: [1040, 1040],
    backgroundColor: ["rgba(255, 159, 64, 0.6)", "rgba(54, 162, 235, 0.6)"],
    borderColor: ["rgba(255, 159, 64, 1)", "rgba(54, 162, 235, 1)"],
    borderWidth: 1,
    position: "bottom",
  },
];
export default function page() {
  return (
    <div className="flex flex-col gap-6 container ">
      <h1 className="text-2xl font-bold">Student Management: Students</h1>
      <StatsCards stats={stats} />
      <hr />
      <h4 className="text-gray-600">Students data</h4>
      <div className="flex   justify-between items-center">
      <AddModal name="Student" dataType={dataColumns}/>
      <SearchBar name="Student" filters={filters} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <DataTable data={students} columns={dataColumns} />
      </div>
    </div>
  );
}
