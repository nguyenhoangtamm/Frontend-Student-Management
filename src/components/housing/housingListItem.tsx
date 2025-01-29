import React from "react";
import HousingItem from "./housingItem";
import { OriginHousing } from "@/interface/housingInterface";

export type Housing = Omit<OriginHousing, "id" | "owner">;


export default function HousingListItem({ housing }: { housing: Housing[] }) {
  return (
    <div className="col-md-8">
      {housing.map((item, index) => (
        <HousingItem key={index} housing={item} />
      ))}
    </div>
  );
}
