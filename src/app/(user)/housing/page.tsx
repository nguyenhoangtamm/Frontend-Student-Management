'use client';
import React from 'react';
import HousingListItem from '@/components/housing/housingListItem';
import RightListItem from '@/components/housing/rightListItem';
import { FaSearch } from 'react-icons/fa';

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
  return (
    <div>
      {/* <PropertyFilter /> */}
      <div className="flex items-center space-x-2 border rounded-full px-4 py-2 w-1/3 justify-end">
        {/* <FilterTable filter={filters} /> */}
        <input
          type="text"
          placeholder={`Search dormitory...`}
          className="w-full outline-none"
        />
        <FaSearch className="text-gray-500" />
      </div>
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
