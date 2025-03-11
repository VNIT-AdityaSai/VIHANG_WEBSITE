import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home"
import Schedule from "./components/pages/schedule";
import Club from "./components/pages/club";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/clubs" element={<Club />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;