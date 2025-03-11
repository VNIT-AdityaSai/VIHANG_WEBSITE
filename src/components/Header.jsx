import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center shadow-md">
      {/* Left Logo */}
      <img src="/pictures/VNIT_logo.png" alt="VNIT Logo" className="w-11 h-11 rounded-full" />

      {/* Center Navigation */}
      <nav className="flex space-x-6 text-sm">
        <Link to="/home" className="hover:text-green-400">Home</Link>
        <Link to="/clubs" className="hover:text-green-400">Clubs</Link>
        <Link to="/schedule" className="hover:text-green-400">Schedule</Link>
      </nav>
    </header>
  );
};

export default Header;
