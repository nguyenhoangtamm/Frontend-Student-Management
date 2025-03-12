'use client';
import React from 'react';
import HousingListItem from '@/components/housing/housingListItem';
import RightListItem from '@/components/housing/rightListItem';
import PropertyFilter from '@/components/housing/PropertyFilter';

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
      <PropertyFilter />
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
