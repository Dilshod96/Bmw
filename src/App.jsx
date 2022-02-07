import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import baguetteBox from 'baguettebox.js';
import Navfile from './components/Templates/Navfile/Navfile';
import Footer from './components/Templates/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Series from './components/Pages/Series/Series';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import 'baguettebox.js/dist/baguetteBox.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  window.addEventListener('load', function () {
    baguetteBox.run('.gallery');
  });
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Navfile />
      <Routes>
        <Route path="/bmw" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
