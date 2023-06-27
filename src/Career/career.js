import React, { useState, useEffect } from 'react'
import './career.css'
import img1 from "../Images/CateringImages/catering1.jpg"
import img2 from "../Images/CateringImages/catering2.jpg"
import img3 from "../Images/CateringImages/catering 3.jpg"
import { Link } from 'react-router-dom'
function Career  ()   {
  const [data, SetData] = useState([])
  console.log(data,"harsh sexy");
  useEffect(() => {
    fetch(`https://therailicious.com//api/Image/getallimagesdata3`, {

      method: "GET",
      headers: {
        "content-type": "application/json",
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YjQ3NmY2NmQ5MzIzNDJiYjJmZjVmIn0sImlhdCI6MTY4Njg1MzE0Mn0._g7VbHLLHvzawjxG3EH8oKIu1c4td3yQ3pOkIgucwfU"
      },
    })
      .then(response => response.json())
      .then(response => {
        // dispatch(datasImage(response))
        SetData(response?.images);
        console.log(response.images)
      })
      .catch(error => {
        // console.log(error, "joih");
      });
  }, [])
  

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

     

{/* ------------------------- */}

  <div ><h1 className='text-center'>Current Vacancies</h1><hr /></div>
  <div className="container-fluid">
    <div className="row">
      
      {data?.map((harsh, index) => {
        console.log(harsh,"harsh");
          return(
             <div className="col-sm-6 col-md-4">
              <div className="service"  key={index}>
                <img 
                src={`https://therailicious.com/${harsh?.image}`}
            data-bs-toggle="modal" 
            alt="Service 2" />
              </div>
            </div>
        
          )
      }
      )}
    </div>
  </div>

  <div className='buttonBody'>
        <Link to="/applyform" className="button">Apply Now</Link>
      </div>

    </div>
  )
}

export default Career
