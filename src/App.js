import React from 'react';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Join from './pages/Join';
import Login from './pages/Login';
import Menu from './pages/Menu';
import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer'; // Import Footer
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set index route to Home */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} /> {/* Correct path to "Contact" */}
        <Route path="/Join" element={<Join />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        {/* Add more routes here as needed */}
      </Routes>
      
      <Footer /> {/* Place Footer within the BrowserRouter */}
    </BrowserRouter>
  
  );
}

export default App;
