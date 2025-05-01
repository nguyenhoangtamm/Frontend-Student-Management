'use client';
import { Button } from 'antd';
import { MoreVertical, Trash2 } from 'lucide-react';
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
import { useDormitoriesPaging } from '@/services/hooks/useDomitory';
import { DormitoryPaginationType } from '@/schemaValidations/dormitory.schema';
// import DeleteModal from './delete-modal';
// import EditModal from './edit-modal';
import AddModal from './add-modal';
import { FaSearch } from 'react-icons/fa';

// Define dormitory columns for the table
const dormitoryColumns = [
  { key: 'index', label: 'STT' },
  { key: 'name', label: 'Tên KTX' },
  { key: 'address', label: 'Địa chỉ' },
  { key: 'ownerName', label: 'Chủ sở hữu' },
  { key: 'phoneNumber', label: 'Số điện thoại' },
  { key: 'status', label: 'Trạng thái' },
];

const statusColors = {
  1: 'bg-green-500', // Active
  2: 'bg-purple-500', // Pending
  0: 'bg-red-500', // Inactive
};

const statusLabels = {
  1: 'Active',
  2: 'Pending',
  0: 'Inactive',
};

export default function DataTable() {
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectId, setDeleteId] = useState<number | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const { data, refetch } = useDormitoriesPaging({ page: 1, perPage: 5000 });
  const [isFetching, setIsFetching] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [tableData, setTableData] = useState<DormitoryPaginationType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (id: number) => {
    setDeleteId(id);
    setEditOpen(true);
  }

  const handleRefetch = () => {
    refetch();
    setIsRefetching(true);
    console.log('refetching...');
  }

  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [deleteData, setDeleteData] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (data?.data) {
      if (data.data.length === 0) {
        setHasMore(false); // No more data to fetch
      } else {
        setTableData(data.data);
        setHasMore(true); // Still more data
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

  // Select/deselect a row
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
      <div className='flex justify-between items-center'>
        <AddModal onSubmitSuccess={refetch} />
        <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
          <input
            type="text"
            placeholder={`Search dormitory...`}
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
          <Table className='w-full text-center border-collapse'>
            <TableHeader>
              <TableRow className='text-gray-600 '>
                {/* Checkbox column - fixed on the left */}
                <TableHead className='p-3 text-center sticky left-0 bg-white z-10 border-r'>
                  <input
                    className={'cursor-pointer'}
                    type='checkbox'
                    onChange={handleSelectAll}
                    checked={selectedRows.length === tableData.length}
                  />
                </TableHead>

                {dormitoryColumns.map((col) => (
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
                  {/* Checkbox column - fixed on the left */}
                  <TableCell className='p-3 text-center sticky left-0 bg-white z-10 border-r '>
                    <input
                      className={'cursor-pointer'}
                      type='checkbox'
                      checked={selectedRows.includes(index)}
                      onChange={() => handleSelectRow(index)}
                    />
                  </TableCell>

                  {dormitoryColumns.map((col) => (
                    <TableCell
                      key={col.key}
                      className='p-3 text-center min-w-32 '
                    >
                      {col.key === 'status' && 
                        statusColors[item[col.key] as keyof typeof statusColors] ? (
                        <span
                          className={`inline-block w-24 text-center px-3 py-1 text-white rounded-full ${
                            statusColors[item[col.key] as keyof typeof statusColors]
                          }`}
                        >
                          {statusLabels[item[col.key] as keyof typeof statusLabels]}
                        </span>
                      ) : (
                        <span className='text-center'>
                          {col.key === 'index' ? index + 1 : item[col.key as keyof DormitoryPaginationType]}
                        </span>
                      )}
                    </TableCell>
                  ))}

                  {/* Actions column - fixed on the right */}
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
        {/* <DeleteModal
          isOpen={isOpenDelete}
          setOpen={setOpenDelete}
          id={deleteData ? deleteData : 0}
          onSubmitSuccess={handleRefetch}
        /> */}
        {/* <EditModal
          id={selectId}
          open={isEditOpen}
          setOpen={setEditOpen}
          onSubmitSuccess={handleRefetch}
        /> */}
      </div>
    </>
  );
}

