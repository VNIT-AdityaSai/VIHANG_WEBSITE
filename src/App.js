import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Clubs from "./components/Clubs";
import Sponsors from "./components/Sponsors";
import Organizers from "./components/Organizers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThunderStrikers from "./components/thunderStrikers/ThunderStrikers";
import TerraTitans from "./components/terraTitans/TerraTitans"; 
import KineticKairos from "./components/kineticKairos/KineticKairos";
// import vihang2024 from "./components/vihang2024";
import FieryPhoenix from "./components/fieryPhoenix/FieryPhoenix";
import VerdantMavericks from "./components/verdantMavericks/VerdantMavericks";
import Updates from "./components/Updates";
import News from "./components/News";
import { Helmet } from "react-helmet";

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Vihang 2025",
      "/terra-titans": "Terra Titans",
      "/thunder-strikers": "Thunder Strikers",
      "/fiery-phoenix": "Fiery Phoenix",
      "/verdant-mavericks": "Verdant Mavericks",
      "/kinetic-kairos": "Kinetic Kairos",
      "/vihang2024": "Vihang 2024",
    };

    document.title = titles[location.pathname] || "Vihang 2025";
  }, [location.pathname]);

  return null;
};

const Home = () =>{
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href="/pictures/VNIT_logo.png"/>
      </Helmet>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Home />
      <PageTitleUpdater />
      <div className="bg-gray-100 text-gray-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Gallery />
                <News />
                <Clubs />
                <Updates />
                <Sponsors />
                <Organizers />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/terra-titans" element={<TerraTitans />} />
          <Route path="/thunder-strikers" element={<ThunderStrikers />} />
          <Route path="/kinetic-kairos" element={<KineticKairos />} />
          <Route path="/fiery-phoenix" element={<FieryPhoenix />} />
          <Route path="/verdant-mavericks" element={<VerdantMavericks />} />
          {/* <Route path="/vihang2024" element={<vihang2024 />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;