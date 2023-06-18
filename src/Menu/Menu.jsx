import React from 'react'
import './Menu.css'
import Menu1 from "../Images/MenuImages/Menu1.jpg" 
import Menu2 from "../Images/MenuImages/Menu2.jpg" 
import Menu3 from "../Images/MenuImages/Menu3.jpg" 
import Menu4 from "../Images/MenuImages/Menu4.jpg" 
import Menu5 from "../Images/MenuImages/Menu5.jpg" 
import Menu6 from "../Images/MenuImages/Menu6.jpg" 
import Menu7 from "../Images/MenuImages/Menu7.jpg" 
import Menu8 from "../Images/MenuImages/Menu8.jpg" 
import Menu9 from "../Images/MenuImages/Menu9.jpg" 
const Menu = () => {
  return (
    <div className='container-fluid' >
        <div ><h1 className='text-center'>Menu <hr/></h1></div>
      <div className='row'>
        <div className="column">
            <img src={Menu1} alt="" />
            <img src={Menu2} alt="" />
            <img src={Menu4} alt="" />
        </div>
        <div className="column">
            <img src={Menu3} alt="" />
            <img src={Menu5} alt="" />
            <img src={Menu6} alt="" />
        </div>
        <div className="column">
            <img src={Menu7} alt="" />a
            <img src={Menu8} alt="" />
            <img src={Menu9} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Menu
