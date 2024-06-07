import React, { useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import './Menu.css';
import Chef from '../assets/asmaa.PNG';
import egg from '../assets/fried-egg.jpg';

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
      name: 'Club Sandwiche',
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

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
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
          <h1><span>chef.</span> <br />Asmaa Oraby</h1>
          <p>
            A passionate home chef with a flair for both baking and cooking.
            Specializing in a fusion of sweet and savory flavors, she offers a
            diverse menu of homemade delights, from indulgent cakes and pastries
            to flavorful Egyptian-inspired dishes.
          </p>
          <a href="#menu" className="btn">Check menu</a>
        </div>
        <div className="chefP-img">
          <img src={Chef} alt='Chef Asmaa Oraby' />
        </div>
      </div>
      <section className="menu" id="menu">
        <div className="nav-menu">
          <a href="#s" onClick={() => handleFilterChange('Breakfast')}>Breakfast</a>
          <a href="#s" onClick={() => handleFilterChange('Launch')}>Launch</a>
          <a href="#s" onClick={() => handleFilterChange('Dinner')}>Dinner</a>
          <a href="#s" onClick={() => handleFilterChange('Desserts')}>Desserts</a>
          <a href="#s" onClick={() => handleFilterChange('Occasions')}>Occasions</a>
          <a href="#s" onClick={() => handleFilterChange('Feedback')}>Feedback</a>
        </div>
        <div className="menu-items">
          {Object.keys(menuData).map((category) => (
            <div
              className={`menu-category ${selectedCategory === category ? 'active' : ''}`}
              style={{ display: selectedCategory === category ? 'block' : 'none' }}
              key={category}
            >
             
              <h1 className="heading">{category}</h1>
              <div className="box-container">
                {menuData[category].map((item, index) => (
                  <div className="box" key={index}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="price">{item.price}</div>
                    <a href="#s1" className="btn">add to cart</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
