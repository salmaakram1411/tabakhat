import React from 'react';
import './Home.css';


function Home() {
  return (
    <section className="home" id="home">
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
      {/*  <Chefswiper /> Corrected component name/ import Chefswiper from './components/Chefswiper'; // Corrected import statement*/}
    </section>
  );
}

export default Home;


