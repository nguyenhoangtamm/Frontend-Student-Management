'use client';
import { useAdminStats } from '@/services/hooks/useAdminStatus';
import { Users, HotelIcon, Check } from 'lucide-react';
import { IoMdClose } from 'react-icons/io';

const stats = [
  {
    title: 'Total Students',
    value: '40,689',
    icon: <Users className='text-purple-500' size={32} />,
    percentage: '8.5% Up from yesterday',
    trend: 'up',
    bgColor: 'bg-purple-100',
    textColor: 'text-green-600',
  },
  {
    title: 'Total Dormitories',
    value: '10,293',
    icon: <HotelIcon className='text-yellow-500' size={32} />,
    percentage: '1.3% Up from past week',
    trend: 'up',
    bgColor: 'bg-yellow-100',
    textColor: 'text-green-600',
  },
  {
    title: 'Total Confirmed',
    value: '1,040',
    icon: <Check className='text-green-500' size={32} />,
    percentage: '0.5% Down from yesterday',
    trend: 'down',
    bgColor: 'bg-green-100',
    textColor: 'text-red-600',
  },
  {
    title: 'Total Uncomfirmed',
    value: '1,040',
    icon: <IoMdClose className='text-red-500' size={32} />,
    percentage: '0.5% Down from yesterday',
    trend: 'down',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
];

export default function StatsCards() {
  const { data: data, isLoading, error } = useAdminStats();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  stats[0].value = data ? data.students.toString() : 'N/A';
  stats[1].value = data ? data.dormitories.toString() : 'N/A';
  stats[2].value = data ? data.confirmedStudents.toString() : 'N/A';
  stats[3].value = data ? data.unconfirmedStudents.toString() : 'N/A';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-100'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='bg-white p-6 rounded-xl shadow-md flex flex-col gap-3'
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor}`}
          >
            {stat.icon}
          </div>
          <h3 className='text-gray-600 text-sm font-medium'>{stat.title}</h3>
          <p className='text-2xl font-semibold'>{stat.value}</p>
          <p className={`text-sm ${stat.textColor}`}>
            {stat.trend === 'up' ? '⬆️' : '⬇️'} {stat.percentage}
          </p>
        </div>
      ))}
    </div>
  );
}
