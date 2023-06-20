import React, { useState } from 'react'
import './franch.css'
import img from './franchise.jpg'
// import { useNavigate } from "react-router-dom";

function Franch () {

    // const [data, setData] = useState({
    //     name: "",
    //     contactNo: '',
    //     email: '',
    //     discription: "",
    //     title: ""
    // })
    // console.log(data);
    // const samplehit = (e) => {
    //     const { name, value } = e.target;
    //     setData({ ...data, [name]: value })
    // }
    // const sendData = (e) => {
    //     e.preventDefault();
    //     const { name, contactNo, email, discription, title } = data;
    //     // debugger;

    //     fetch(`https://backend-production-e1c2.up.railway.app/api/notes/addnote`, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YjQ3NmY2NmQ5MzIzNDJiYjJmZjVmIn0sImlhdCI6MTY4Njg1MjA4N30.FwqwtCx8JGytoRuw8sQJ7SxeDbyqJKEKq9NG8FrC-TM"
    //         },

    //         body: JSON.stringify({
    //             name,
    //             contactNo,
    //             discription,
    //             email,
    //             title
    //         }),
    //     })
    //         .then((response) => response.json())

    //         .then((response) => {
    //             //  console.log(response.sucess) 
    //             // toast.success(response?.sucess)

    //             if (!response?.sucess) {
    //                 throw Error(response.error)
    //             }
    //             //  console.log(respo
    //         })
    //         .catch((err) => {
    //             // setError(err.message);
    //             //  toast.error(err);     

    //         })
    // }
    return (
        <div>
            <div className='text-center'><h1> Franchise</h1><hr /></div>
            <div className='' style={{ margin: "0 10px" }}>
                <h2>Why Choose us </h2>
                <p>
                    Welcome to our railway-themed restaurant, where nostalgia meets culinary excellence. Immerse yourself in the charm of a vintage railway station as you indulge in our carefully curated menu. From classic railway-inspired dishes to innovative culinary creations, our chefs deliver an exceptional dining experience.
                </p>
            </div>
            <div className="container content mt-5" >
                <div className="row margin-bottom-30">
                    <div className="col-md-6 " >
                        <img src={img} style={{ width: "100%", paddingBottom: "15px" }} alt="gg" />
                    </div>
                    <div className="col-md-6 mb-margin-bottom-25 mr-5px" >
                        <h2 className='text-center' style={{ color: "brown" }}>Get a Franchise Now</h2>
                        <form action="https://formsubmit.co/cf18775a28f932a250166b2dcabb6ef3" method="POST">
                            <div className="mb-3 text-start">
                                <input type="text" className="form-control" id="name" placeholder='Name' name="Name" />
                            </div>
                            <div className="mb-3 text-start">

                                <input type="text" className="form-control" id="number" placeholder='Contact Number' name="Contact Number" />
                            </div>
                            <div className="mb-3 text-start">
                                <input type="email" className="form-control" id="email" name='E-mail' placeholder='Enter your email Address' aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 text-start">
                                <input type="text" className="form-control" id="name" placeholder='Where do you want Railicios outlet? ' name='Where do you want Railicios outlet?' />
                            </div>
                            <div className="mb-3 text-start">
                                <textarea className="form-control  " name='Message' id="msg" placeholder='Enter your message' cols="30" rows="3" style={{ marginLeft: "12px" }} ></textarea>

                            </div>
                            <button type="submit" className="btn btn-success text-start mb-2" style={{ marginLeft: "12px" }} >Submit</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Franch
