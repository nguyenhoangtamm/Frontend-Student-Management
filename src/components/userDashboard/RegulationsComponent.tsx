import React from "react";
import govlaw from "@images/dashboard/govlaw.jpg";
import univlaw from "@images/dashboard/univlaw.jpg";
import Image from "next/image";
import Link from "next/link";

export default function RegulationsComponent () {
  return (
    <div className="card m-1" style={{ flex: 1, padding: "10px" }}>
      <h1>Quy định</h1>
      <div className="row">
        <div className="col-md-6">
          <Link href="#">
            <div
              className="card d-flex justify-content-center align-items-center"
              style={{ marginBottom: "10px", padding: "10px" }}
            >
              <Image src={govlaw} alt="Map Search" width={200} height={200} />
              Quy định của nhà nước
            </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link href="#">
            <div
              className="card d-flex justify-content-center align-items-center"
              style={{ marginBottom: "10px", padding: "10px" }}
            >
              <Image src={univlaw} alt="Map Search" width={200} height={200} />
              Quy định của nhà trường
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

