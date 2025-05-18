'use client';
import React from 'react';
import ListingHeader from '@/components/houseDetail/ListingHeader';
import ListingGallery from '@/components/houseDetail/ListingGallery';
import ListingDescription from '@/components/houseDetail/ListingDescription';
import AgentContact from '@/components/houseDetail/AgentContact';
import RequestForm from '@/components/houseDetail/RequestForm';
import ReviewSection from './ReviewSection';
import { useDormitory } from '@/services/hooks/useDomitory';
import Status from './Status';

export default function PropertyPage({ slug }: { slug: string }) {
  const { data: house, isLoading, error } = useDormitory(slug);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;
  if (!house) return <p>Không tìm thấy dữ liệu</p>;

  return (
    <div className='container mt-4 text-dark'>
      <ListingHeader title={house.name} minPrice={house.minPrice} maxPrice={house.maxPrice}/>
      <div className='row mt-3'>
        <div className='col-md-8'>
          <ListingGallery
            images={house.imageUrl ? house.imageUrl.toString() : ''}
          />
          <Status status={house.status} studentNumber={house.students}  />
          <ListingDescription description={house.description} content={house.content} />
        </div>

        <div className='col-md-4'>
          <AgentContact phoneNumber={house.phoneNumber} ownerName={house.ownerName}/>
          <RequestForm housingLocation={house} />
        </div>
      </div>
      <ReviewSection rating={parseFloat(house.rating)} id={house.id} />
    </div>
  );
}
