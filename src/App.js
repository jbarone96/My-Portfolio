import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import ResumePage from "./Components/ResumePage/ResumePage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Resume" element={<ResumePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
