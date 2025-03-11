import React from "react";
import ThunderStrikersHeader from "./ThunderStrikersHeader";
import ThunderStrikersFooter from "../Footer";

const ThunderStrikers = () => {
  return (
    <div className="min-h-screen text-black bg-violet-950 justify-between flex flex-col">
      <div>
        <ThunderStrikersHeader />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between flex-grow p-6">
        {/* Logo Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img src="/pictures/ThunderStriker3.png" alt="Thunder Strikers Logo" className="w-100 h-100" />
        </div>

        {/* Captains Section */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Naveen Kumar", role: "Captain", img: "images.jpeg" },
            { name: "Chhaaya", role: "Captain", img: "G_images.jpeg" },
            { name: "Yogesh", role: "Vice Captain", img: "images.jpeg" },
            { name: "Jasmine Kaur", role: "Vice Captain", img: "G_images.jpeg" },
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
        <ThunderStrikersFooter />
      </div>
    </div>
  );
};

export default ThunderStrikers;
