'use client';
import { Button } from 'antd';
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
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
import AddModal from './add-modal';
import { FaSearch } from 'react-icons/fa';
import { useStudentClass } from '@/services/hooks/useStudentClass';
import { useMajor } from '@/services/hooks/useMajor';

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
  const { data, refetch } = useStudentsPaging({ page: 1, perPage: 5000 });
  const [isFetching, setIsFetching] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [tableData, setTableData] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const observer = useRef<IntersectionObserver | null>(null);

  // class
  const [classOptions, setClassOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: classData } = useStudentClass();
  useEffect(() => {
    if (classData) {
      setClassOptions(classData);
    }

  }, [classData]);
  // major
  const [majorOptions, setMajorOptions] = useState<{ name: string; id: number }[]>([]);
  const { data: majorData } = useMajor();
  useEffect(() => {
    if (majorData) {
      setMajorOptions(majorData);
    }
  }, [majorData]);


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
  const [deleteData, setDeleteData] = useState<number | undefined>(undefined);
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
  const handleDelete = (id: number) => {
    setOpenDelete(true);
    setDeleteData(id);
  };
  // console.log("observerRef", observerRef);
  // console.log("lastRowRef", lastRowRef);
  const handleSearch = (keyword: string) => {
    setSearchTerm(keyword);
    const filteredData = data?.data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
    setTableData(filteredData || []);
  }
  return (
    <>

      <div className='flex   justify-between items-center'>
        <AddModal onSubmitSuccess={refetch} />
        <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
          {/* <FilterTable filter={filters} /> */}
          <input
            type="text"
            placeholder={`Search student...`}
            className="w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

          />
          <Button
            type='primary'
            onClick={() => handleSearch(searchTerm)}
            className='rounded-full bg-admin-theme text-white'
          >
            <FaSearch className="text-gray-500 text-white" />
          </Button>
        </div>
      </div>
      <div className='bg-white p-6 rounded-2xl shadow-md border border-gray-200'>

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
                      className='p-3 text-center'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {col.label === 'Status' &&
                        col.key !== 'index' &&
                        statusColors[item[col.key] as keyof typeof statusColors] ? (
                        <span
                          className={`inline-block text-center px-3 py-1 text-white rounded-full ${statusColors[
                            item[col.key] as keyof typeof statusColors
                          ]}`}
                        >
                          {item[col.key]}
                        </span>
                      ) : col.key === 'fullName' ? (
                        <a
                          href={`/admin/student/${item.id}`}
                          className='text-blue-500 hover:underline'
                        >
                          {item[col.key]}
                        </a>
                      ) : col.key === 'classId' ? (
                        <span className='text-center'>
                          {classOptions.find((option) => option.id === item[col.key as keyof typeof item])?.name}
                        </span>
                      ) : col.key === 'majorId' ? (
                        <span className='text-center'>
                          {majorOptions.find((option) => option.id === item[col.key as keyof typeof item])?.name}
                        </span>
                      )


                        : (
                          <span className='text-center'>
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
          id={deleteData ? deleteData : 0}
          onSubmitSuccess={handleRefetch}
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
      </div>
    </>
  );
}
