// components/Hero.tsx
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-5 bg-blue-200">
      <h1 className="text-3xl font-bold mb-4">
        GUIDE AND SUPPORT OFF-CAMPUS<br /> STUDENT LIFE
      </h1>
      <p className="mb-6">
        Our system helps off-campus students stay organized, set goals, and <br />
        access the resources they need to thrive.
      </p>
      <div>
        <Link className="btn btn-success me-2 bg-green-500 text-white py-2 px-4 rounded" href="/login">
          Login
        </Link>
        <Link className="btn btn-outline-secondary border border-gray-500 text-gray-500 py-2 px-4 rounded" href="/more-info">
          More Info
        </Link>
      </div>
    </section>
  );
};

export default Hero;
