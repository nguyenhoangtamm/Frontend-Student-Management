"use client";
import React, { useState } from "react";
import HousingItem from "./housingItem";
import { OriginHousing } from "@/interface/housingInterface";
import HousingPagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export type Housing = Omit<OriginHousing, "owner">;

export default function HousingListItem({ housing }: { housing: Housing[] }) {
    const filterHouse = useSelector((state: RootState) => state.filHouse);
    if (filterHouse.price === "l-h") {
        housing = housing.sort((a, b) => a.price - b.price);
    }
    if (filterHouse.price === "h-l") {
        housing = housing.sort((a, b) => b.price - a.price);
    }
    if (filterHouse.newest === "newest") {
        housing = housing.sort((a, b) => b.id - a.id);
    }
    if (filterHouse.newest === "oldest") {
        housing = housing.sort((a, b) => a.id - b.id);
    }
    const searchHouse = useSelector(
        (state: RootState) => state.house.selectedHouse
    );
    if (searchHouse) {
        housing = housing.filter(
            (item) => item.id.toString() === searchHouse.id?.toString()
        );
    }

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(housing.length / itemsPerPage);
    const displayedData = housing.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="">
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
