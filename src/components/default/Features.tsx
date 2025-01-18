// components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="text-center py-5">
      <h2>OUR SYSTEM HELPS YOU "ACHIEVE MORE" WHILE LIVING OFF-CAMPUS!</h2>
      <p>Set milestones. Reach them. Enjoy the rewards you’ve earned!</p>
      <div className="d-flex justify-content-center gap-3">
        {Array(4).fill(null).map((_, i) => (
          <div key={i} className="card" style={{ width: '10rem' }}>
            <img src="/map-icon.png" className="card-img-top" alt="Map Search" />
            <div className="card-body">
              <h5 className="card-title">MAP SEARCH</h5>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-warning mt-3">Sign Up Now</button>
    </section>
  );
};

export default Features;
