import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarPage from "./pages/NavBarPage";
import BotNavbarPage from "./pages/BotNavBarPage";
import HomePage from "./pages/HomePage";
import "./App.css";

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
