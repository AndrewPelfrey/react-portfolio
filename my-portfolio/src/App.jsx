import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App
