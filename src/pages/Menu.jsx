import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import egg from '../assets/fried-egg.jpg';
import axiosConfig, { updateAxiosConfig } from "../services/http";
import './Menu.css';

const menuData = {
  Breakfast: [
    {
      img: [egg],
      name: 'Fried Egg',
      description: 'Enjoy our perfectly fried eggs, served with crispy bacon, golden hash browns, and toast.',
      price: 'EGP 130',
    },
    {
      img: 'pic/pancake.jpg',
      name: 'Pancake',
      description: 'Treat yourself to our buttermilk pancakes, topped with powdered sugar, fresh fruit, and warm maple syrup.',
      price: 'EGP 80',
    },
    {
      img: 'pic/club-sandwiche.jpg',
      name: 'Club Sandwich',
      description: 'Enjoy our classic Club Sandwich, served with a side of crispy fries and a pickle spear.',
      price: 'EGP 90',
    },
  ],
  Launch: [
    {
      img: 'pic/barbecue-kebab.jpg',
      name: 'Barbecue Kebab',
      description: 'Experience our tender kebabs in lavash, served with rice, fresh parsley, grilled tomato, and a crisp side salad.',
      price: 'EGP 240',
    },
    {
      img: 'pic/chicken-grill-.jpg',
      name: 'Grilled Chicken',
      description: 'Savor our perfectly seasoned and grilled chicken, served with a rice and a hot mulukhiyah soup.',
      price: 'EGP 180',
    },
    {
      img: 'pic/steak.jpg',
      name: 'Mushroom Steak',
      description: 'Enjoy our tender Steak, complemented by golden fried mushroom, fluffy rice, and savory grilled potatoes.',
      price: 'EGP 300',
    },
    {
      img: 'pic/shish tawook.jpg',
      name: 'Shish Tawook',
      description: 'Treat yourself to our marinated chicken skewers with a side of rice and crispy fries.',
      price: 'EGP 170',
    },
    {
      img: 'pic/kofta.jpg',
      name: 'Kofta',
      description: 'Enjoy our flavorful grilled kofta with rice, rich tahini, and a side of pickles.',
      price: 'EGP 200',
    },
    {
      img: 'pic/fish.jpg',
      name: 'Grilled Fish',
      description: 'Delight our Grilled Fish, accompanied by rice, smooth tahini, and a refreshing side salad.',
      price: 'EGP 150',
    },
    {
      img: 'pic/pane.jpg',
      name: 'Chicken Pane',
      description: 'Savor our tender breaded chicken breast, paired with red sauce pasta, crispy fries, and a side salad.',
      price: 'EGP 170',
    },
    {
      img: 'pic/ma7shi.jpg',
      name: 'Mahshi',
      description: 'Savor our Stuffed Grape Leaves filled with rice and meat, served with a bowl of Lesan Asfour Soup.',
      price: 'EGP 150',
    },
    {
      img: 'pic/spaghetti-bolognaise-sauce.jpg',
      name: 'Spaghetti Bolognese',
      description: 'Treat yourself with our rich and hearty meat sauce and spaghetti, accompanied by crunchy fries.',
      price: 'EGP 190',
    },
  ],
  // Add other categories similarly
};

const reviews = [
  {
    name: "John Doe",
    review: "The food was absolutely wonderful, from preparation to presentation, very pleasing.",
    rating: 5
  },
  {
    name: "Jane Smith",
    review: "Great experience, the service was excellent and the food was delicious!",
    rating: 4.5
  },
 

  
  // Add more reviews here
];

function Menu({cartData, setCartData}) {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {id} = useParams();
  const [chef, setChef] = useState({});
  const [sections, setSections] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  updateAxiosConfig();

  useEffect(() => {
    const response = axios.get(`http://localhost:4000/api/menu-data/${id}`, {headers: {...axiosConfig.headers, authorization: localStorage.getItem("token")}}).then(
      res => {
        if (res?.data?.length) {
          const data = res.data;
          const chef = data[0];
          setChef({
            image: `data:image/png;base64,${chef.chef_image}`,
            description: chef.description,
            chefFirstName: chef.first_name,
            chefLastName: chef.last_name,
            id: chef.chef_id
          });
          let responseSections = data.map(item => {
              return {name: item.section_name, id: item.section_id}
          });
          responseSections = responseSections.reduce((acc, item) => {
            if (acc.findIndex(sec => sec.id === item.id ) === -1) {
              acc.push(item);
            }
            return acc;
          }, []);
          
          setSections(responseSections);
          setSelectedCategory(responseSections[0].name)
          let responseDishes = data.map(
            item => {
              return {
                image: `data:image/png;base64,${item.dish_image}`, 
                name: item.dish_name, 
                id: item.dish_id, 
                price: item.dish_price, 
                description: item.dish_description,
                sectionId: item.dish_section_id
              }
            }
          );
          const filtered = responseDishes.filter(dish => dish.sectionId === responseSections[0].id);
          setDishes(responseDishes);
          setFilteredDishes(filtered)
        }
      }
    ).catch(err => console.log(err));

  }, []);

  const addDish = (dish) => {
    if (cartData?.findIndex(item => item.id === dish.id) === -1) setCartData([...cartData, {...dish, quantity: 1}]);
  }

  const handleFilterChange = (section) => {
    setSelectedCategory(section.name);
    const filtered = dishes.filter(dish => {
      return dish.sectionId === section.id
    });
    setFilteredDishes(filtered);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="chefP">
        <div className="chefP-text">
          <div className="star">
            <div>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
          </div>
          <h1><span>chef.</span> <br />{chef.chefFirstName} {chef.chefLastName}</h1>
          <p>
            {chef.description}
          </p>
          <h2 onClick={openModal} style={{ cursor: 'pointer' }}>(Reviews)</h2>
          <a href="#menu" className="btn">Check menu</a>
        </div>
        <div className="chefP-img">
          <img src={chef.image} alt='Chef Asmaa Oraby' />
        </div>
      </div>
      <section className="menu" id="menu">
        <div className="nav-menu">
          {sections.map((item, index) => <a href="#s" key={index} onClick={() => handleFilterChange(item)}>{item.name}</a>)}
        </div>
        <div className="menu-items">
          {sections.map((section, index) => (
            <div
              className={`menu-category ${selectedCategory === section.name ? 'active' : ''}`}
              style={{ display: selectedCategory === section.name ? 'block' : 'none' }}
              key={index}
            >
              <h1 className="heading">{section.name}</h1>
              <div className="box-container">
                {filteredDishes.map((item, index) => (
                  <div className="box" key={index}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="price">{item.price}</div>
                    <a className="box-btn cursor-pointer" onClick={() => {addDish(item)}}>Add to cart</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Reviews Modal" className="modal" overlayClassName="modal-overlay">
        <h2>Customer Reviews</h2>
        <FaTimes onClick={closeModal} className="close-icon" />
        <div className="reviews">
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <div className="rating">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <BsStarFill key={i} />
                ))}
                {review.rating % 1 !== 0 && <BsStarHalf />}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default Menu;
