import React from 'react'
import{BsStarFill} from "react-icons/bs";
import{BsStarHalf} from "react-icons/bs";
import './Menu.css';
import Chef from '../assets/asmaa.PNG';
function Menu() {
  return (
<>
   <div className="chefP">
  <div className="chefP-text">
   <div className='star'>
    <div>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarHalf/>
    </div>
    </div> 
    <h1><span> chef.</span> <br />Asmaa Oraby</h1>
    <p>
      A passionate home chef with a flair for both baking and cooking.
      Specializing in a fusion of sweet and savory flavors, she offers a
      diverse menu of homemade delights, from indulgent cakes and pastries
      to flavorful Egyptian-inspired dishes.
    </p>
    <a href="#menu" className="btn">Check menu</a>
  </div>
  <div className="chefP-img">
    <img src={Chef} alt='' />
  </div>
</div>
<section class="menu" id="menu">
      <div class="nav-menu">
        <a href="/#">breakfast</a>
        <a href="/#">launch</a>
        <a href="/#">dinner</a>
        <a href="/#">desserts</a>
        <a href="/#">occasions</a>
        <a href="/#">feedback</a>
      </div>

      <div class="Breakfast">
        <h1 class="heading">Breakfast</h1>
        <div class="box-container">
          <div class="box">
            <img src="pic/fried-egg.jpg" alt="" />
            <h3>Fried Egg</h3>
            <p>
              Enjoy our perfectly fried eggs, served with crispy bacon, golden
              hash browns, and toast.
            </p>
            <div class="price">EGP 130</div>
            <a href="/#" class="btn">add to cart</a>
          </div>

          <div class="box">
            <img src="pic/pancake.jpg" alt="" />
            <h3>Pancake</h3>
            <p>
              Treat yourself to our buttermilk pancakes, topped with powdered
              sugar, fresh fruit, and warm maple syrup.
            </p>
            <div class="price">EGP 80</div>
            <a href="/#" class="btn">add to cart</a>
          </div>

          <div class="box">
            <img src="pic/club-sandwiche.jpg" alt="" />
            <h3>Club Sandwiche</h3>
            <p>
              Enjoy our classic Club Sandwich, served with a side of crispy
              fries and a pickle spear
            </p>
            <div class="price">EGP 90</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
        </div>
      </div>

      <div class="launch">
        <h1 class="heading">Launch</h1>
        <div class="box-container">
          <div class="box">
            <img src="pic/barbecue-kebab.jpg" alt="" />
            <h3>Barbecue Kebab</h3>
            <p>
              Experience our tender kebabs in lavash, served with rice, fresh
              parsley, grilled tomato, and a crisp side salad.
            </p>
            <div class="price">EGP 240</div>
            <a href="/#" class="btn">add to cart</a>
          </div>

          <div class="box">
            <img src="pic/chicken-grill-.jpg" alt="" />
            <h3>Grilled Chicken</h3>
            <p>
              Savor our perfectly seasoned and grilled chicken, served with a
              rice and a hot mulukhiyah soup.
            </p>
            <div class="price">EGP 180</div>
            <a href="/#" class="btn">add to cart</a>
          </div>

          <div class="box">
            <img src="pic/steak.jpg" alt="" />
            <h3>Mushroom Steak</h3>
            <p>
              Enjoy our tender Steak, complemented by golden fried mushroom,
              fluffy rice, and savory grilled potatoes.
            </p>
            <div class="price">EGP 300</div>
            <a href="/#" class="btn">add to cart</a>
          </div>

          <div class="box">
            <img src="pic/shish tawook.jpg" alt="" />
            <h3>Shish Tawook</h3>
            <p>
              Treat yourself to our marinated chicken skewers with a side of
              rice and crispy fries
            </p>
            <div class="price">EGP 170</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
          <div class="box">
            <img src="pic/kofta.jpg" alt="" />
            <h3>Kofta</h3>
            <p>
              Enjoy our flavorful grilled kofta with rice, rich tahini, and a
              side of pickles.
            </p>
            <div class="price">EGP 200</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
          <div class="box">
            <img src="pic/fish.jpg" alt="" />
            <h3>Grilled Fish</h3>
            <p>
              Delight our Grilled Fish, accompanied by rice, smooth tahini, and
              a refreshing side salad.
            </p>
            <div class="price">EGP 150</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
          <div class="box">
            <img src="pic/pane.jpg" alt="" />
            <h3>Chicken Pane</h3>
            <p>
              Savor our tender breaded chicken breast, paired with red sauce
              pasta, crispy fries, and a side salad
            </p>
            <div class="price">EGP 170</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
          <div class="box">
            <img src="pic/ma7shi.jpg" alt="" />
            <h3>Mahshi</h3>
            <p>
              Savor our Stuffed Grape Leaves filled with rice and meat, served
              with a bowl of Lesan Asfour Soup.
            </p>
            <div class="price">EGP 150</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
          <div class="box">
            <img src="pic/spaghetti-bolognaise-sauce.jpg" alt="" />
            <h3>Spaghetti Bolognese</h3>
            <p>
              Treat yourself with our rich and hearty meat sauce and spaghetti,
              accompanied by crunchy fries.
            </p>
            <div class="price">EGP 190</div>
            <a href="/#" class="btn">add to cart</a>
          </div>
          
        </div>
      </div>
    </section>

    </>
  )
}

export default Menu