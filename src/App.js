// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JusticeConnect from './components/portfolio/JusticeConnect';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header always visible */}
        <Header />

        {/* Define all routes */}
        <Routes>
          {/* Main/Root route = Single-page layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
              </>
            }
          />
          {/* Portfolio Project Route */}
          <Route
            path="/projects/justice-connect"
            element={<JusticeConnect />}
          />
        </Routes>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;