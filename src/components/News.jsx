import React from "react";

const newsUpdates = [
  { id: 1, title: "Vihang 2025 Registrations Open!", date: "Feb 12, 2025" },
  { id: 2, title: "New Exciting Events Announced!", date: "Feb 10, 2025" },
  { id: 3, title: "Meet Our Club Captains!", date: "Feb 8, 2025" },
];

const News = () => {
  return (
    <section id="news" className="p-6 bg-blue-100 text-gray-900 ">
      <h2 className="text-2xl font-bold text-center mb-4">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section (Placeholder for now) */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-semibold hover:text-green-400">Coming Soon</h3>
          <p className="text-gray-600 ">Stay tuned for more updates.</p>
        </div>

        {/* Right Section (Latest News) */}
        <div className="flex-1 space-y-4">
          {newsUpdates.map((news) => (
            <div 
              key={news.id}
              className="bg-white p-4 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl hover:text-green-400"
            >
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p className="text-gray-600 text-sm">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
