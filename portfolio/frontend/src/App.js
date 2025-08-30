import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TemplateSelection from "./components/TemplateSelection";
import PortfolioForm from "./components/PortfolioForm";
import ProfessionalsList from "./components/ProfessionalsList";
import PortfolioPage from "./components/PortfolioPage";

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container container mt-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<TemplateSelection />} />
          <Route path="/form/:templateId" element={<PortfolioForm />} />
          <Route path="/professionals" element={<ProfessionalsList />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
