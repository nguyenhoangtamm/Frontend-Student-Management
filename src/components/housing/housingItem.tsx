import Image from "next/image";
import React from "react";
import mapsearch from "@images/default/mapsearch.png";
import Link from "next/link";
import RatingComponent from "../featureComponent/RatingComponent";
import { Button } from "react-bootstrap";
import MapModal from "../modals/MapModal";

interface Housing {
  name: string;
  address: string;
  price: string;
  image: string;
  description: string;
}

export default function HousingItem(housing: { housing: Housing }) {
  const { name, address, price, description } = housing.housing;
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="card mb-4">
      <Image
        width={50}
        height={50}
        src={mapsearch}
        className="card-img-top"
        alt="Property Image"
      />
      <div className="card-body d-flex justify-content-between">
        <div className="card-text m-4">
          <Link href={""} className="m-2 card-title">
            {name}
          </Link>
          <p className="m-2 card-text text-muted">{address}</p>
          <p className="m-2 mb-2">{description}</p>
          <p className="m-2 text-success font-weight-bold">{price} / month</p>
        </div>
        <div className="d-flex flex-column align-items-center m-4">
          <RatingComponent />
          <Button className="btn btn-primary">View Details</Button>
          <Button className="btn btn-primary mt-2" onClick={() => setOpen(true)}>
            View on Map
          </Button>

        </div>
      </div>
      <MapModal 
      isOpen={isOpen}
      setOpen={setOpen}
      />
    </div>
  );
}
