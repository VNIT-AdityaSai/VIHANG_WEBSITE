import React from "react";
import { Link } from "react-router-dom";

const Clubs = () => {
  return (
    <section className="p-6 text-gray-900">
      <h2 className="text-2xl font-bold text-center mb-6">Clubs</h2>

      <div className="grid grid-cols-5 gap-6 justify-center">
        <Link to="/terra-titans" className="transition transform hover:scale-105">
          <img src="/pictures/TerraTitansLogo.png" alt="Terra Titans" className="w-25 h-25 mx-auto rounded-full" />
        </Link>

        <Link to="/fiery-phoenix" className="transition transform hover:scale-105">
          <img src="/pictures/FieryPhoenixLogo.png" alt="Fiery Phoenix" className="w-25 h-25 mx-auto rounded-full" />
        </Link>

        <Link to="/verdant-mavericks" className="transition transform hover:scale-105">
          <img src="/pictures/VerdantMavericksLogo.png" alt="Verdant Mavericks" className="w-25 h-25 mx-auto rounded-full" />
        </Link>

        <Link to="/thunder-strikers" className="transition transform hover:scale-105">
          <img src="/pictures/ThunderStriker3.png" alt="Thunder Strikers" className="w-25 h-25 mx-auto rounded-full" />
        </Link>

        <Link to="/kinetic-kairos" className="transition transform hover:scale-105">
          <img src="/pictures/KineticKairosLogo.png" alt="Kinetic Kairos" className="w-25 h-25 mx-auto rounded-full" />
        </Link>
      </div>
    </section>
  );
};

export default Clubs;
