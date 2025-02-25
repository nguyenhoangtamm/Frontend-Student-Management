"use client";
import React from "react";
import ListingHeader from "@/components/houseDetail/ListingHeader";
import ListingGallery from "@/components/houseDetail/ListingGallery";
import ListingDescription from "@/components/houseDetail/ListingDescription";
import AgentContact from "@/components/houseDetail/AgentContact";
import RequestForm from "@/components/houseDetail/RequestForm";
import ReviewSection from "./ReviewSection";
import { useDomainarie } from "@/services/hooks/useDomainarie";

const PropertyPage: React.FC<{ houseId: number }> = ({ houseId }) => {
  const { data: house, isLoading, error } = useDomainarie(houseId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;
  console.log(house);
  if (Array.isArray(house) && house.length === 0) {
    return <p>Không có dữ liệu</p>;
  }
  

  return (
    <div className="container mt-4 text-dark">
      <ListingHeader title={house.name} price={house.price} />
      <div className="row mt-3">
        <div className="col-md-8">
          <ListingGallery
            images={Array.isArray(house.image) ? house.image : []}
          />
          <ListingDescription description={house.description} />
        </div>

        <div className="col-md-4">
          <AgentContact />
          <RequestForm housingLocation={house} />
        </div>
      </div>
      <ReviewSection />
    </div>
  );
};

export default PropertyPage;
