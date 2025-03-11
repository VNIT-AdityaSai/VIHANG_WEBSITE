import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToScreen = (id) =>{
    const section = document.getElementById(id);

    if(section){
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <header className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center shadow-md">
      {/* Left Logo */}
      <img src="/pictures/VNIT_logo.png" alt="VNIT Logo" className="w-11 h-11 rounded-full" />

      {/* Center Navigation */}
      <nav className="flex space-x-6 text-sm">
        <button className="hover:text-green-400">Events</button>
        <button onClick={ ()=> scrollToScreen("news")} className="hover:text-green-400">News</button>
        <button onClick={ ()=> scrollToScreen("points-table")} className="hover:text-green-400">Points Table</button>
        <Link to="/vihang2024" className="hover:text-green-400">Vihang 2024</Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Link to="/login" >Login</Link>
        <img src="/pictures/" alt="Right Logo" className="w-13 h-12 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
