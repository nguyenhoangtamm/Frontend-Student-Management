// "use client";
// import { Button } from "antd";

// import { MoreVertical, Trash2 } from "lucide-react";
// import Image from "next/image";
// import DeleteModal from "../modals/DeleteModal"; // Đổi tên thành DeleteNotification
// import React from "react";
// import { MdEdit } from "react-icons/md";

// type StudentStatus = "Active" | "Pending" | "Down";

// const conuntStudents = 10080;
// const students: {
//   id: number;
//   status: StudentStatus;
//   name: string;
//   mssv: string;
//   class: string;
//   avatar: string;
// }[] = [
//   {
//     id: 1,
//     status: "Active",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "ĐHVBQ",
//     avatar: "/avatar1.png",
//   },
//   {
//     id: 2,
//     status: "Down",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "1234",
//     avatar: "/avatar2.png",
//   },
//   {
//     id: 3,
//     status: "Active",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "1234",
//     avatar: "/avatar3.png",
//   },
//   {
//     id: 4,
//     status: "Pending",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "",
//     avatar: "/avatar4.png",
//   },
//   {
//     id: 5,
//     status: "Down",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "",
//     avatar: "/avatar5.png",
//   },
// ];
// const extraStudents: {
//   id: number;
//   status: StudentStatus;
//   name: string;
//   mssv: string;
//   class: string;
//   avatar: string;
// }[] = [
//   {
//     id: 1,
//     status: "Active",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "ĐHVBQ",
//     avatar: "/avatar1.png",
//   },
//   {
//     id: 2,
//     status: "Down",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "1234",
//     avatar: "/avatar2.png",
//   },
//   {
//     id: 3,
//     status: "Active",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "1234",
//     avatar: "/avatar3.png",
//   },
//   {
//     id: 4,
//     status: "Pending",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "",
//     avatar: "/avatar4.png",
//   },
//   {
//     id: 5,
//     status: "Down",
//     name: "Ramon Ridwan",
//     mssv: "1234",
//     class: "",
//     avatar: "/avatar5.png",
//   },
//   {
//     id: 6,
//     status: "Active",
//     name: "John Doe",
//     mssv: "5678",
//     class: "ABC",
//     avatar: "/avatar6.png",
//   },
//   {
//     id: 7,
//     status: "Pending",
//     name: "Jane Smith",
//     mssv: "9101",
//     class: "DEF",
//     avatar: "/avatar7.png",
//   },
//   {
//     id: 8,
//     status: "Down",
//     name: "Alice Johnson",
//     mssv: "1121",
//     class: "GHI",
//     avatar: "/avatar8.png",
//   },
//   {
//     id: 9,
//     status: "Active",
//     name: "Bob Brown",
//     mssv: "3141",
//     class: "JKL",
//     avatar: "/avatar9.png",
//   },
//   {
//     id: 10,
//     status: "Pending",
//     name: "Charlie Davis",
//     mssv: "5161",
//     class: "MNO",
//     avatar: "/avatar10.png",
//   },
// ];
// const statusColors = {
//   Active: "bg-green-500",
//   Pending: "bg-purple-500",
//   Down: "bg-red-500",
// };
// const StudentTable: React.FC = () => {
//   const [isOpenDelete, setOpenDelete] = React.useState(false);
//   const [studentData, setStudentData] = React.useState(students);
//   const [viewButton, setViewButton] = React.useState("View More");
//   const [selectedStudents, setSelectedStudents] = React.useState<number[]>([]);

//   const handleViewMore = () => {
//     if (viewButton === "View More") {
//       setStudentData(extraStudents);
//       setViewButton("View Less");
//     } else {
//       setStudentData(students);
//       setViewButton("View More");
//     }
//   };

//   const handleDelete = () => {
//     setOpenDelete(true);
//     console.log("delete");
//   };

//   // Chọn/Bỏ chọn tất cả sinh viên
//   const handleSelectAll = () => {
//     if (selectedStudents.length === studentData.length) {
//       setSelectedStudents([]); // Bỏ chọn tất cả
//     } else {
//       setSelectedStudents(studentData.map((s) => s.id)); // Chọn tất cả
//     }
//   };

//   // Chọn/Bỏ chọn một sinh viên
//   const handleSelectStudent = (id: number) => {
//     setSelectedStudents((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   return (
//     <>
//       <div className="overflow-x-auto">
//         <table className="w-full text-center border-collapse">
//           <thead>
//             <tr className="text-gray-600">
//               <th className="p-3">
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAll}
//                   checked={selectedStudents.length === studentData.length}
//                 />
//               </th>
//               <th className="p-3">MSSV</th>
//               <th className="p-3">Họ Tên</th>
//               <th className="p-3">Lớp</th>
//               <th className="p-3">Account Status</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentData.map((student) => (
//               <tr key={student.id} className="border-t">
//                 <td className="p-3 text-center">
//                   <input
//                     type="checkbox"
//                     checked={selectedStudents.includes(student.id)}
//                     onChange={() => handleSelectStudent(student.id)}
//                   />
//                 </td>
//                 <td className="p-3 text-center">{student.mssv}</td>
//                 <td className="p-3 text-center flex items-center gap-3">
//                   {student.name}
//                 </td>
//                 <td className="p-3 text-center">{student.class}</td>
//                 <td className="p-3 text-center">
//                   <span
//                     className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full ${
//                       statusColors[student.status]
//                     }`}
//                   >
//                     {student.status}
//                   </span>
//                 </td>
//                 <td className="p-3 text-center flex gap-2">
//                   <Button style={{ border: "none" }} href={"student/" + student.id}>
//                     <MdEdit size={16} />
//                   </Button>
//                   <Button style={{ border: "none" }} onClick={handleDelete}>
//                     <Trash2 size={16} />
//                   </Button>
//                   <Button style={{ border: "none" }}>
//                     <MoreVertical size={16} />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <p className="p-3 text-gray-600">{conuntStudents} students</p>
//       <DeleteModal isOpen={isOpenDelete} setOpen={setOpenDelete} />
//       <div className="mt-4 flex justify-center">
//         <Button type="primary" onClick={handleViewMore} className="rounded-full bg-admin-theme text-white">
//           {viewButton}
//         </Button>
//       </div>
//     </>
//   );
// };


