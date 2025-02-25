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
import StatsCards from "@/components/admin/ui/Stats";
import { StatProps } from "@/interface/statProps";

const datas = [
  {
    id: 1,
    name: "Ký túc xá A",
    owner: "Nguyễn Văn A",
    address: "123 Đường ABC, TP. HCM",
    status: "Active",
  },
  {
    id: 2,
    name: "Nhà trọ B",
    owner: "Trần Thị B",
    address: "456 Đường XYZ, TP. HCM",
    status: "Down",
  },
  {
    id: 3,
    name: "Ký túc xá C",
    owner: "Lê Văn C",
    address: "789 Đường DEF, TP. HCM",
    status: "Active",
  },
  {
    id: 4,
    name: "Nhà trọ D",
    owner: "Phạm Thị D",
    address: "101 Đường GHI, TP. HCM",
    status: "Pending",
  },
  {
    id: 5,
    name: "Ký túc xá E",
    owner: "Hoàng Văn E",
    address: "202 Đường JKL, TP. HCM",
    status: "Down",
  },
];
const dataColumns = ["name", "owner", "address", "status"];
interface IFilter {
  id: string;
  label: string;
  icon: LucideIcon;
  option: string[];
}
const filters: IFilter[] = [
  { id: "1", label: "Mã nhà trọ", icon: IdCard, option: ["Tăng", "Giảm"] },
  {
    id: "2",
    label: "Tên nhà trọ",
    icon: User,
    option: [
      "Ký túc xá A",
      "Nhà trọ B",
      "Ký túc xá C",
      "Nhà trọ D",
      "Ký túc xá E",
    ],
  },
  {
    id: "3",
    label: "Địa chỉ",
    icon: School,
    option: [
      "123 Đường ABC, TP. HCM",
      "456 Đường XYZ, TP. HCM",
      "789 Đường DEF, TP. HCM",
      "101 Đường GHI, TP. HCM",
      "202 Đường JKL, TP. HCM",
    ],
  },
  {
    id: "4",
    label: "Loại phòng",
    icon: BookOpen,
    option: ["A", "B", "C", "D", "E"],
  },
  {
    id: "5",
    label: "Trạng thái",
    icon: CheckCircle,
    option: ["Active", "Pending", "Down"],
  },
];
const stats: StatProps[] = [
  {
    name: "Dormitorys",
    label: ["Active", "Pending", "Down"],
    labelNote: "Total",
    dataChart: [3, 1, 2],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    position: "bottom",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Dormitorys</h1>
      <h4 className="text-gray-600">Dormitory OverView</h4>

      <StatsCards stats={stats} />
      <hr />
      <h4 className="text-gray-600">Dormitory data</h4>
      <div className="flex justify-between items-center">
        <AddModal name="Dormitory" dataType={dataColumns} />
        <SearchBar name="Dormitory" filters={filters} />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <DataTable data={datas} columns={dataColumns} />
      </div>
    </div>
  );
}
