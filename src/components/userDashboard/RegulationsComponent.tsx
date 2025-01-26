import React from "react";
import govlaw from "@images/dashboard/govlaw.jpg";
import univlaw from "@images/dashboard/univlaw.jpg";
import Image from "next/image";
import Link from "next/link";

const RegulationsComponent: React.FC = () => {
  return (
    <div className="card m-1" style={{ flex: 1, padding: "10px" }}>
      <h1>Quy định</h1>
      <div className="row">
        <div className="col-md-6">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ marginBottom: "10px", padding: "10px" }}
          >
            <Image src={govlaw} alt="Map Search" width={200} height={200} />
            <Link href="#">Quy định của nhà nước</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card d-flex justify-content-center align-items-center"
            style={{ marginBottom: "10px", padding: "10px" }}
          >
            <Image src={univlaw} alt="Map Search" width={200} height={200} />
            <Link href="#">Quy định của nhà trường</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsComponent;