// export default StudentTable;

'use client';
import { Button } from 'antd';
import { MoreVertical, Trash2 } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { studentColumns } from '@/constants/table/studentColumns';
import { useStudentsPaging } from '@/services/hooks/useStudentPagination';
import { Student } from '@/schemaValidations/student.schema';
import DeleteModal from '../modals/DeleteModal';

const statusColors = {
  Active: 'bg-green-500',
  Pending: 'bg-purple-500',
  Down: 'bg-red-500',
};

export default function DataTable() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useStudentsPaging({ page, perPage: 5 });
  const [isFetching, setIsFetching] = useState(false);
  const [tableData, setTableData] = useState<Student[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastRowRef = useCallback(
    (node: Element | null) => {
      if (isLoading || isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsFetching(true);
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, isFetching],
  );

  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [viewButton, setViewButton] = React.useState('View More');
  const [deleteData, setDeleteData] = useState<{ id: number; name: string }>({
    id: 0,
    name: '',
  });
  useEffect(() => {
    if (data?.data) {
      setTableData((prev) => [...prev, ...data.data]);
      setIsFetching(false);
    }
  }, [data]);

  const handleSelectAll = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((item, index) => index));
    }
  };

  // Chọn/Bỏ chọn một dòng
  const handleSelectRow = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index],
    );
  };
  const handleDelete = (index: number) => {
    setOpenDelete(true);
    setDeleteData({
      id: tableData[index].id ? tableData[index].id : 0,
      name: tableData[index].fullName ? tableData[index].fullName : '',
    });
  };
  // console.log("observerRef", observerRef);
  // console.log("lastRowRef", lastRowRef);
  return (
    <>
      <div
        className='table-container'
        style={{ maxHeight: '500px', overflow: 'auto' }}
      >
        <Table className='w-full   text-center border-collapse'>
          <TableHeader>
            <TableRow className='text-gray-600 '>
              {/* Cột checkbox - Cố định bên trái */}
              <TableHead className='p-3 text-center sticky left-0 bg-white z-10 border-r'>
                <input
                  className={'cursor-pointer'}
                  type='checkbox'
                  onChange={handleSelectAll}
                  checked={selectedRows.length === tableData.length}
                />
              </TableHead>

              {/* {columns.map((col, colKey) => (
              <TableHead key={colKey} className='p-3 text-center'>
                {col}
              </TableHead>
            ))} */}
              {studentColumns.map((col) => (
                <TableHead key={col.key} className='p-3 text-center'>
                  {col.label}
                </TableHead>
              ))}

              <TableHead className='p-3 text-center sticky right-0 bg-white z-10 border-l'>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableData.map((item, index) => (
              <TableRow
                key={item.id}
                ref={index === tableData.length - 1 ? lastRowRef : null}
              >
                {/* Cột checkbox - Cố định bên trái */}
                <TableCell className='p-3 text-center sticky left-0 bg-white z-10 border-r '>
                  <input
                    className={'cursor-pointer'}
                    type='checkbox'
                    checked={selectedRows.includes(index)}
                    onChange={() => handleSelectRow(index)}
                  />
                </TableCell>

                {studentColumns.map((col) => (
                  <TableCell
                    key={col.key}
                    className='p-3 text-center min-w-32 '
                  >
                    {col.label === 'Status' &&
                      col.key !== 'index' &&
                      statusColors[item[col.key] as keyof typeof statusColors] ? (
                      <span
                        className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full   ${statusColors[
                          item[col.key] as keyof typeof statusColors
                          ]
                          }`}
                      >
                        {item[col.key]}
                      </span>
                    ) : (
                      <span className=' text-center'>
                        {col.key === 'index' ? index + 1 : item[col.key]}
                      </span>
                    )}
                  </TableCell>
                ))}

                {/* Cột Actions - Cố định bên phải */}
                <TableCell
                  className='p-3 text-center sticky right-0 bg-white z-10 border-l'
                  style={{ minWidth: '180px' }}
                >
                  <Button
                    style={{ border: 'none' }}
                    href={'student/' + item.id}
                  >
                    <MdEdit size={16} />
                  </Button>
                  <Button
                    style={{ border: 'none' }}
                    onClick={() => handleDelete(index)}
                  >
                    <Trash2 size={16} />
                  </Button>
                  <Button style={{ border: 'none' }}>
                    <MoreVertical size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isFetching && (
          <>
            <span className='loading loading-bars loading-xl'></span>
            <span className='loading loading-bars loading-xl'></span>
            <span className='loading loading-bars loading-xl'></span>
            <span className='loading loading-bars loading-xl'></span>
          </>
        )}
      </div>
      {/* <p className='p-3 text-gray-600'>{tableData.length} students</p> */}
      <DeleteModal
        isOpen={isOpenDelete}
        setOpen={setOpenDelete}
        data={deleteData}
      />
      {/* <div className='mt-4 flex justify-center'>
        <Button
          type='primary'
          onClick={handleViewMore}
          className='rounded-full bg-admin-theme text-white'
        >
          {viewButton}
        </Button>
      </div> */}
    </>
  );
}
