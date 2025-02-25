import React from "react";
import RightItem from "./rightItem";

interface PoupularHousing {
  id: number;
  name: string;
}
export default function RightListItem(housing: { housing: PoupularHousing[] }) {
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Đề xuất</h5>
          {housing.housing.map((item, index) => (
            <RightItem key={index} housing={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
