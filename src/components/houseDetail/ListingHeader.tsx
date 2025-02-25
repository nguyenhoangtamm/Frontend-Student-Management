import React from "react";

interface ListingHeaderProps {
  title: string;
  price: string;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({ title, price }) => {
  return (
    <div className="listing-header">
      <h2 className="text-dark">{title}</h2>
      <p className="text-warning fs-5">Giá: {price} / tháng</p>
    </div>
  );
};

export default ListingHeader;
