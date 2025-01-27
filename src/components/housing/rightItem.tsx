import Image from 'next/image'
import React from 'react'
import mapsearch from "@images/default/mapsearch.png";

interface Housing {
    name: string;
   
  }

export default function RightItem( housing: { housing: Housing }) {
    const { name } = housing.housing;
  return (
    <div className="media mb-3">
    <Image
      width={50}
      height={50}
      src={mapsearch}
      className="mr-3"
      alt="Condo Image"
    />
    <div className="media-body">
      <a href="#" className="text-primary">
        {name}
      </a>
    </div>
  </div>
  )
}
