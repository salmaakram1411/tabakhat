// Chefs.js
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './Chefswiper.css';


function Chefs() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        556: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="chef" id="chef">
      <h1 className="heading">Our Chefs</h1>
      <div className="slide-container swiper">
        {/* Add your swiper content here */}
      </div>
    </section>
  );
}

export default Chefs;
