import React from 'react'
import './career.css'
import img1 from "../Images/CateringImages/catering1.jpg"
import img2 from "../Images/CateringImages/catering2.jpg"
import img3 from "../Images/CateringImages/catering 3.jpg"
import { Link } from 'react-router-dom'
const career = () => {

  return (
    <div>
      <section className="services">
        <div className="container">
          <h2>Career at Railicious</h2>
          <hr />
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="service">
                <img src={img1} alt="Service 1" />
                <h3>Master Chef</h3>
                {/* <p>Make your wedding memorable with our exquisite catering options.</p> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="service">
                <img src={img2} alt="Service 2" />
                <h3>Manager</h3>
                {/* <p>Impress your clients and colleagues with our professional catering services.</p> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="service">
                <img src={img3} alt="Service 3" />
                <h3>Server</h3>
                {/* <p>Host a perfect private party with our delectable food and impeccable service.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='buttonBody'>
        <Link to="/applyform" className="button">Apply Now</Link>

      </div>
    </div>
  )
}

export default career
