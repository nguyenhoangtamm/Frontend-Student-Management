// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-5" style={{ backgroundColor: '#b3d9ff' }}>
      <h2>GUIDE AND SUPPORT OFF-CAMPUS STUDENT LIFE</h2>
      <p>
        Our system helps off-campus students stay organized, set goals, and access the resources they need to thrive.
      </p>
      <div>
        <button className="btn btn-success me-2">Login</button>
        <button className="btn btn-outline-secondary">More Info</button>
      </div>
    </section>
  );
};

export default Hero;
