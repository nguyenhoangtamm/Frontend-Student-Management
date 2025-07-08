'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { Pagination } from 'react-bootstrap';
import mapsearch from '@/assets/images/dashboard/housing.jpg';
import RatingComponent from '@/components/featureComponent/RatingComponent';
import { Button } from '@/components/ui/button';
import MapModal from '@/components/modals/MapModal';
import { useDormitoriesPaging } from '@/services/hooks/useDomitory';
import { DormitoryPaginationType } from '@/schemaValidations/dormitory.schema';

// Interface cho popular housing
interface PopularHousing {
  id: number;
  name: string;
}

// Interface cho pagination props
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Housing Item Component
const HousingItem = ({ housing }: { housing: DormitoryPaginationType }) => {
  const { slug, name, address, minPrice, maxPrice, description, rating } = housing;
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className='card mb-4 d-flex flex-row'>
      <Image
        width={150}
        height={150}
        src={housing.imageUrl ? `/dormitory/${housing.imageUrl}` : mapsearch}
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
        housingLocation={housing}
      />
    </div>
  );
};

// Housing Pagination Component
const HousingPagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />
      {Array.from({ length: totalPages }, (_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={handleNext}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

// Housing List Component
const HousingListItem = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: pagesItem,
    isLoading,
    error,
  } = useDormitoriesPaging({ page: currentPage, perPage: 10 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!pagesItem) return <p>No data available</p>;

  const totalPages = pagesItem.pagination.lastPage;
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
};

// Right Item Component
const RightItem = ({ housing }: { housing: PopularHousing }) => {
  const { name } = housing;
  return (
    <div className="media mb-3 d-flex align-items-center">
      <Image
        width={50}
        height={50}
        src={"/housing.jpg"}
        className="mr-3"
        alt="Condo Image"
      />
      <div className="media-body">
        <Link
          href={"/house/" + housing.id}
          passHref
          className="text-primary"
          style={{ textDecoration: "none" }}
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

// Right List Components
const RightListItem = () => {
  const {
    data: housing,
  } = useDormitoriesPaging({ page: 1, perPage: 5, sortByMostPeople: 1 });

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Đề xuất</h5>
          {housing?.data?.map((item: { id: number; name: string }, index: number) => (
            <RightItem key={index} housing={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Housing Page Component
const HousingPage = () => {
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
            <RightListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
