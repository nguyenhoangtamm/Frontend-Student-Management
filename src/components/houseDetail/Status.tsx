import React from 'react';

interface StatusProps {
  status: string;
  studentNumber: number;
}

export default function Status({ status, studentNumber }: StatusProps) {
  return (
    <div className='p-4 bg-white shadow rounded-lg flex flex-row'>
    <div className='mr-4 w-full'>
        <h2 className='text-xl font-semibold mb-4'>Status</h2>
        <div className='flex flex-row space-x-8'>
          <div className='flex mb-2'>
            <span className='text-gray-600'>Trạng thái:</span>
            <span className='text-green-500 ml-2'>{status}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-600'>Số lượng sinh viên:</span>
            <span className='text-blue-500 ml-2'>{studentNumber}</span>
          </div>
         
        </div>
      </div>
    </div>
  );
}
