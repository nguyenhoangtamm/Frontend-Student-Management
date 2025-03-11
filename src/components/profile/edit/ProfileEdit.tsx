'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import InputSelector from './InputSelector';
import { useDormitory } from '@/services/hooks/useDomitory';
import { InputGroup } from 'react-bootstrap';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button } from '@/components/ui/button';
import { ContractType } from '@/schemaValidations/contract.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const EmptyData = {
  room: '',
  price: '',
  status: 'Active' as 'pending' | 'confirmed' | 'Active',
  contractStart: '',
  contractEnd: '',
  dormitory: {
    id: 0,
    name: '',
    ownerName: '',
    fullAddress: '',
    address: '',
    ward: '',
    district: '',
    province: '',

    phoneNumber: '',
    services: [
      {
        name: 'electricity',
        price: 0,
        unit: 'đồng',
      },
      {
        name: 'water',
        price: 0,
        unit: 'đồng',
      },
      {
        name: 'serviceFee',
        price: 0,
        unit: 'đồng',
      },
      {
        name: 'wifi',
        price: 0,
        unit: 'đồng',
      },
    ],
  },
};
export default function ProfileEdit({ data }: { data?: ContractType }) {
  const router = useRouter();
  // State chứa dữ liệu chỉnh sửa
  const [formData, setFormData] = useState(data || EmptyData);
  const [showInput, setShowInput] = useState(false);

  // Giả lập lưu dữ liệu
  const handleSave = () => {
    // router.push('/profile'); // Điều hướng về trang chính
  };

  const handleMoreService = () => {
    setShowInput(!showInput);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const keys = name.split('.');
      const updatedData = { ...prevData };
      let current = updatedData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updatedData;
    });
  };
  return (
    <div className='container mt-4'>
      <div className='card p-4 shadow-sm'>
        <h5 className='fw-bold text-primary'>Chỉnh sửa thông tin ngoại trú</h5>
        <hr />
        <div className='row mt-3 mb-3'>
          <div className='col-md-6'>
            <label className='form-label'>Trạng thái</label>
            <select
              className='form-select'
              name='status'
              value={formData?.status}
              onChange={handleChange}
            >
              <option value=''>Ở nhà</option>
              <option value='confirmed'>Ký túc xá</option>
              <option value='Active'>Ở trọ</option>
            </select>
          </div>
        </div>
        <h6 className='fw-bold text-secondary'>Thông tin nhà trọ</h6>
        <div className='row mt-3'>
          <div className='col-md-6'>
            <label className='form-label'>Chủ trọ</label>
            <input
              type='text'
              className='form-control'
              name='dormitory.ownerName'
              value={formData?.dormitory.ownerName}
              placeholder='Nhập tên chủ trọ'
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Số điện thoại</label>
            <input
              type='tel'
              className='form-control'
              name='dormitory.phoneNumber'
              value={formData?.dormitory.phoneNumber}
              placeholder='Nhập số điện thoại'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label className='form-label'>Tỉnh/ Thành phố</label>
            <input
              type='text'
              className='form-control'
              name='dormitory.province'
              value={formData?.dormitory.province}
              placeholder='Nhập tỉnh/thành phố'
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Thành phố/ huyện</label>
            <input
              type='text'
              className='form-control'
              name='dormitory.district'
              value={formData?.dormitory.district}
              placeholder='Nhập thành phố'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label className='form-label'>Xã/ Phường</label>
            <input
              type='text'
              className='form-control'
              name='dormitory.ward'
              value={formData?.dormitory.ward}
              placeholder='Nhập xã/phường'
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Địa chỉ</label>
            <input
              type='text'
              className='form-control'
              name='dormitory.address'
              value={formData?.dormitory.address}
              placeholder='Nhập địa chỉ'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'>Địa chỉ</label>
          <input
            type='text'
            className='form-control'
            name='dormitory.fullAddress'
            value={formData?.dormitory.fullAddress}
            placeholder='Nhập địa chỉ'
            onChange={handleChange}
          />
        </div>
        <h6 className='fw-bold text-secondary mt-4'>Thông tin hợp đồng</h6>
        <div className='row mt-3'>
          <div className='col-md-6'>
            <label className='form-label'>Phòng</label>
            <input
              type='text'
              className='form-control'
              name='room'
              value={formData?.room}
              placeholder='Nhập số phòng'
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Trạng Thái</label>
            <br />
            <input
              type='text'
              className='form-control'
              name='status'
              value={formData?.status}
              placeholder='Trạng thái'
              onChange={handleChange}
            />
          </div>
        </div>

        <h6 className='fw-bold text-secondary mt-4'>Chi phí sinh hoạt</h6>
        <div className='row mt-3'>
          <div className='col-md-6'>
            <label className='form-label'>Phí ngoại trú</label>
            <input
              type='number'
              className='form-control'
              name='price'
              value={formData?.price}
              placeholder='Nhập phí ngoại trú'
              onChange={handleChange}
            />
          </div>
        </div>
        {showInput && (
          <div className='row mt-3'>
            {formData?.dormitory.services.map((service, index) => (
              <div className='col-md-6' key={index}>
                <label className='form-label'>{service.name}</label>
                <div className='input-group '>
                  <input
                    type='number'
                    className='form-control m-2'
                    name={`dormitory.services.${index}.price`}
                    value={service.price}
                    placeholder={`Nhập ${service.name}`}
                    onChange={handleChange}
                  />
                  <label className='form-label m-2'>{service.unit}</label>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='text-start mt-4'>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={handleMoreService}
          >
            {showInput ? 'Ẩn chi tiết' : 'Thêm chi tiết'}
          </button>
        </div>

        <div className='text-end mt-4'>
          <button
            className='btn btn-outline-secondary me-2'
            onClick={() => router.back()}
          >
            Hủy
          </button>
          <button className='btn btn-primary' onClick={handleSave}>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
