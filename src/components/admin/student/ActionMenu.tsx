'use client';
import { useState } from "react";

const ActionMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>⋮</button>
      {isOpen && (
        <div className="absolute right-0 bg-white shadow-lg rounded-md py-2 w-28">
          <button className="block w-full px-4 py-2 hover:bg-gray-200">View</button>
          <button className="block w-full px-4 py-2 hover:bg-gray-200">Block User</button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
