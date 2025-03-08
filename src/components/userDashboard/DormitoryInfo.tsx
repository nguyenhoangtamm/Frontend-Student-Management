'use client';
import React from 'react';
import Link from 'next/link';

interface Dormitory {
  name: string;
  room: string;
  status: string;
  updated_at: string;
  image: string;
}
interface DormitoryInfoProps {
  data: Dormitory;
}
export default function DormitoryInfo({ data }: DormitoryInfoProps) {
  return (
    <div className='card m-1 text-center' style={{ flex: 1, padding: '10px' }}>
      <div className='card-body'>
        <h3 className='card-title'>Thông tin ngoại trú: </h3>
        <div className='row card-body'>
          <div className='col-md-6 text-left'>
            <p>
              Hình thức chỗ ở: <strong>Ở trọ</strong>
            </p>
            <p className='card-text'>
              Địa chỉ thường trú: <strong>23/p3/caolanh/dongthans</strong>
            </p>
            {data.room && (
              <p className='card-text'>
                Phòng: <strong>{data.room}</strong>
              </p>
            )}
          </div>
          <div className='col-md-6 text-left'>
            <p className='card-text'>
              Trạng thái: <strong className='text-success'>{data.status}</strong>
            </p>
            <p className='card-text'>
              Cập nhật lần cuối: <strong>{new Date(data.updated_at).toLocaleDateString('vi-VN')}</strong>
            </p>
            <Link href='#' className='btn btn-link'>
                Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
