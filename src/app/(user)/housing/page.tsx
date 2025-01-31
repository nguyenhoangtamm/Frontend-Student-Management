"use client";
import React from "react";
import HousingListItem from "@/components/housing/housingListItem";
import RightListItem from "@/components/housing/rightListItem";
import PropertyFilter from "@/components/housing/PropertyFilter";

const HousingPage = () => {
  const dataSend = [
    {
      id: 1,
      name: "House 1",
      address: "123 Main St",
      price: "$1000",
      image: "house1.jpg",
      description: "A beautiful house in the city center.",
      lat: 40.7128,
      lon: -74.006,
    },
    {
      id: 2,
      name: "House 2",
      address: "456 Elm St",
      price: "$1200",
      image: "house2.jpg",
      description: "A cozy house with a big garden.",
      lat: 34.0522,
      lon: -118.2437,
    },
    {
      id: 3,
      name: "House 3",
      address: "789 Oak St",
      price: "$900",
      image: "house3.jpg",
      description: "A modern house with a pool.",
      lat: 41.8781,
      lon: -87.6298,
    },
    {
      id: 4,
      name: "House 4",
      address: "101 Pine St",
      price: "$1100",
      image: "house4.jpg",
      description: "A spacious house with a garage.",
      lat: 29.7604,
      lon: -95.3698,
    },
    {
      id: 5,
      name: "House 5",
      address: "202 Maple St",
      price: "$950",
      image: "house5.jpg",
      description: "A charming house with a nice view.",
      lat: 33.4484,
      lon: -112.074,
    },
  ];
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
          <HousingListItem housing={dataSend} />
          <RightListItem housing={rightDataSend} />
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
