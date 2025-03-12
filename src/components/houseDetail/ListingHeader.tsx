import React from "react";

interface ListingHeaderProps {
  title: string;
  minPrice: string;
  maxPrice?: string;
}

export default function ListingHeader({ title, minPrice,maxPrice }: ListingHeaderProps) {
  return (
    <div className="listing-header">
      <h2 className="text-dark">{title}</h2>
      <p className="text-warning fs-5">
        Giá: {minPrice}
        {maxPrice && <span> - {maxPrice}</span>}
        / tháng
      </p>
    </div>
  );
};


