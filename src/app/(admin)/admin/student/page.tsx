'use client';

import AddModal from '@/components/admin/modals/AddModal';
import SearchBar from '@/components/admin/ui/SearchBar';

import React from 'react';
import { IdCard, User, School, CheckCircle } from 'lucide-react';
import StatsCards from '@/components/admin/ui/Stats';
import { StatProps } from '@/interface/statProps';
import {

  useStudentsStatistics,
} from '@/services/hooks/useAdminStatus';
import { studentsStatistics } from '@/constants/chart/student';
import { pieChartColors } from '@/constants/chart/color/pieChart';
import { IFilter } from '@/interface/filter/filter';
import { studentFiels } from '@/constants/addEntity/studentFiel';
import DataTable from './student-table';


const filters: IFilter[] = [
  {
    id: '1',
    label: 'MSSV',
    icon: IdCard,
    option: ['1234', '5678', '9101', '1121', '3141', '5161'],
  },
  {
    id: '2',
    label: 'Họ Tên',
    icon: User,
    option: [
      'Ramon Ridwan',
      'John Doe',
      'Jane Smith',
      'Alice Johnson',
      'Bob Brown',
      'Charlie Davis',
    ],
  },
  {
    id: '3',
    label: 'Lớp',
    icon: School,
    option: ['ĐHVBQ', '1234', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO'],
  },
  {
    id: '4',
    label: 'Trạng thái',
    icon: CheckCircle,
    option: ['Đã khai báo', 'Chưa khai báo', 'Chờ duyệt'],
  },
];

const stats: StatProps[] = [
  {
    name: 'Total Students',
    label: studentsStatistics,
    labelNote: 'Total',
    dataChart: [],
    backgroundColor: pieChartColors.backgroundColor,
    borderColor: pieChartColors.borderColor,
    borderWidth: 1,
    position: 'right',
  },
  // {
  //   name: "Total Dormitories",
  //   label: ["Dormitories"],
  //   labelNote: "Total",
  //   dataChart: [1040, 1040],
  //   backgroundColor: ["rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
  //   borderColor: ["rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
  //   borderWidth: 1,
  //   position: "right",
  // },
  // {
  //   name: "Total Confirmed",
  //   label: ["Confirmed"],
  //   labelNote: "Total",
  //   dataChart: [1040, 1040],
  //   backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)"],
  //   borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
  //   borderWidth: 1,
  //   position: "right",
  // },
  // {
  //   name: "Total Unconfirmed",
  //   label: ["Unconfirmed"],
  //   labelNote: "Total",
  //   dataChart: [1040, 1040],
  //   backgroundColor: ["rgba(255, 159, 64, 0.6)", "rgba(54, 162, 235, 0.6)"],
  //   borderColor: ["rgba(255, 159, 64, 1)", "rgba(54, 162, 235, 1)"],
  //   borderWidth: 1,
  //   position: "right",
  // },
];
export default function Page() {
  const { data, isLoading, error } = useStudentsStatistics();

  if (data) {
    stats[0].dataChart = Object.values(data);
  }
  return (
    <div className='flex flex-col gap-6 container '>
      <h1 className='text-2xl font-bold'>Student Management: Students</h1>
      <h4 className='text-gray-600'>Students OverView</h4>

      <StatsCards stats={stats} />
      <hr />
      <h4 className='text-gray-600'>Students data</h4>
      <div className='flex   justify-between items-center'>
        <AddModal
          name='Student'
          dataType={studentFiels}
        />
        <SearchBar name='Student' filters={filters} />
      </div>
      <div className='bg-white p-6 rounded-2xl shadow-md border border-gray-200'>
        <DataTable />
      </div>
    </div>
  );
}
