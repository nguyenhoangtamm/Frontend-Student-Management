// components/Features.tsx
import React from "react";
import mapsearch from "@images/default/mapsearch.png";
import Image from "next/image";
import Link from "next/link";

const Features: React.FC = () => {
  return (
    <section className="text-center py-5">
      <h2 className="text-2xl font-bold mb-4">
        OUR SYSTEM HELPS YOU &quot;ACHIEVE MORE&quot; WHILE LIVING OFF-CAMPUS!
      </h2>
      <p className="mb-6">
        Set milestones. Reach them. Enjoy the rewards you’ve earned!
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        <div className="card w-72 bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={mapsearch}
            alt="Map Search"
            width={250}
            height={250}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">MAP SEARCH</h5>
          </div>
        </div>
        <div className="card w-72 bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={mapsearch}
            alt="Map Search"
            width={250}
            height={250}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">MAP SEARCH</h5>
          </div>
        </div>
        <div className="card w-72 bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={mapsearch}
            alt="Map Search"
            width={250}
            height={250}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">MAP SEARCH</h5>
          </div>
        </div>
        <div className="card w-72 bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={mapsearch}
            alt="Map Search"
            width={250}
            height={250}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">MAP SEARCH</h5>
          </div>
        </div>
      </div>
      <Link
        className="btn btn-warning m-3 bg-yellow-500 text-white py-2 px-4 rounded"
        href="/login"
      >
        Login Now
      </Link>
    </section>
  );
};

export default Features;
