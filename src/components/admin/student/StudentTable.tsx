import { Button } from "react-bootstrap";

import { Edit, MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";

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
const statusColors = {
  Active: "bg-green-500",
  Pending: "bg-purple-500",
  Down: "bg-red-500",
};

const StudentTable: React.FC = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Account Status</th>
              <th className="p-3">Họ Tên</th>
              <th className="p-3">MSSV</th>
              <th className="p-3">Lớp</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <span
                    className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full ${
                      statusColors[student.status]
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-3 flex items-center gap-3">
                  {/* <Image src={student.avatar} alt="avatar" className="w-8 h-8 rounded-full" /> */}
                  {student.name}
                </td>
                <td className="p-3">{student.mssv}</td>
                <td className="p-3">{student.class}</td>
                <td className="p-3 flex gap-2">
                  <Button variant="outline">
                    <Edit size={16} />
                  </Button>
                  <Button variant="outline">
                    <Trash2 size={16} />
                  </Button>
                  <Button variant="outline">
                    <MoreVertical size={16} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="p-3 text-gray-600">{conuntStudents} students</p>
    </>
  );
};

export default StudentTable;
