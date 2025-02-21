'use client'
import React from "react";
import { Button } from "../ui/button";
import MapModal from "../modals/MapModal";
import { OriginHousing } from "@/interface/housingInterface";

export type HousingLocation = Omit<OriginHousing, "id" | "owner">;

export default function RequestForm({housingLocation}: {housingLocation: OriginHousing}) {
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <div className="contact-form bg-secondary text-dark p-3 rounded">
      {/* <h5>Contact agent</h5>
      <input type="text" className="form-control my-2" placeholder="Name *" />
      <input type="email" className="form-control my-2" placeholder="Email *" />
      <input type="tel" className="form-control my-2" placeholder="Phone number *" />
      <textarea className="form-control my-2" placeholder="Message"></textarea> */}
      <Button className="w-100"
      onClick={()=>{handleOpen()}}
      >View map</Button>
      <MapModal
        isOpen={isOpen}
        setOpen={setOpen}
        housingLocation={housingLocation}
      />
    </div>
  );
};

