import React from 'react'
import "./nav.css"
import logo from "./RALICIOUS_LOGO-removebg-preview2.png"
import { Link } from 'react-router-dom'
const nav = () => {
  return (
    <>

      <div className='header ' style={{ color: "white", backgroundColor: "#4C632D" }} >
        <nav className="navbar navbar-expand-lg  ">
          <div className=" container-fluid">
            <Link className="navbar-brand d-lg-none" to='/'>
              <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row" id="navbarNav">
              <ul className="navbar-nav col d-flex justify-content-end" style={{ color: "white", fontWeight: "bold", fontSize: "1rem" }}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/menu" style={{ color: "white" }}>Menu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/reservation" style={{ color: "white" }}> Reservation</Link>
                </li>
              </ul>
              <div className='d-flex justify-content-center'>
                <Link className="navbar-brand d-none d-lg-block " to='/'>
                  <img src={logo} style={{ maxWidth: "100%", maxHeight: "100%", height: "4rem", width: "12rem" }} alt="" />
                </Link>
              </div>
              <ul className="navbar-nav col" style={{ fontWeight: "bold", fontSize: "1rem" }}>

                <li className="nav-item">
                  <Link className="nav-link active" to="/about" style={{ color: "white" }}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/franchise' style={{ color: "white" }}>Franchise</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/gallery' style={{ color: "white" }}>Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to='/contact' style={{ color: "white" }}>Contact</Link>
                </li>
              </ul>


            </div>
          </div>
        </nav>

      </div>






    </>
  )
}

export default nav

{/* <li className="nav-item">
          <Link className="nav-link active" to="/signin"> Creat account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/signup">Sign up</Link>
        </li> */}