import React, { useState, useEffect } from 'react'
import './food.css'

function Food() {
 
  
  const [data, SetData] = useState([])
  console.log(data,"harsh sexy");
  useEffect(() => {
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata`, {

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
  // console.log(data)

  return (
    <>
      <div ><h1 className='text-center'>Food</h1><hr /></div>
      <div className="container-fluid">
        <div className="row">
          
          {data?.map((harsh, index) => {
            console.log(harsh,"harsh");
              return(
            <div className="column" key={index}>
              <img
                alt="not found"
                className="img img-fluid"
                src={`https://backend-production-e1c2.up.railway.app/${harsh?.image}`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>
              )
          }
          )}
        </div>
      </div>

      {/* <div className="container-fluid">

        <div className="row ">
          <div className="column">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
          </div>
          <div className="column">
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
          </div>
          <div className="column">
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
          </div>
          <div className="column">
            <img src={img13} />
            <img src={img14} />
            <img src={img15} />
            <img src={img16} />
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Food
