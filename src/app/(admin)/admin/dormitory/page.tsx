import AddModal from "@/components/admin/modals/AddModal";
import SearchBar from "@/components/admin/ui/SearchBar";
import DataTable from "@/components/admin/ui/table/Table";
import React from "react";

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
const dataColumns = [
  { key: "name", label: "Name" },
  { key: "owner", label: "Owner" },
  { key: "address", label: "Address" },
  { key: "status", label: "Status" },
];
export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Student Management: Dormitorys</h1>
      <div className="flex justify-between items-center">
        <AddModal />

        <SearchBar name="Dormitory" />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <DataTable data={datas} columns={dataColumns} />
      </div>
    </div>
  );
}
