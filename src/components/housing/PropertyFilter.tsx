'use client'
import React from "react";
import { FaSearch } from "react-icons/fa";
import DropdownFilter from "../featureComponent/Dropdown";
import { Button } from "react-bootstrap";

const PropertyFilter: React.FC = () => {
  return (
    <div className="d-flex align-items-center gap-2 bg-white p-3 rounded shadow-sm border">
      {/* Dropdowns with Options */}
      <DropdownFilter label="Rent" options={["Rent", "Buy"]} />
      <DropdownFilter
        label="Studio+ Beds"
        options={["Studio", "1 Bed", "2 Beds", "3+ Beds"]}
      />
      <DropdownFilter
        label="Property type"
        options={["Apartment", "Condo", "House", "Villa"]}
      />
      <DropdownFilter label="Any price" options={["< $500", "$500 - $1000", "$1000+"]} />
      <DropdownFilter
        label="Features (0)"
        options={["Balcony", "Gym", "Swimming Pool", "Parking"]}
      />
      <DropdownFilter label="More (0)" options={["Pet Friendly", "Furnished", "New Build"]} />

      {/* Search Box */}
      <div className="input-group" style={{ maxWidth: "350px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by location, station, condo name..."
        />
        <Button className="input-group-text">
          <FaSearch />
        </Button>
      </div>

      {/* Save & Reset Buttons */}
      
    </div>
  );
};

export default PropertyFilter;
