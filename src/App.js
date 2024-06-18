import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer'; // Import Footer
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu'; // Import Menu component
import Signupchef from './pages/Signupchef';
import Signupcustomer from './pages/Signupcustomer';

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
        <ToastContainer />
    </BrowserRouter>
  );
}

export default App;


