"use client";
import { Button } from "antd";
import { MoreVertical, Trash2 } from "lucide-react";
import React from "react";
import { MdEdit } from "react-icons/md";
import DeleteModal from "../../modals/DeleteModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableColumn {
  key: string;
  label: string;
}
const statusColors = {
  Active: "bg-green-500",
  Pending: "bg-purple-500",
  Down: "bg-red-500",
};

interface TableProps {
  data: Record<string, any>[]; // Mảng dữ liệu linh hoạt
  columns: TableColumn[]; // Danh sách cột
}

export default function DataTable({ data, columns }: TableProps) {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [viewButton, setViewButton] = React.useState("View More");

  // Chọn/Bỏ chọn tất cả dòng
  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((item, index) => index));
    }
  };

  // Chọn/Bỏ chọn một dòng
  const handleSelectRow = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
    );
  };
  const handleViewMore = () => {
    if (viewButton === "View More") {
      setViewButton("View Less");
    } else {
      setViewButton("View More");
    }
  };
  const handleDelete = () => {
    setOpenDelete(true);
    console.log("delete");
  };
  return (
    <>
      <Table className="w-full   text-center border-collapse" scroll={true}>
        <TableHeader>
          <TableRow className="text-gray-600 ">
            {/* Cột checkbox - Cố định bên trái */}
            <TableHead className="p-3 text-center sticky left-0 bg-white z-10 border-r">
              <input
              className={"cursor-pointer"}
              
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.length === data.length}
              />
            </TableHead>

            {columns.map((col) => (
              <TableHead key={col.key} className="p-3 text-center">
                {col.label}
              </TableHead>
            ))}

            <TableHead className="p-3 text-center sticky right-0 bg-white z-10 border-l">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-t">
              {/* Cột checkbox - Cố định bên trái */}
              <TableCell className="p-3 text-center sticky left-0 bg-white z-10 border-r ">
                <input
                className={"cursor-pointer"}
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleSelectRow(index)}
                />
              </TableCell>

              {columns.map((col) => (
                <TableCell key={col.key} className="p-3 text-center">
                  {col.key === "status" ? (
                    <span
                      className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full   ${
                        statusColors[row[col.key]]
                      }`}
                    >
                      {row[col.key]}
                    </span>
                  ) : (
                    <span>{row[col.key]}</span>
                  )}
                </TableCell>
              ))}

              {/* Cột Actions - Cố định bên phải */}
              <TableCell
                className="p-3 text-center sticky right-0 bg-white z-10 border-l"
                style={{ minWidth: "180px" }}
              >
                <Button style={{ border: "none" }} href={"student/" + row.id}>
                  <MdEdit size={16} />
                </Button>
                <Button style={{ border: "none" }} onClick={handleDelete}>
                  <Trash2 size={16} />
                </Button>
                <Button style={{ border: "none" }}>
                  <MoreVertical size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p className="p-3 text-gray-600">{data.length} students</p>
      <DeleteModal isOpen={isOpenDelete} setOpen={setOpenDelete} />
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
}
