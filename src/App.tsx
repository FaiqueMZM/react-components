import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarPage from "./pages/NavBarPage";
import BotNavbarPage from "./pages/BotNavBarPage";
import HomePage from "./pages/HomePage";
import FooterPage from "./pages/FooterPage";
import StatsPage from "./pages/StatsPage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Navbar Variations */}
          <Route path="/navbar/:variation" element={<NavbarPage />} />
          <Route path="/botnavbar/:variation" element={<BotNavbarPage />} />
          <Route path="/footer/:variation" element={<FooterPage />} />
          <Route path="/stats/:variation" element={<StatsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
