'use client';
import React, { useState } from 'react';
import HousingItem from './housingItem';
import HousingPagination from '../Pagination/Pagination';
import { useDormitoriesPaging } from '@/services/hooks/useDomitory';

export default function HousingListItem() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: pagesItem,
    isLoading,
    error,
  } = useDormitoriesPaging({ page: currentPage, perPage: 10 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!pagesItem) return <p>No data available</p>;

  const totalPages = pagesItem.lastPage;
  const displayedData = pagesItem.data;
  return (
    <div className=''>
      {displayedData.map((item, index) => (
        <HousingItem key={index} housing={item} />
      ))}
      <HousingPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
