import React from 'react';
import './About.css';
import about from '../assets/about.jpg';

function About() {
  return (
    <div id="about" className='about-component'> {/* Add this ID */}
      <div className='about-row'>
        <div className='about-image'>
          <img src={about} alt='about' />
        </div>
        <div className='contentWrapper'>
          <div className='about-content'>
            <span className='textWrapper'>
              <span> About </span>
            </span>
            <h2>Tabakhat</h2>
            <p>
              Our website is designed to bring the warmth and flavors of homemade meals 
              directly to your doorstep. This innovative website acts as a culinary 
              marketplace, connecting passionate home cooks with individuals seeking the 
              wholesome goodness of homemade meals.<br /> <br />
              Also, we provide a "Special Events Order" feature, allowing users to place 
              large orders tailored for special occasions such as birthdays, engagements, 
              and other events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

