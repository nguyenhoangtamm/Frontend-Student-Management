"use client";
import Image from "next/image";
import React from "react";
import mapsearch from "@images/dashboard/housing.jpg";
import Link from "next/link";
import RatingComponent from "../featureComponent/RatingComponent";
import { Button } from "../ui/button";
import MapModal from "../modals/MapModal";
import { OriginHousing } from "@/interface/housingInterface";
export type Housing = Omit<OriginHousing, "owner">;

export default function HousingItem(housing: { housing: Housing }) {
  const { id, name, address, price, description } = housing.housing;
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="card mb-4 d-flex flex-row">
      <Image
        width={150}
        height={150}
        src={mapsearch}
        className="card-img-left"
        alt="Property Image"
      />
      <div className="card-body d-flex justify-content-between">
        <div className="card-text m-4">
          <Link
            href={"/house/" + id}
            className="m-2 card-title"
            style={{ textDecoration: "none" }}
          >
            {name}
          </Link>
          <p className="m-2 card-text text-muted">{address}</p>
          <p className="m-2 mb-2">{description}</p>
          <p className="m-2 text-success font-weight-bold">{price} / month</p>
        </div>
        <div className="d-flex flex-column align-items-center m-4">
          <RatingComponent />
          <Button onClick={() => setOpen(true)}>View on Map</Button>
        </div>
      </div>
      <MapModal
        isOpen={isOpen}
        setOpen={setOpen}
        housingLocation={housing.housing}
      />
    </div>
  );
}
