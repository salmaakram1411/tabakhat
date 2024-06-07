import React from 'react'
import './About.css';
import about from '../assets/pane.jpg';

const About = () => {
  return (
    
      <div className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="containerr">
          <div className="hero-content">
            <h2>hello.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis iure possimus rerum ipsum sed repellat? Provident iste fuga, eaque facilis consequatur labore ab quae. Nostrum obcaecati eius in magnam?</p>
          </div>
          <div className="hero-image">
            <img src={about} alt='about' />
          </div>
        </div>
      </div>
   
  );
}

export default About;
