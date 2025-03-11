import React from "react";
import { Link } from "react-router-dom";

const Clubs = () => {
  return (
    <section className="p-8 text-gray-900">
      <h2 className="text-center text-white text-3xl pb-5"> Clubs </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
        <Link to="/terra-titans" className="transition transform hover:scale-110">
          <img src="/pictures/TerraTitansLogo2.png" alt="Terra Titans" className="w-25 h-25 mx-auto" />
        </Link>

        <Link to="/fiery-phoenix" className="transition transform hover:scale-110">
          <img src="pictures/Fiery PhonixLogo2.png" alt="Fiery Phoenix" className="w-25 h-25 mx-auto" />
        </Link>

        <Link to="/verdant-mavericks" className="transition transform hover:scale-110">
          <img src="/pictures/VerdantMavericksLogo.png" alt="Verdant Mavericks" className="w-25 h-25 mx-auto" />
        </Link>

        <Link to="/thunder-strikers" className="transition transform hover:scale-110">
          <img src="pictures/ThunderStrickersLogo2.png" alt="Thunder Strikers" className="w-25 h-25 mx-auto" />
        </Link>

        <Link to="/kinetic-kairos" className="transition transform hover:scale-110">
          <img src="/pictures/KineticKairosLogo2.png" alt="Kinetic Kairos" className="w-25 h-25 mx-auto" />
        </Link>
      </div>
    </section>
  );
};

export default Clubs;
