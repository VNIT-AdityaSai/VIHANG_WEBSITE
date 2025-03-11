import React from "react";
import FieryPhoenixHeader from "./FieryPhoenixHeader";
import Footer from "../Footer.js";

const FieryPhoenix = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-orange-950 text-black">
      {/* Main Content */}
      <div> 
        <FieryPhoenixHeader />
        </div>
      

      <div className="flex flex-col md:flex-row items-center justify-between flex-grow p-6">
        {/* Logo Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img src="pictures/FieryPhoenixLogo_removebg.png" alt="Fiery Phoenix Logo" className="w-100 h-100" />
        </div>

        {/* Captains Section */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Ashwin Ram S", role: "Captain", img: "images.jpeg" },
            { name: "Samiksha Dholek", role: "Captain", img: "G_images.jpeg" },
            { name: "Vamshi Krishna", role: "Vice Captain", img: "images.jpeg" },
            { name: "Rakshita Kyatamwar", role: "Vice Captain", img: "G_images.jpeg" },
          ].map((member, index) => (
            <div
              key={index}
              className="card bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full" />
              <h2 className="text-xl font-semibold mt-4">{member.role}</h2>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>

    <div>
      {/* Footer - Stays at the Bottom */}
      <Footer />
    </div>
    </div>
  );
};

export default FieryPhoenix;
