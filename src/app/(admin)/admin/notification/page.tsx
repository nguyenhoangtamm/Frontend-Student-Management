"use client";
import AddModal from "@/components/admin/modals/AddModal";
import SearchBar from "@/components/admin/ui/SearchBar";
import DataTable from "@/components/admin/ui/table/Table";
import React from "react";
import {
  IdCard,
  User,
  School,
  CheckCircle,
  BookOpen,
  LucideIcon,
} from "lucide-react";

const datas = [
  {
    id: 1,
    title: "Thông báo A",
    content: "Nội dung thông báo A",
    date: "2024-02-19",
    views: 123,
  },
  {
    id: 2,
    title: "Thông báo B",
    content: "Nội dung thông báo B",
    date: "2024-02-18",
    views: 456,
  },
  {
    id: 3,
    title: "Thông báo C",
    content: "Nội dung thông báo C",
    date: "2024-02-17",
    views: 123,
  },
  {
    id: 4,
    title: "Thông báo D",
    content: "Nội dung thông báo D",
    date: "2024-02-16",
    views: 789,
  },
  {
    id: 5,
    title: "Thông báo E",
    content: "Nội dung thông báo E",
    date: "2024-02-15",
    views: 123,
  },
];

const dataColumns = [
  { key: "title", label: "Title" },
  { key: "content", label: "Content" },
  { key: "date", label: "Date" },
  { key: "views", label: "Views" },
];
interface IFilter {
  id: string;
  label: string;
  icon: LucideIcon;
}
const filters: IFilter[] = [
  { id: "dormitory_id", label: "Mã nhà trọ", icon: IdCard },
  { id: "name", label: "Tên nhà trọ", icon: User },
  { id: "location", label: "Địa chỉ", icon: School },
  { id: "type", label: "Loại phòng", icon: BookOpen },
  { id: "status", label: "Trạng thái", icon: CheckCircle },
];

export default function page() {
  console.log(filters);


  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Notification</h1>
      <div className="flex justify-between items-center">
        <AddModal />

        <SearchBar name="Notification" filters={filters} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <DataTable data={datas} columns={dataColumns} />
      </div>
    </div>
  );
}
