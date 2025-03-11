import React from "react";
import { Link } from "react-router-dom";

const KineticKairosHeader = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between shadow-lg">

      <div className="w-11 h-11">
        <img src="/pictures/VNIT_logo.png" alt="VNIT Logo" className="w-full h-full rounded-full" />
      </div>

      <h1 className="text-xl font-bold flex-1 text-center">Kinetic Kairos</h1>

      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default KineticKairosHeader;
