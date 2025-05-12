'use client';
import { Button } from 'antd';
import { Send, Trash2 } from 'lucide-react';
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
// import DeleteModal from './delete-modal';
// import EditModal from './edit-modal';
import AddModal from './add-modal';
import { FaSearch } from 'react-icons/fa';
import EditModal from './edit-modal';
import DeleteModal from './delete-modal';
import { NotificationType } from '@/schemaValidations/notification.schema';
import { useNotificationsPaging } from '@/services/hooks/useNotification';
import SendModal from './send-modal';


const notificationTypes = [
  { id: 1, name: 'Thông báo' },
  { id: 2, name: 'Cảnh báo' },
  { id: 3, name: 'Khuyến cáo' },
  { id: 4, name: 'Thông báo khẩn' },
]
// Define dormitory columns for the table
const notificationColumns = [
  { key: 'index', label: 'STT' },
  { key: 'title', label: 'Tiêu đề' },
  { key: 'type', label: 'Loại thông báo' },
  { key: 'views', label: 'Đã xem' },
  { key: 'send', label: 'Đã gửi' },
];
const notificationTypesColors = [
  { id: 1, color: 'bg-blue-500' }, // Thông báo
  { id: 2, color: 'bg-yellow-500' }, // Cảnh báo
  { id: 3, color: 'bg-green-500' }, // Khuyến cáo
  { id: 4, color: 'bg-red-500' }, // Thông báo khẩn
]
const sendStatusColors = [
  { id: 0, color: 'bg-red-500' }, // Chưa gửi
  { id: 1, color: 'bg-green-500' }, // Đã gửi
]



export default function DataTable() {
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectId, setDeleteId] = useState<number | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const { data, refetch } = useNotificationsPaging({ page: 1, perPage: 5000 });
  const [isFetching, setIsFetching] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [tableData, setTableData] = useState<NotificationType[]>([]);
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

  const [isOpenSend, setOpenSend] = React.useState(false);
  const [sendData, setSendData] = useState<number | undefined>(undefined);

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

  const handleSend = (id: number) => {
    setOpenSend(true);
    setSendData(id);
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

                {notificationColumns.map((col) => (
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

                  {notificationColumns.map((col) => (
                    <TableCell
                      key={col.key}
                      className='p-3 text-center min-w-32'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {col.key === 'type' ? (
                      <span
                        className={`inline-block text-center px-3 py-1 text-white rounded-full ${
                        notificationTypesColors.find((type) => type.id === item[col.key as keyof NotificationType])?.color
                        }`}
                      >
                        {notificationTypes.find((type) => type.id === item[col.key as keyof NotificationType])?.name}
                      </span>
                      ) : col.key === 'send' ? (
                      <span
                        className={`inline-block text-center px-3 py-1 text-white rounded-full ${
                        sendStatusColors.find((status) => status.id === (item[col.key as keyof NotificationType] ? 1 : 0))?.color
                        }`}
                      >
                        {item[col.key as keyof NotificationType] ? 'Đã gửi' : 'Chưa gửi'}
                      </span>
                      ) : (
                      <span className='text-center'>
                        {col.key === 'index' ? index + 1 : item[col.key as keyof NotificationType]}
                      </span>
                      )}
                    </TableCell>
                  ))}
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
                    <Button
                      style={{ border: 'none' }}
                      onClick={() => handleSend(item.id)}
                    >
                      <Send size={16} />
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
        <DeleteModal
          isOpen={isOpenDelete}
          setOpen={setOpenDelete}
          id={deleteData ? deleteData : 0}
          onSubmitSuccess={handleRefetch}
        />
        <SendModal
          isOpen={isOpenSend}
          setOpen={setOpenSend}
          id={sendData ? sendData : 0}
          onSubmitSuccess={handleRefetch}
        />
        <EditModal
          id={selectId}
          open={isEditOpen}
          setOpen={setEditOpen}
          onSubmitSuccess={handleRefetch}
        />
      </div>
    </>
  );
}

