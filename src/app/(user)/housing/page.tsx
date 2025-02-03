'use client';
import React from "react";
import HousingListItem from "@/components/housing/housingListItem";
import RightListItem from "@/components/housing/rightListItem";
import PropertyFilter from "@/components/housing/PropertyFilter";
import { useDomainarie } from "@/services/hooks/useDomainarie";

const HousingPage = () => {
  
  const { data: dataSend, isLoading, error } = useDomainarie();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error.message}</p>;

  const rightDataSend = [
    {
      name: "The Prince Residence",
    },
    {
      name: "The Vista",
    },
    {
      name: "The Estella",
    },
  ];
  return (
    <div>
      <PropertyFilter />
      <div className="container mt-4">
        <div className="row">
          <HousingListItem housing={ Array.isArray(dataSend) ? dataSend : [] }/>
          <RightListItem housing={rightDataSend} />
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
