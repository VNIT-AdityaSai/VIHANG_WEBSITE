import React from "react";

const Updates = () => {
  const pointsTable = [
    { rank: 1, club: "Terra Titans", gold: 3, silver: 2, bronze: 1, total: 6 },
    { rank: 2, club: "Fiery Phoenix", gold: 2, silver: 3, bronze: 2, total: 7 },
    { rank: 3, club: "Verdant Mavericks", gold: 1, silver: 2, bronze: 3, total: 6 },
    { rank: 4, club: "Thunder Strikers", gold: 2, silver: 1, bronze: 2, total: 5 },
    { rank: 5, club: "Kinetic Kairos", gold: 1, silver: 1, bronze: 1, total: 3 }
  ];

  const scoreboard = [
    { game: "Football", match: "Terra Titans vs Fiery Phoenix", result: "Terra Titans won 2:1" },
    { game: "Basketball", match: "Verdant Mavericks vs Thunder Strikers", result: "Verdant Mavericks won 3:2" },
    { game: "Volleyball", match: "Kinetic Kairos vs Terra Titans", result: "Kinetic Kairos won 1:0" },
    { game: "Badminton", match: "Fiery Phoenix vs Verdant Mavericks", result: "Fiery Phoenix won 2:0" },
    { game: "Table Tennis", match: "Thunder Strikers vs Kinetic Kairos", result: "Thunder Strikers won 3:1" }
  ];

  const medalWinners = [
    { sport: 'Basketball', bronze: 'Team C', gold: 'Team A', silver: 'Team B' },
    { sport: 'Soccer', bronze: 'Team X', gold: 'Team Y', silver: 'Team Z' },
    { sport: 'Tennis', bronze: 'Player C', gold: 'Player A', silver: 'Player B' },
  ];

  return (
    <div className="p-4 flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
      <section id="points-table" className="w-full sm:w-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Club Points</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-lg border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700">
                {['Rank', 'Club', 'Gold', 'Silver', 'Bronze', 'Total'].map((header) => (
                  <th key={header} className="border border-gray-600 p-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pointsTable.map(({ rank, club, gold, silver, bronze, total }) => (
                <tr key={club}>
                  {[rank, club, gold, silver, bronze, total].map((value, index) => (
                    <td key={index} className="border border-gray-600 p-2">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="scoreboard" className="w-full sm:w-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h2 className="text-3xl text-center font-bold mb-8">Today's Winners</h2>
        <div className="overflow-x-auto ">
          <table className="w-full min-w-fulltable-auto border-collapse border border-gray-600">
            <thead className="bg-gray-700">
              <tr className="border-b">
                <th className="px-4 py-2 text-left border border-gray-600">Sport Name</th>
                <th className="px-4 py-2 text-left border border-gray-600">Bronze Winner</th>
                <th className="px-4 py-2 text-left border border-gray-600">Gold Winner</th>
                <th className="px-4 py-2 text-left border border-gray-600">Silver Winner</th>
              </tr>
            </thead>
            <tbody>
              {medalWinners.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 border border-gray-600">{item.sport}</td>
                  <td className="px-4 py-2 border border-gray-600">{item.bronze}</td>
                  <td className="px-4 py-2 border border-gray-600">{item.gold}</td>
                  <td className="px-4 py-2 border border-gray-600">{item.silver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Updates;
