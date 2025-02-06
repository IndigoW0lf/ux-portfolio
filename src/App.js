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
        <Header />
        <Routes>
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
          <Route
            path="/projects/justice-connect"
            element={<JusticeConnect />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;