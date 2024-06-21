import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import axiosConfig from "../services/http";
import './Chefswiper.css';

const Chefswiper = () => {
  const [chefs, setChefs] = useState([]);
  const swiperRef = useRef(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const response = axiosConfig.get('home-chefs').then(
      res => {
        console.log({res});
        if (res?.data?.length) {
          setChefs(res.data);
        }
      }
    ).catch(err => console.log(err))
    swiperRef.current = new Swiper(".slide-content", {
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
      },
    });
  }, []);

  return (
    <div id="chefs"> {/* Add this ID */}
      <h1 className="swiperheading">Our Chefs</h1>
      <section className="chef" id="chef">
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {chefs.map(chef => {
                const img = `data:image/png;base64,${chef.image}`
                return (<div key={chef.ID} className="card swiper-slide">
                <div className="image-content">
                  <span className="ovrelay" />
                  <div className="card-image">
                    <img src={img} alt='' className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">{chef.first_name} {chef.last_name}</h2>
                  <p className="description">
                    {chef.description}
                  </p>
                  <Link to={token ? `/menu/${chef.ID}` : '/login'} className="chefbtn">Check Menu</Link>
                </div>
              </div>)
              })}
              {/* <div className="card swiper-slide">
                <div className="image-content">
                  <span className="ovrelay" />
                  <div className="card-image">
                    <img src={asmaaPhoto} alt='' className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Asmaa Oraby</h2>
                  <p className="description">
                    A passionate home chef with a flair for both baking and cooking.
                    Specializing in a fusion of sweet and savory flavors, she offers a
                    diverse menu of homemade delights, from indulgent cakes and pastries
                    to flavorful Egyptian-inspired dishes.
                  </p>
                  <Link to="/menu" className="chefbtn">Check Menu</Link>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="ovrelay" />
                  <div className="card-image">
                    <img src={img1} alt='' className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Naseem Ahmed</h2>
                  <p className="description">
                    Specializes in traditional Egyptian cuisine like koshari and
                    molokhia, bringing 15 years of culinary experience to your
                    table.
                  </p>
                  <Link to="/menu" className="chefbtn">Check Menu</Link>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="ovrelay" />
                  <div className="card-image">
                    <img src="pic/IMG_1164.PNG" alt='' className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">Ali Shrief</h2>
                  <p className="description">
                    Specializes in traditional Egyptian cuisine like koshari and
                    molokhia, bringing 15 years of culinary experience to your
                    table.
                  </p>
                  <Link to="/menu" className="chefbtn">Check Menu</Link>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="ovrelay" />
                  <div className="card-image">
                    <img src="pic/IMG_1168.PNG" alt='' className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">asm orabie</h2>
                  <p className="description">
                    Specializes in traditional Egyptian cuisine like koshari and
                    molokhia, bringing 15 years of culinary experience to your
                    table.
                  </p>
                  <Link to="/menu" className="chefbtn">Check Menu</Link>
                </div>
              </div> */}
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
    </div>
  );
}

export default Chefswiper;


