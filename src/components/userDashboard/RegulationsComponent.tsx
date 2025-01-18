import React from 'react';

const RegulationsComponent: React.FC = () => {
  return (
    <div className="card" style={{ flex: 1, padding: "10px" }}>
      <h1>Quy định</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ marginBottom: "10px", padding: "10px" }}>
            <h2>Quy định của nhà nước</h2>
            <p>Nội dung quy định của nhà nước...</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ marginBottom: "10px", padding: "10px" }}>
            <h2>Quy định của nhà trường</h2>
            <p>Nội dung quy định của nhà trường...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsComponent;