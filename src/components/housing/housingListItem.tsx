import React from "react";
import HousingItem from "./housingItem";

interface Housing {
  name: string;
  address: string;
  price: string;
  image: string;
  description: string;
}

export default function HousingListItem({ housing }: { housing: Housing[] }) {
  return (
    <div className="col-md-8">
      {housing.map((item, index) => (
        <HousingItem key={index} housing={item} />
      ))}
    </div>
  );
}
