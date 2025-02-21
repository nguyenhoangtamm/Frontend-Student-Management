import AddModal from "@/components/admin/modals/AddModal";
import StudentTable from "@/components/admin/student/StudentTable";
import SearchBar from "@/components/admin/ui/SearchBar";
import DataTable from "@/components/admin/ui/table/Table";
import React from "react";

const students = [
  {
    id: 1,
    status: "Active",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "ĐHVBQ",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    status: "Down",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "1234",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    status: "Active",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "1234",
    avatar: "/avatar3.png",
  },
  {
    id: 4,
    status: "Pending",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "",
    avatar: "/avatar4.png",
  },
  {
    id: 5,
    status: "Down",
    name: "Ramon Ridwan",
    mssv: "1234",
    class: "",
    avatar: "/avatar5.png",
  },
  {
    id: 6,
    status: "Active",
    name: "John Doe",
    mssv: "5678",
    class: "ABC",
    avatar: "/avatar6.png",
  },
  {
    id: 7,
    status: "Pending",
    name: "Jane Smith",
    mssv: "9101",
    class: "DEF",
    avatar: "/avatar7.png",
  },
  {
    id: 8,
    status: "Down",
    name: "Alice Johnson",
    mssv: "1121",
    class: "GHI",
    avatar: "/avatar8.png",
  },
  {
    id: 9,
    status: "Active",
    name: "Bob Brown",
    mssv: "3141",
    class: "JKL",
    avatar: "/avatar9.png",
  },
  {
    id: 10,
    status: "Pending",
    name: "Charlie Davis",
    mssv: "5161",
    class: "MNO",
    avatar: "/avatar10.png",
  },
];

const studentColumns = [
  { key: "mssv", label: "MSSV" },
  { key: "name", label: "Họ Tên" },
  { key: "class", label: "Lớp" },
  { key: "status", label: "Trạng thái" },
  {key: "avatar", label: "Avatar"}
];
export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Students</h1>
      <div className="flex justify-between items-center">
        <AddModal />
        <SearchBar name="Student" />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <DataTable data={students} columns={studentColumns} />
      </div>
    </div>
  );
}
