// components/Header.tsx
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-3 bg-gray-100">
      <h1 className="text-xl font-bold">Student Management</h1>
      <div className="space-x-4">
        <Link href="/login">
          <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Log In</Button>
        </Link>
        <Link href="/signup">
          <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
