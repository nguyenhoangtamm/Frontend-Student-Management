'use client';
import { Button } from 'antd';
import { MoreVertical, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import DeleteModal from '../../modals/DeleteModal';
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

const statusColors = {
  Active: 'bg-green-500',
  Pending: 'bg-purple-500',
  Down: 'bg-red-500',
};
export default function DataTable() {
  const {
    data: data,
    isLoading,
    error,
  } = useStudentsPaging({ page: 1, perPage: 5 });
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [viewButton, setViewButton] = React.useState('View More');
  const [deleteData, setDeleteData] = useState<{ id: number; name: string }>({
    id: 0,
    name: '',
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Chọn/Bỏ chọn tất cả dòng
  const handleSelectAll = () => {
    if (selectedRows.length === data?.data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data?.data.map((item, index) => index));
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
  const handleViewMore = () => {
    if (viewButton === 'View More') {
      setViewButton('View Less');
    } else {
      setViewButton('View More');
    }
  };
  const handleDelete = (index: number) => {
    setOpenDelete(true);
    setDeleteData({
      id: data?.data[index].id? data?.data[index].id : 0,
      name: data?.data[index].fullName ? data?.data[index].fullName : '',
    });
  };
  return (
    <>
      <Table className='w-full   text-center border-collapse'>
        <TableHeader>
          <TableRow className='text-gray-600 '>
            {/* Cột checkbox - Cố định bên trái */}
            <TableHead className='p-3 text-center sticky left-0 bg-white z-10 border-r'>
              <input
                className={'cursor-pointer'}
                type='checkbox'
                onChange={handleSelectAll}
                checked={selectedRows.length === data?.data.length}
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
          {data?.data.map((item, index) => (
            <TableRow key={item.id} className='border-t'>
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
                <TableCell key={col.key} className='p-3 text-center min-w-32 '>
                  {col.label === 'Status' &&
                  col.key !== 'index' &&
                  statusColors[item[col.key] as keyof typeof statusColors] ? (
                    <span
                      className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full   ${
                        statusColors[item[col.key] as keyof typeof statusColors]
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
                <Button style={{ border: 'none' }} href={'student/' + item.id}>
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

      <p className='p-3 text-gray-600'>{data?.data.length} students</p>
      <DeleteModal
        isOpen={isOpenDelete}
        setOpen={setOpenDelete}
        data={deleteData}
      />
      <div className='mt-4 flex justify-center'>
        <Button
          type='primary'
          onClick={handleViewMore}
          className='rounded-full bg-admin-theme text-white'
        >
          {viewButton}
        </Button>
      </div>
    </>
  );
}
