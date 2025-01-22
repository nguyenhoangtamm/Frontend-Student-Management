// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
      <h1>Student Management</h1>
      <div className="d-flex align-items-center ">
        <span className='m-3'>Have an account?     </span>
        <Link href="/login" className="btn btn-primary">Register</Link>
      </div>
    </header>
  );
};

export default Header;
