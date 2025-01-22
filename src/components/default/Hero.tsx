// components/Hero.tsx
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="text-center py-5"
      style={{ backgroundColor: "#b3d9ff" }}
    >
      <h1>GUIDE AND SUPPORT OFF-CAMPUS<br/> STUDENT LIFE</h1>
      <p>
        Our system helps off-campus students stay organized, set goals, and <br />
        access the resources they need to thrive.
      </p>
      <div>
        <Link className="btn btn-success me-2" href="/login">
          Login
        </Link>
        <Link className="btn btn-outline-secondary" href="/more-info">
          More Info
        </Link>
      </div>
    </section>
  );
};

export default Hero;
