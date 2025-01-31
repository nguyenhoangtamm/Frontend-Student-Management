import React from "react";
import ListingHeader from "@/components/houseDetail/ListingHeader";
import ListingGallery from "@/components/houseDetail/ListingGallery";
import ListingDescription from "@/components/houseDetail/ListingDescription";
import AgentContact from "@/components/houseDetail/AgentContact";
import RequestForm from "@/components/houseDetail/RequestForm";
import { OriginHousing } from "@/interface/housingInterface";
import ReviewSection from "./ReviewSection";

export type Housing = Omit<OriginHousing, "id" | "owner">;
const PropertyPage: React.FC<{ house: Housing }> = ({ house }) => {
  const images = [
    '/housing.jpg',
    
  ];

  return (
    <div className="container mt-4 text-dark">
      <ListingHeader 
        title= {house.name}
        price= {house.price}
      />
      <div className="row mt-3">
        <div className="col-md-8">
          <ListingGallery images={images} />
          <ListingDescription description={house.description} />
        </div>

        <div className="col-md-4">
          <AgentContact />
          <RequestForm housingLocation={house} />
        </div>
      </div>
      <ReviewSection  />
    </div>
  );
};

export default PropertyPage;
