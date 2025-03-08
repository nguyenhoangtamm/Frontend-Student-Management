'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import InputSelector from './InputSelector';
import { useDormitory } from '@/services/hooks/useDomainarie';
import { InputGroup } from 'react-bootstrap';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button } from '@/components/ui/button';
import { ContractType } from '@/schemaValidations/contract.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

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
    address: '',
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
  const [isReadonly, setIsReadonly] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(0);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { data: currentDormitory } = useDormitory(selected);
  // const form = useForm<LoginBodyType>({
  //   resolver: zodResolver(LoginBody),
  //   defaultValues: {
  //     username: '',
  //     password: '',
  //   },
  // });
  useEffect(() => {
    if (isFetching) {
      if (!currentDormitory) return;
      setFormData({
        ...formData,
        dormitory: currentDormitory,
      });
      setIsFetching(false);
    }
  }, [currentDormitory, isFetching]);

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Giả lập lưu dữ liệu
  const handleSave = () => {
    console.log('Dữ liệu đã lưu:', formData);
    // router.push('/profile'); // Điều hướng về trang chính
  };
  const handleSelect = (selected: string) => {
    setSelected(Number(selected));
    setIsFetching(true);
  };
  const handleCustomInput = () => {
    setShowInput(!showInput);
    setIsReadonly(!isReadonly);
    setFormData(EmptyData);
  };

  return (
    <div className='container mt-4'>
      <div className='card p-4 shadow-sm'>
        <h5 className='fw-bold text-primary'>Chỉnh sửa thông tin ngoại trú</h5>
        <hr />
        <div className='row mt-3'>
          <InputSelector onChange={handleSelect} />
          <div className='col-md-12 mt-3'>
            <InputGroup>
              <Button onClick={() => handleCustomInput()}>Khác</Button>
              {showInput && (
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nhập thông tin khác'
                />
              )}
            </InputGroup>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-6'>
            <label className='form-label'>Chủ trọ</label>
            <input
              readOnly={isReadonly}
              type='text'
              className='form-control'
              name='landlord'
              value={formData?.dormitory.ownerName}
              onChange={handleChange}
              placeholder='Nhập tên chủ trọ'
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Số điện thoại</label>
            <input
              readOnly={isReadonly}
              type='tel'
              className='form-control'
              name='landlordPhone'
              value={formData?.dormitory.phoneNumber}
              onChange={handleChange}
              placeholder='Nhập số điện thoại'
            />
          </div>
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'>Địa chỉ</label>
          <input
            readOnly={isReadonly}
            type='text'
            className='form-control'
            name='address'
            value={formData?.dormitory.address}
            onChange={handleChange}
            placeholder='Nhập địa chỉ'
          />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <label className='form-label'>Quận/Huyện</label>
            <input
              readOnly={isReadonly}
              type='text'
              className='form-control'
              name='district'
              value={formData?.dormitory.address}
              onChange={handleChange}
              placeholder='Nhập quận/huyện'
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Thành phố</label>
            <input
              readOnly={isReadonly}
              type='text'
              className='form-control'
              name='city'
              value={formData?.dormitory.address}
              onChange={handleChange}
              placeholder='Nhập thành phố'
            />
          </div>
        </div>

        <div className='row mt-3'>
          <div className='col-md-6'>
            <label className='form-label'>Phòng</label>
            <input
              type='text'
              className='form-control'
              name='room'
              value={formData?.room}
              onChange={handleChange}
              placeholder='Nhập số phòng'
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
              onChange={handleChange}
              placeholder='Trạng thái'
            />
          </div>
        </div>

        <div className='row mt-3'>
          <Space direction='vertical' size={12} style={{ width: '100%' }}>
            <label className='form-label'>Chọn thời hạn hợp đồng</label>
            <RangePicker
              // disabledDate={disabledDate}
              placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
              format={dateFormat}
              value={
                formData?.contractStart && formData?.contractEnd
                  ? [
                      dayjs(formData?.contractStart, dateFormat),
                      dayjs(formData?.contractEnd, dateFormat),
                    ]
                  : undefined
              }
              onChange={(dates, dateStrings) => {
                setFormData({
                  ...formData,
                  contractStart: dateStrings[0],
                  contractEnd: dateStrings[1],
                });
              }}
            />
          </Space>
        </div>

        <div className='row mt-3'>
          <div className='col-md-6'>
            <label className='form-label'>Phí ngoại trú</label>
            <input
              type='number'
              className='form-control'
              name='offCampusFee'
              value={formData?.price}
              onChange={handleChange}
              placeholder='Nhập phí ngoại trú'
            />
          </div>
        </div>
        {/* <div className='row mt-3'>
          {formData?.dormitory.services.map((service, index) => (
            <div className='col-md-6' key={index}>
              <label className='form-label'>{service.name}</label>
              <div className='input-group '>
                <input
                  type='number'
                  className='form-control m-2'
                  name={service.name}
                  value={service.price}
                  onChange={handleChange}
                  placeholder={`Nhập ${service.name}`}
                />
                <label className='form-label m-2'>{service.unit}</label>
              </div>
            </div>
          ))}
        </div> */}

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
