'use client';
import Image from 'next/image';
import React from 'react';
import mapsearch from '@images/dashboard/housing.jpg';
import Link from 'next/link';
import RatingComponent from '../featureComponent/RatingComponent';
import { Button } from '../ui/button';
import MapModal from '../modals/MapModal';
import { DormitoryPaginationType } from '@/schemaValidations/dormitory.schema';

export default function HousingItem(housing: {
  housing: DormitoryPaginationType;
}) {
  const { slug, name, address, minPrice, maxPrice, description, rating } =
    housing.housing;
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className='card mb-4 d-flex flex-row'>
      <Image
        width={150}
        height={150}
        src={housing.housing.imageUrl ? `/dormitory/${housing.housing.imageUrl}` : mapsearch}

        className='card-img-left'
        alt='Property Image'
      />
      <div className='card-body d-flex justify-content-between'>
        <div className='card-text m-4'>
          <Link
            href={'/house/' + slug}
            className='m-2 card-title font-weight-bold'
            style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            {name}
          </Link>
          <p className='m-2 card-text text-muted'>{address}</p>
          <p className='m-2 mb-2'>{description}</p>
          <p className='m-2 text-success font-weight-bold'>
            {minPrice} - {maxPrice} / month
          </p>
        </div>
        <div className='d-flex flex-column align-items-center m-4'>
          <RatingComponent rating={parseFloat(rating)} />
          <Button onClick={() => setOpen(true)}>View on Map</Button>
        </div>
      </div>
      <MapModal
        isOpen={isOpen}
        setOpen={setOpen}
        housingLocation={housing.housing}
      />
    </div>
  );
}
