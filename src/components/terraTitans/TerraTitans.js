import React, { useEffect } from "react";
import TerraTitansHeader from "./TerraTitansHeader";
import TerraTitansFooter from "../Footer";

const TerraTitans = () => {
  useEffect(() => {
    document.title = "Terra Titans";
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen text-black flex flex-col justify-between">
    {/* <div className="bg-fuchsia-900 min-h-screen text-black flex flex-col justify-between"> */}
     <div className="text-white">
       <TerraTitansHeader />  
     </div>
     
     <div className="flex flex-col md:flex-row items-center justify-between flex-grow p-6">
       {/* Logo Section */}
       <div className="md:w-1/3 flex justify-center md:justify-start">
         <img src="/pictures/TerraTitansLogo.png" alt="Terra Titans Logo" className="w-100 h-100" />
       </div>
       
       {/* Captains Section */}
       <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
         {[
           { name: "", role: "Captain", img: "images.jpeg" },
           { name: "", role: "Captain", img: "G_images.jpeg" },
           { name: "", role: "Vice Captain", img: "images.jpeg" },
           { name: "", role: "Vice Captain", img: "G_images.jpeg" },
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
     
     {/* Footer */}
     <div className="bg-black text-white">
       <TerraTitansFooter />
     </div>
   </div>
  );
};

export default TerraTitans;
