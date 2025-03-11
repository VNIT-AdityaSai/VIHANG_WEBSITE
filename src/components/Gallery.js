import React from "react";

import { useEffect, useRef } from "react";

const Gallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollImages = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft =1; // Reset without abrupt jump
      } else {
        scrollContainer.scrollLeft += 1; // Slow, smooth movement
      }
    };

    const interval = setInterval(scrollImages, 100); // Adjust speed (higher = slower)
    return () => clearInterval(interval);
  }, []);

  return (
    <section >
      {/* Theme Image Section */}
      <div className="w-full">
        <img 
          src="/pictures/Theme.png"
          alt="Event Theme"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Continuous Scrolling Event Pictures */}
      {/* <div ref={scrollRef} className="overflow-hidden whitespace-nowrap flex space-x-0p-4">
        <div className="flex space-x-4 animate-scroll">
          <img src="/pictures/images.jpeg" alt="Event 1" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/pictures/Commitee.png" alt="Event 2" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event3.jpg" alt="Event 3" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event4.jpg" alt="Event 4" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event5.jpg" alt="Event 5" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/pictures/images.jpeg" alt="Event 1" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event2.jpg" alt="Event 2" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event3.jpg" alt="Event 3" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event4.jpg" alt="Event 4" className="w-64 h-40 rounded-lg shadow-md" />
          <img src="/event5.jpg" alt="Event 5" className="w-64 h-40 rounded-lg shadow-md" />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Gallery;
