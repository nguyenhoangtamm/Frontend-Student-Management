'use client';

import React from 'react';
import DataTable from './notification-table';


export default function Page() {

  return (
    <div className='flex flex-col gap-6 container '>
      <h1 className='text-2xl font-bold'>Student Management: Notifications</h1>
      <h4 className='text-gray-600'>Notifications data</h4>
      <DataTable />
    </div>
  );
}
