import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
     
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor:"#4C632D"}}
          >
    {/* <!-- Grid container --> */}
    <div className="container p-4 pb-0">
      {/* <!-- Section: Links --> */}
      <section className="">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4  " style={{fontWeight:"bolder",fontSize:"20px"}}>
              Railicious
            </h6>
            <p>
              Welcome to our railway-themed restaurant, where nostalgia meets culinary excellence. 
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
            <p>
              <Link to='/'className="text-white">Home</Link>
            </p>
            <p>
              <Link to='/menu'className="text-white">Menu</Link>
            </p>
            <p>
              <Link to='/about'className="text-white">About</Link>
            </p>
           
          </div>
          {/* <!-- Grid column --> */}

          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Our Services
            </h6>
            <p>
              <Link to='/reservation'className="text-white">Reservation</Link>
            </p>
            <p>
              <Link to='/franchise'className="text-white">Franchise</Link>
            </p>
            <p>
              <Link to='/career'className="text-white">Career</Link>
            </p>
            
          </div>

          {/* <!-- Grid column --> */}
          <hr className="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Connect With Us</h6>
            <p><i className="fas fa-home mr-3"></i> Metro Station, Right Under, Sector 137, Noida, Uttar Pradesh 201305</p>
            <p><i className="fas fa-envelope mr-3"></i> railiciousnoida@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 96 979 248 25</p>
            {/* <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr className="my-3"/>

      {/* <!-- Section: Copyright --> */}
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          {/* <!-- Grid column --> */}
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            {/* <!-- Copyright --> */}
            <div className="p-3">
              © 2020 Copyright:All rights reserved
              
            </div>
            {/* <!-- Copyright --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            {/* <!-- Facebook --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
               href='https://www.facebook.com/railiciousncr?mibextid=ZbWKwL'
               target="_blank" rel="noopener noreferrer"
               role="button"
               ><i className="fab fa-facebook-f"></i
              ></a>

            {/* <!-- Map --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
               href='https://maps.app.goo.gl/JkMEJyQGqpjQJ33B7'
               target="_blank" rel="noopener noreferrer"
               role="button"
               ><i className="fa-sharp fa-solid fa-location-dot"></i>
              </a>

            {/* <!-- Instagram --> */}
            <a
               className="btn btn-outline-light text-white btn-floating m-1"
               href='https://instagram.com/railiciousncr?igshid=MmJiY2I4NDBkZg=='
               target="_blank" rel="noopener noreferrer"
               role="button"
               ><i className="fab fa-instagram"></i
              ></a>
          </div>
          {/* <!-- Grid column --> */}
        </div>
      </section>
      {/* <!-- Section: Copyright --> */}
    </div>
    {/* <!-- Grid container --> */}
  </footer>
  
    </div>
  )
}

export default Footer
