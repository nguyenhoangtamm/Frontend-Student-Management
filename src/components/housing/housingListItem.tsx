import React, { useState } from "react";
import HousingItem from "./housingItem";
import { OriginHousing } from "@/interface/housingInterface";
import HousingPagination from "../Pagination/Pagination";

export type Housing = Omit<OriginHousing, "owner">;

export default function HousingListItem({ housing }: { housing: Housing[] }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(housing.length / itemsPerPage);
  const displayedData = housing.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="col-md-8">
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
}
