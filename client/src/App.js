import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import CityPage from "./pages/city";
import Services from "./components/Services/index";
import HelpersPage from "./pages/helpers";
import ItServicesPage from "./pages/itServices";
import RepairPage from "./pages/repair"  
import PhotographyPage from "./pages/photography"

function App() {
  return (
    <>
  
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/city" element={<CityPage />} />
        <Route path="/city/:available" element={<Services />} />
        <Route path="/services/helpers" element={<HelpersPage />} />
        <Route path="/services/:itServices" element={<ItServicesPage />} />
        <Route path="/services/repair" element={<RepairPage />} />
        <Route path="/services/photography" element={<PhotographyPage />} />
      </Routes>
    </>
  );
}

export default App;