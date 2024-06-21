import React from 'react';
import About from '../components/About';
import Chefswiper from '../components/Chefswiper.js'; // Correct case
import Joinus from '../components/Joinus.jsx';
import './Home.css';


function Home() {
  return (
    
  <div className='home'>
    <div className="home-container" >
      <div className="content">
        <h3>
          Experience The Warmth <br />Of Homemade Meals,<br />Anytime,
          Anywhere.
        </h3>
        <p>
          Enjoy the taste of home with freshly prepared, homemade meals
          delivered right to your doorstep.
          Convenience and comfort, wherever you are.
        </p>
        <a href="#chef" className="btn">Order Now</a>
      </div>
      
    </div>
    <div className='icons-container'>
      <h1>Our service</h1>
    <div className='icons-row'>
      <div className='service'>
      <i className="fa-solid fa-cake-candles"/>
      <h2>party orders</h2>
      <p>Make your gatherings memorable with our delicious homemade party orders, tailored to delight every guest</p>
      </div>
      <div className='service'>
      <i className="fa-solid fa-shield" />
      <h2>Reliability</h2>
      <p>Count on us for consistent, high-quality meals that bring the comfort of home-cooked food to your table, every time</p>
      </div>
      <div className='service'>
      <i className="fa-solid fa-truck" />
      <h2>Home delivery</h2>
      <p>Enjoy timely and efficient delivery, ensuring your meals arrive fresh and ready to savor, no matter where you are</p>
      </div>
      <div className='service'>
      <i className="fa-solid fa-headset" />
      <h2>customer support</h2>
      <p>Experience exceptional customer support, always here to assist you and ensure your satisfaction with every order</p>
      </div>
        </div>
      </div>
    <Chefswiper />
    <About />
    <Joinus />
  
  </div>
  );
}

export default Home;
