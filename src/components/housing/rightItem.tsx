import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Housing {
  id: number;
  name: string;
}

export default function RightItem(housing: { housing: Housing }) {
  const { name } = housing.housing;
  return (
    <div className="media mb-3 d-flex align-items-center">
      <Image
        width={50}
        height={50}
        src={"/housing.jpg"}
        className="mr-3"
        alt="Condo Image"
      />
      <div className="media-body">
        <Link
          href={"/house/" + housing.housing.id}
          passHref
          className="text-primary"
          style={{ textDecoration: "none" }}
        >
          {name}
        </Link>
      </div>
    </div>
  );
}
