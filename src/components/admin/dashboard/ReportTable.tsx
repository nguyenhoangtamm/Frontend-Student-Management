'use client';
import { studentColumns } from '@/constants/table/studentColumns';
import { useStudentsPaging } from '@/services/hooks/useStudentPagination';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function StudentTable() {
  const {
    data: data,
    isLoading,
    error,
  } = useStudentsPaging({ page: 1, perPage: 5, residenceStatus: 0 });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md border border-gray-200'>
      <h2 className='text-lg font-semibold text-gray-700'>
        Sinh viên chưa khai báo ngoại trú
      </h2>
      <table className='w-full mt-4 text-left border-collapse'>
        <thead>
          <tr className='text-sm text-gray-600'>
            {studentColumns.map((col) => (
              <th
                key={col.key}
                className='py-2 px-4 font-semibold text-purple-600'
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item, index) => (
            <tr key={item.id} className='text-sm border-t border-gray-200'>
              {studentColumns.map((col) => (
                <td key={col.key} className='py-2 px-4'>
                  {col.key === 'index'
                    ? index + 1
                    : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-end mt-4'>
        <Link
          href='admin/student'
          className='bg-admin-theme text-white p-2 rounded-full shadow-md'
        >
          <FaArrowRight size={30} />
        </Link>
      </div>
    </div>
  );
}
