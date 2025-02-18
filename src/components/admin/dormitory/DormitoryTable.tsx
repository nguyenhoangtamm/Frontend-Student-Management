"use client";
import { Button } from "antd";

import { MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";
import DeleteDormitory from "./modals/DeleteDormitory";

type DormitoryStatus = "Active" | "Pending" | "Down";
const countDormitories = 10080;
const dormitories: {
  id: number;
  name: string;
  owner: string;
  address: string;
  status: DormitoryStatus;
}[] = [
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
const extraDormitories: {
  id: number;
  name: string;
  owner: string;
  address: string;
  status: DormitoryStatus;
}[] = [
  ...dormitories,
  {
    id: 6,
    name: "Nhà trọ F",
    owner: "Nguyễn Thị F",
    address: "303 Đường MNO, TP. HCM",
    status: "Active",
  },
  {
    id: 7,
    name: "Ký túc xá G",
    owner: "Đặng Văn G",
    address: "404 Đường PQR, TP. HCM",
    status: "Pending",
  },
  {
    id: 8,
    name: "Nhà trọ H",
    owner: "Bùi Thị H",
    address: "505 Đường STU, TP. HCM",
    status: "Down",
  },
  {
    id: 9,
    name: "Ký túc xá I",
    owner: "Đỗ Văn I",
    address: "606 Đường VWX, TP. HCM",
    status: "Active",
  },
  {
    id: 10,
    name: "Nhà trọ J",
    owner: "Vũ Thị J",
    address: "707 Đường YZ, TP. HCM",
    status: "Pending",
  },
];

const statusColors = {
  Active: "bg-green-500",
  Pending: "bg-purple-500",
  Down: "bg-red-500",
};

const DormitoryTable: React.FC = () => {
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [dormitoryData, setDormitoryData] = React.useState(dormitories);
  const [viewButton, setViewButton] = React.useState("View More");
  const [check, setCheck] = React.useState(false);
  const handleViewMore = () => {
    if (viewButton === "View More") {
      setDormitoryData(extraDormitories);
      setViewButton("View Less");
      return;
    }
    setDormitoryData(dormitories);
    setViewButton("View More");
  };
  const handleDelete = () => {
    setOpenDelete(true);
    console.log("delete");
  };
  const handleSelectAll = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3" onClick={handleSelectAll}>
                <input type="checkbox" />
              </th>
              <th className="p-3">Mã số</th>
              <th className="p-3">Tên trọ</th>
              <th className="p-3">Chủ trọ</th>
              <th className="p-3">Địa chỉ</th>
              <th className="p-3">Trạng thái</th>
              <th className="p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {dormitoryData.map((dormitory) => (
              <tr key={dormitory.id} className="border-t">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">{dormitory.id}</td>
                <td className="p-3 flex items-center gap-3">
                  {/* <Image src={dormitory.avatar} alt="avatar" className="w-8 h-8 rounded-full" /> */}
                  {dormitory.name}
                </td>
                <td className="p-3">{dormitory.owner}</td>
                <td className="p-3">{dormitory.address}</td>
                <td className="p-3">
                  <span
                    className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full ${
                      statusColors[dormitory.status]
                    }`}
                  >
                    {dormitory.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <Button
                    style={{ border: "none" }}
                    href={"dormitory/" + dormitory.id}
                  >
                    <MdEdit size={16} />
                  </Button>
                  <Button style={{ border: "none" }} onClick={handleDelete}>
                    <Trash2 size={16} />
                  </Button>
                  <Button style={{ border: "none" }}>
                    <MoreVertical size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="p-3 text-gray-600">{countDormitories} Dormitorys</p>
      <DeleteDormitory isOpen={isOpenDelete} setOpen={setOpenDelete} />
      <div className="mt-4 flex justify-center">
        <Button
          type="primary"
          onClick={handleViewMore}
          className="rounded-full bg-admin-theme text-white"
        >
          {viewButton}
        </Button>
      </div>
    </>
  );
};

export default DormitoryTable;
