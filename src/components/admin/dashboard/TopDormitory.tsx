'use client';
import { useDormitoriesPaging } from "@/services/hooks/useDomitory";
import Link from "next/link";
import React from "react";

const TopDormitory = () => {
  const {
    data: data,
    isLoading,
    error,
  } = useDormitoriesPaging({ page:1, perPage: 20, sortBy: 'students', sortOrder: 'desc' });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div className="bg-admin-theme p-6 rounded-2xl shadow-lg text-white relative">
      <h2 className="text-xl font-bold">Top nhà trọ</h2>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
            🏆
          </div>
          <span className="mt-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white py-1 px-3 rounded-full text-sm font-bold">
            Top 1
          </span>
          <h3 className="text-lg font-bold mt-2">{data?.data[0].name}</h3>
          <p>Số lượng sinh viên hiện tại: {data?.data[0].students}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mt-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white py-1 px-3 rounded-full text-sm font-bold">
            Top 2
          </span>
          <h3 className="text-lg font-bold mt-2">{data?.data[1].name}</h3>
          <p>Số lượng sinh viên hiện tại: {data?.data[1].students}</p>
        </div>
      </div>
      <Link href={"/admin/dormitory"} className="absolute top-4 right-4 bg-white text-pink-500 font-bold py-2 px-4 rounded-full shadow-lg">
        Chi tiết &gt;&gt;
      </Link>
    </div>
  );
};

export default TopDormitory;
