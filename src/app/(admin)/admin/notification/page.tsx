"use client";
import AddModal from "@/components/admin/modals/AddModal";
import SearchBar from "@/components/admin/ui/SearchBar";
import DataTable from "@/components/admin/ui/table/Table";
import React from "react";
import {
  IdCard,
  School,
  CheckCircle,
  BookOpen,
  LucideIcon,
} from "lucide-react";
import StatsCards from "@/components/admin/ui/Stats";

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

const dataColumns = ["title", "content", "date", "views"];
interface IFilter {
  id: string;
  label: string;
  icon: LucideIcon;
  option: string[];
}
const filters: IFilter[] = [
  {
    id: "title",
    label: "Title",
    icon: BookOpen,
    option: ["Thông báo A", "Thông báo B", "Thông báo C", "Thông báo D"],
  },
  {
    id: "content",
    label: "Content",
    icon: School,
    option: [
      "Nội dung thông báo A",
      "Nội dung thông báo B",
      "Nội dung thông báo C",
      "Nội dung thông báo D",
    ],
  },
  {
    id: "date",
    label: "Date",
    icon: CheckCircle,
    option: ["2024-02-19", "2024-02-18", "2024-02-17", "2024-02-16"],
  },
  {
    id: "views",
    label: "Views",
    icon: IdCard,
    option: ["123", "456", "789"],
  },
];

const stats = [
  {
    name: "Notification",
    label: ["A", "B", "C", "D", "E"],
    labelNote: "Notification",
    dataChart: [123, 456, 789, 101, 112],
  },
];
export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Notification</h1>
      <h4 className="text-gray-600">Notification OverView</h4>

      <StatsCards stats={stats} />
      <hr />
      <h4 className="text-gray-600">Notification data</h4>
      
      <div className="flex justify-between items-center">
        <AddModal name="Notification" dataType={dataColumns}/>
     
        <SearchBar name="Notification" filters={filters} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <DataTable data={datas} columns={dataColumns} />
      </div>
    </div>
  );
}
