"use client";
import { Button } from "antd";

import { MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";
import DeleteStudent from "../modals/DeleteStudent";
import React from "react";
import { MdEdit } from "react-icons/md";

type StudentStatus = "Active" | "Pending" | "Down";

const conuntStudents = 10080;
const students: {
  id: number;
  status: StudentStatus;
  name: string;
  mssv: string;
  class: string;
  avatar: string;
}[] = [
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
];
const extraStudents: {
  id: number;
  status: StudentStatus;
  name: string;
  mssv: string;
  class: string;
  avatar: string;
}[] = [
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
const statusColors = {
  Active: "bg-green-500",
  Pending: "bg-purple-500",
  Down: "bg-red-500",
};

const StudentTable: React.FC = () => {
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [studentData, setStudentData] = React.useState(students);
  const [viewButton, setViewButton] = React.useState("View More");
  const [check, setCheck] = React.useState(false);
  const handleViewMore = () => {
    if (viewButton === "View More") {
      setStudentData(extraStudents);
      setViewButton("View Less");
      return;
    }
    setStudentData(students);
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
              <th className="p-3">MSSV</th>

              <th className="p-3">Họ Tên</th>
              <th className="p-3">Lớp</th>
              <th className="p-3">Account Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">
                  <input type="checkbox" checked={check} />
                </td>
                <td className="p-3">{student.mssv}</td>
                <td className="p-3 flex items-center gap-3">
                  {/* <Image src={student.avatar} alt="avatar" className="w-8 h-8 rounded-full" /> */}
                  {student.name}
                </td>
                <td className="p-3">{student.class}</td>
                <td className="p-3">
                  <span
                    className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full ${
                      statusColors[student.status]
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <Button
                    style={{ border: "none" }}
                    href={"student/" + student.id}
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
      <p className="p-3 text-gray-600">{conuntStudents} students</p>
      <DeleteStudent isOpen={isOpenDelete} setOpen={setOpenDelete} />
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

export default StudentTable;
