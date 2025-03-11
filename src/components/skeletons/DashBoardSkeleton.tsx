import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function DashBoardSkeleton() {
  return (
    <div className='flex flex-wrap p-5 font-sans'>
      {/* Phần chính bên trái */}
      <div className='flex-1 min-w-[300px] md:flex-[1_1_70%]'>
        <div className='flex flex-col md:flex-row justify-between flex-wrap'>
          <Skeleton height={200} width={550} />
          <Skeleton height={200} width={550} />
        </div>
        <Skeleton height={400} />
        <Skeleton height={300} />
      </div>

    </div>
  );
}
