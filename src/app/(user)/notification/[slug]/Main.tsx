'use client';
import { useNotification } from '@/services/hooks/useNotification';
import React from 'react';

export default function Main({slug}: {slug: string}) {
  const { data, isLoading, error } = useNotification(slug);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold text-gray-900 mb-4'>
        Hướng dẫn đăng ký thi lại, đánh giá lại học phần đã được duyệt hoãn thi
        (điểm I)
      </h1>
      <p className='text-gray-700'>{data?.content}</p>
    </div>
  );
}
