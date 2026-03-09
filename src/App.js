import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './pages/SocialProof';
import Cards from './pages/cards';
import Projects from './pages/Projects';
import ContactSection from './pages/contactsection';
import DashboardStat from './pages/dashboardStat';
import Pricing from './pages/pricing';
import Footer from './pages/footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
          {/* <Home /> */}
          <Navbar />
          <Hero />
          <SocialProof />
          <Cards />
          <Projects />
          <ContactSection />
          <DashboardStat />
          <Pricing />
          <Footer />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
