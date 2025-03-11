import React from "react";
import { Link } from "react-router-dom";

const TerraTitansHeader = () => {
  return (
    <header className="bg-black text-white px-6 py-0 flex items-center justify-between shadow-lg">
      {/* Logo on the left */}
      <div className="w-10 h-10">
        <img src="/pictures/VNIT_logo.png" alt="VNIT Logo" className="w-full h-full  rounded-full" />
      </div>

      {/* Terra Titans Title in the center */}
      <h1 className="text-xl font-bold flex-1 text-center">Terra Titans</h1>

      {/* Home Link on the right */}
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default TerraTitansHeader;
