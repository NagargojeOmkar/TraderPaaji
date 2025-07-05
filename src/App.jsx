// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Intraday from './pages/Intraday';
import Swing from './pages/Swing';
import Equity from './pages/Equity';
import Combo from './pages/Combo';
import Complaints from './pages/Complaints';
import Charter from './pages/Charter';
import Disclosure from './pages/Disclosure';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intraday" element={<Intraday />} />
            <Route path="/swing" element={<Swing />} />
            <Route path="/equity" element={<Equity />} />
            <Route path="/combo" element={<Combo />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/charter" element={<Charter />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;