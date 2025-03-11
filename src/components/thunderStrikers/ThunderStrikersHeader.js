import React from "react";
import { Link } from "react-router-dom";

const ThunderStrikersHeader = () => {
  return (
    <header className="bg-gray-900 text-white py-2 px-4 flex items-center justify-between shadow-lg">
      {/* Logo on the left */}
      <div className="w-11 h-11">
        <img src="/pictures/VNIT_logo.png" alt="VNIT Logo" className="w-full h-full rounded-full" />
      </div>

      {/* Terra Titans Title in the center */}
      <h1 className="text-xl font-bold flex-1 text-center">Thunder Strikers</h1>

      {/* Home Link on the right */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default ThunderStrikersHeader;