import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home"
import Schedule from "./components/pages/schedule";
import Club from "./components/pages/club";
import Login from "./components/login";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="bg-gray-900 w-full">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Admin" element={<Admin />} />
        </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/clubs" element={<Club />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;