import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const [isCartItemsActive, setIsCartItemsActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
    setIsSearchFormActive(false);
    setIsCartItemsActive(false);
  };

  const toggleSearchForm = () => {
    setIsSearchFormActive(!isSearchFormActive);
    setIsNavbarActive(false);
    setIsCartItemsActive(false);
  };

  const toggleCartItems = () => {
    setIsCartItemsActive(!isCartItemsActive);
    setIsNavbarActive(false);
    setIsSearchFormActive(false);
  };

  const handleScroll = () => {
    setIsNavbarActive(false);
    setIsSearchFormActive(false);
    setIsCartItemsActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
        <Link to="/">home</Link>
        <Link to="/chef">chef</Link>
        <Link to="/about">about</Link>
        <Link to="/review">review</Link>
        <Link to="/contact">contact us</Link>
        <Link to="/join">join us</Link>
        <Link to="/login">login</Link>
      </nav>

      <div className="icons">
        <div className="fas fa-search" id="search-btn" onClick={toggleSearchForm}></div>
        <div className="fas fa-shopping-cart" id="cart-btn" onClick={toggleCartItems}></div>
        <div className="fas fa-bars" id="menu-btn" onClick={toggleNavbar}></div>
      </div>

      <div className={`search-form ${isSearchFormActive ? 'active' : ''}`}>
        <input type="search" id="search-box" placeholder="search here.." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div className={`cart-items-container ${isCartItemsActive ? 'active' : ''}`}>
        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="pic/ma7shi.jpg" alt="Cart item 1" />
          <div className="content">
            <h3>cart item 01</h3>
            <div className="price">$15/-</div>
          </div>
        </div>

        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="pic/pane.jpg" alt="Cart item 2" />
          <div className="content">
            <h3>cart item 02</h3>
            <div className="price">$15/-</div>
          </div>
        </div>

        <div className="cart-item">
          <span className="fas fa-times"></span>
          <img src="pic/kofta.jpg" alt="Cart item 3" />
          <div className="content">
            <h3>cart item 03</h3>
            <div className="price">$15/-</div>
          </div>
        </div>
        <Link to="/checkout" className="btn">checkout now</Link>
      </div>
    </header>
  );
}

export default Navbar;
