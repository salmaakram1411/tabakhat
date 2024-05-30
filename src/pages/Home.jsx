import React from 'react';
import './Home.css';
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
    <Chefswiper />
  </div>
  );
}

export default Home;
