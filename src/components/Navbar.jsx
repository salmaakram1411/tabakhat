import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import egg from '../assets/fried-egg.jpg';

function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const [isCartItemsActive, setIsCartItemsActive] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Fried Egg', price: 25, imgSrc: egg, quantity: 1 },
    { id: 2, name: 'cart item 02', price: 15, imgSrc: 'pic/pane.jpg', quantity: 1 },
    { id: 3, name: 'cart item 03', price: 30, imgSrc: 'pic/kofta.jpg', quantity: 1 },
  ]);

  const navigate = useNavigate();

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

  const handleNavigation = (path, hash) => {
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <a href="#chefs" onClick={() => handleNavigation('/', 'chefs')}>Chefs</a>
        <a href="#about" onClick={() => handleNavigation('/', 'about')}>About</a>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
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
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <span className="fas fa-times"></span>
            <img src={item.imgSrc} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">EGP{item.price}</div>
              <div className="quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <h3>Total Price: EGP{totalPrice}</h3>
        </div>
        <Link to="/checkout" className="btn">checkout now</Link>
      </div>
    </header>
  );
}

export default Navbar;
