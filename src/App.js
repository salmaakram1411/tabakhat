import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signupchef from './pages/Signupchef';
import Signupcustomer from './pages/Signupcustomer';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Menu from './pages/Menu'; // Import Menu component
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Menu" element={<Menu />} /> 
        <Route path="/Signupchef" element={<Signupchef />} /> 
        <Route path="/Signupcustomer" element={<Signupcustomer />} /> 
        {/* Add more routes here as needed */}
      </Routes>
      <Footer /> {/* Place Footer within the BrowserRouter */}
    </BrowserRouter>
  );
}

export default App;


