import React from 'react'
import "./Home.css"
import ReviewsCarousel from '../Reviewcard/review'
import back from '../Images/HomeHeader.jpg'
import snacks from '../Images/Delicacies/Veg.jpg'
import chinese from '../Images/Delicacies/chinese.jpg'
import noodle from '../Images/Delicacies/noodle.jpg'
import sizzler from '../Images/Delicacies/sizzler.jpg'
import desert from '../Images/Delicacies/desert.jpg'
import drinks from '../Images/Delicacies/drinks.jpg'
import kebab from '../Images/Delicacies/kebab.jpg'
import paneer from '../Images/Delicacies/paneer.jpg'
import pizza from '../Images/Delicacies/pizza.jpg'
import veg from '../Images/Delicacies/veg (2).jpg'




<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>


const Home = () => {
  return (
    <div >
      {/* HomeHeader */}
      <div className=" mx-0 " style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${back})`,
        backgroundSize: "cover",
        maxWidth: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: " center cente",

      }}>
        <div className="rotating-text-wrapper">
          <h2>Welcome to Railicious</h2>
          <h2>A unique train theme based restaurant</h2>
          <h2>Join us on a journey of delicious food </h2>
        </div>
      </div>

      {/* our Cuisine    */}
      <section className="delicacies">
        <h2>Cuisine We Serve</h2>
        <hr />
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={veg} alt="Delicacy 1" />
            <h3>North Indian</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={chinese} alt="Delicacy 1" />
            <h3>Chinese</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={paneer} alt="Delicacy 1" />
            <h3>Punjabi</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={kebab} alt="Delicacy 1" />
            <h3>Multi Cuisine</h3>
          </div>



        </div>
      </section>

      {/* Our delicacies */}
      <section className="delicacies">
        <h2>Our Delicacies</h2>
        <hr />
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={noodle} alt="Delicacy 1" />
            <h3>Noodles</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={drinks} alt="Delicacy 1" />
            <h3>Beverages</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={desert} alt="Delicacy 1" />
            <h3>Dessserts</h3>
          </div>
        </div>
        <div className="row delicacies-row">
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={snacks} alt="Delicacy 1" />
            <h3>Tikka's & Kebabs</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={pizza} alt="Delicacy 1" />
            <h3>Pizzas</h3>
          </div>
          <div className="col-sm-6 col-md-4 delicacy">
            <img src={sizzler} alt="Delicacy 1" />
            <h3>Sizzlers</h3>
          </div>
        </div>
      </section>

      {/* Testimonals */}

      <ReviewsCarousel />

    </div>
  )
}

export default Home
