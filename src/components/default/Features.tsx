// components/Features.tsx
import React from "react";
import mapsearch from "@images/default/mapsearch.png";
import Image from "next/image";
import Link from "next/link";

const Features: React.FC = () => {
  return (
    <section className="text-center py-5">
      <h2>OUR SYSTEM HELPS YOU "ACHIEVE MORE" WHILE LIVING OFF-CAMPUS!</h2>
      <p>Set milestones. Reach them. Enjoy the rewards you’ve earned!</p>
      <div className="d-flex justify-content-center gap-3">
        <div className="card" style={{ width: "17rem" }}>
          <Image src={mapsearch} alt="Map Search" width={250} height={250} />
          <div className="card-body">
            <h5 className="card-title">MAP SEARCH</h5>
          </div>
        </div>
        <div className="card" style={{ width: "17rem" }}>
          <Image src={mapsearch} alt="Map Search" width={250} height={250} />
          <div className="card-body">
            <h5 className="card-title">MAP SEARCH</h5>
          </div>
        </div>
        <div className="card" style={{ width: "17rem" }}>
          <Image src={mapsearch} alt="Map Search" width={250} height={250} />
          <div className="card-body">
            <h5 className="card-title">MAP SEARCH</h5>
          </div>
        </div>
        <div className="card" style={{ width: "17rem" }}>
          <Image src={mapsearch} alt="Map Search" width={250} height={250} />
          <div className="card-body">
            <h5 className="card-title">MAP SEARCH</h5>
          </div>
        </div>
      </div>
      <Link className="btn btn-warning m-3" href="/login">
          Login Now
        </Link>
    </section>
  );
};

export default Features;
