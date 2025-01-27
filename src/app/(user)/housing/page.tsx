"use client";
import React from "react";
import HousingListItem from "@/components/housing/housingListItem";
import RightListItem from "@/components/housing/rightListItem";

const HousingPage = () => {
  const dataSend = [
    {
      name: "House 1",
      address: "123 Main St",
      price: "$1000",
      image: "house1.jpg",
      description: "A beautiful house in the city center.",
    },
    {
      name: "House 2",
      address: "456 Elm St",
      price: "$1200",
      image: "house2.jpg",
      description: "A cozy house with a big garden.",
    },
    {
      name: "House 3",
      address: "789 Oak St",
      price: "$900",
      image: "house3.jpg",
      description: "A modern house with a pool.",
    },
    {
      name: "House 4",
      address: "101 Pine St",
      price: "$1100",
      image: "house4.jpg",
      description: "A spacious house with a garage.",
    },
    {
      name: "House 5",
      address: "202 Maple St",
      price: "$950",
      image: "house5.jpg",
      description: "A charming house with a nice view.",
    },
  ];
  const rightDataSend=[
    {
      name: "The Prince Residence",
    },
    {
      name: "The Vista",
    },
    {
      name: "The Estella",
    }

  ];
  return (
    <div className="container mt-4">
      <div className="row">
        <HousingListItem housing={dataSend} />
        <RightListItem housing={rightDataSend} />
      </div>
    </div>
  );
};

export default HousingPage;
