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
import DeleteModal from './delete-modal';
import EditModal from './edit-modal';

const statusColors = {
  Active: 'bg-green-500',
  Pending: 'bg-purple-500',
  Down: 'bg-red-500',
};

export default function DataTable() {
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectId, setDeleteId] = useState<number | undefined>(undefined);
  // const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { data, refetch } = useStudentsPaging({ page:1, perPage: 5000 });
  const [isFetching, setIsFetching] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [tableData, setTableData] = useState<Student[]>([]);
  // const observer = useRef<IntersectionObserver | null>(null);

  const handleEdit = (id: number) => {
    setDeleteId(id);
    setEditOpen(true);

  }
  const handleRefetch = () => {

    refetch();
    setIsRefetching(true);
    console.log('refetching...');
  }
  // const lastRowRef = useCallback(
  //   (node: Element | null) => {
  //     if || isFetching || !hasMore) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         setIsFetching(true);
  //         setPage((prevPage) => prevPage + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isLoading, isFetching, hasMore],
  // );

  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [deleteData, setDeleteData] = useState<{ id: number; name: string }>({
    id: 0,
    name: '',
  });
  useEffect(() => {
    if (data?.data) {
      if (data.data.length === 0) {
        setHasMore(false); // Không còn dữ liệu để fetch
      } else {
        setTableData(data.data);

        setHasMore(true); // Vẫn còn dữ liệu
      }
      setIsFetching(false);
    }
  }, [data, isRefetching]);
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
                    onClick={() => handleEdit(item.id)}
                  >
                    <MdEdit size={16} />
                  </Button>
                  <Button
                    style={{ border: 'none' }}
                    onClick={() => handleDelete(item.id)}
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
        {!hasMore && (
          <p className="text-center text-gray-500 mt-4">Không còn dữ liệu để hiển thị</p>
        )}
      </div>
      {/* <p className='p-3 text-gray-600'>{tableData.length} students</p> */}
      <DeleteModal
        isOpen={isOpenDelete}
        setOpen={setOpenDelete}
        data={deleteData}
      />
      <EditModal
        id={selectId}
        open={isEditOpen}
        setOpen={setEditOpen}
        onSubmitSuccess={handleRefetch}

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
