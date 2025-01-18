// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
      <h1>Student Management</h1>
      <div>
        <a href="#" className="btn btn-link">Log In</a>
        <a href="#" className="btn btn-primary">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
