import React from 'react';
import './Home.css';
import About from '../components/About';
import homep from '../assets/home.png';
import Chefswiper from '../components/Chefswiper.js'; // Correct case

function Home() {
  return (
    
  <div className='home'>
    <div className="home-container" style={{ backgroundImage: `url(${homep})` }}>
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


    <div className='icons'>
    <i className="fa-solid fa-cake-candles"/>


        <div className='icons-content'>
          <h3>party orders</h3>
        </div>
        </div>

        <div className='icons'>
        <i className="fa-solid fa-truck" />
        <div className='icons-content'>
          <h3>Home delivery</h3>
        </div>
        </div>

        <div className='icons'>
        <i className="fa-solid fa-credit-card" />
        <div className='icons-content'>
          <h3>multiple payment method</h3>
        </div>
        </div>

        <div className='icons'>
        <i className="fa-solid fa-headset" />
        <div className='icons-content'>
          <h3>customer support</h3>
        </div>
        </div>
        
        
        
        

        

       
      
        
      </div>
    <Chefswiper />
    <About />
  </div>
  );
}

export default Home;
