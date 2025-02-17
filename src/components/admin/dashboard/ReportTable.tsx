import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const StudentTable = () => {
  const students = [
    { id: 1, mssv: "0022411787", name: "Nguyễn Văn A", class: "ĐHCNTT22C", bitcoin: "N400.00" },
    { id: 2, mssv: "0022411787", name: "Nguyễn Thị B", class: "ĐHCNTT22A", bitcoin: "N400.00" },
    { id: 3, mssv: "0022411787", name: "Lê Văn C", class: "ĐHCNTP22", bitcoin: "N400.00" },
    { id: 4, mssv: "0022411787", name: "Trần Thị D", class: "ĐHCNSH23B", bitcoin: "N400.00" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-700">Sinh viên chưa khai báo ngoại trú</h2>
      <table className="w-full mt-4 text-left border-collapse">
        <thead>
          <tr className="text-sm text-gray-600">
            <th className="py-2 px-4 font-semibold text-purple-600">STT</th>
            <th className="py-2 px-4 font-semibold text-purple-600">MSSV</th>
            <th className="py-2 px-4 font-semibold text-purple-600">Họ và tên</th>
            <th className="py-2 px-4 font-semibold text-purple-600">Lớp</th>
            <th className="py-2 px-4 font-semibold text-purple-600">Bitcoin</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="text-sm border-t border-gray-200">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{student.mssv}</td>
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.class}</td>
              <td className="py-2 px-4">{student.bitcoin}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-admin-theme text-white p-2 rounded-full shadow-md">
          <FaArrowRight size={30}/>
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
