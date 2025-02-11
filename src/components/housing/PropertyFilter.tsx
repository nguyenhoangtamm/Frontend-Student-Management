"use client";
import React from "react";
import DropdownFilter from "../housing/Dropdown";
import SearchHouse from "./SearchHouse";

const filterOptions = [
  {
    label: "Giá",
    options: ["Giá: Thấp đến Cao", "Giá: Cao đến Thấp"],
  },
  {
    label: "Mới nhất",
    options: ["Mới nhất", "Cũ nhất"],
  },
  {
    label: "Vị trí",
    options: ["Gần trường học", "Gần bệnh viện", "Gần chợ"],
  },
  {
    label: "Tiện ích trọ",
    options: ["Ban công", "Phòng tập gym", "Hồ bơi", "Chỗ đậu xe"],
  },
  
];

export default function PropertyFilter() {
  const width = ( 4* 200) / filterOptions.length + "px";

  return (
    <div className="d-flex align-items-center gap-2 bg-white p-3 rounded shadow-sm border">
      {/* Filter Dropdowns */}

      {filterOptions.map((filterOption, index) => (
        <DropdownFilter
          widthFilter={width}
          key={index}
          label={filterOption.label}
          options={filterOption.options}
        />
      ))}

      {/* Search Box */}
      <div className="input-group d-flex" style={{ maxWidth: "350px" }}>
        <SearchHouse />
      </div>

      {/* Save & Reset Buttons */}
    </div>
  );
}
