'use client';
import React from 'react';
import HousingListItem from '@/components/housing/housingListItem';
import RightListItem from '@/components/housing/rightListItem';
import PropertyFilter from '@/components/housing/PropertyFilter';
import SearchBar from '@/components/admin/ui/SearchBar';
import { Clock, DollarSign, Home, MapPin } from 'lucide-react';

const HousingPage = () => {
  const rightDataSend = [
    {
      id: 1,
      name: 'The Prince Residence',
    },
    {
      id: 2,
      name: 'The Vista',
    },
    {
      id: 3,
      name: 'The Estella',
    },
  ];
  

  const filterOptions = [
    {
      id: 'price',
      label: 'Giá',
      icon: DollarSign, // Replace with the actual icon from Lucide
      option: ['Giá: Thấp đến Cao', 'Giá: Cao đến Thấp'],
    },
    {
      id: 'newest',
      label: 'Mới nhất',
      icon: Clock, // Replace with the actual icon from Lucide
      option: ['Mới nhất', 'Cũ nhất'],
    },
    {
      id: 'location',
      label: 'Vị trí',
      icon: MapPin, // Replace with the actual icon from Lucide
      option: ['Gần trường học', 'Gần bệnh viện', 'Gần chợ'],
    },
    {
      id: 'amenities',
      label: 'Tiện ích trọ',
      icon: Home, // Replace with the actual icon from Lucide
      option: ['Ban công', 'Phòng tập gym', 'Hồ bơi', 'Chỗ đậu xe'],
    },
  ];
  
  return (
    <div>
      {/* <PropertyFilter /> */}
      <SearchBar filters={filterOptions} name='a' />
      <div className='mt-4 container mx-auto'>
        <div className='grid grid-cols-12 gap-4'>
          {/* Cột chiếm 8 phần (2/3) */}
          <div className='col-span-12 md:col-span-8'>
            <HousingListItem />
          </div>

          {/* Cột chiếm 4 phần (1/3) */}
          <div className='col-span-12 md:col-span-4'>
            <RightListItem housing={rightDataSend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
