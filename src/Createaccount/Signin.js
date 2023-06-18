import React, { useState } from 'react'
// import { loginuser } from '../../harsh reducers/action-creators';
// import { useDispatch } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import {Link, useNavigate} from "react-router-dom";

const Siginin = () => {
//   const dispatch =useDispatch()

const navigate =useNavigate();
  const [creatData,setCreateData]=useState({
    name:'',
    email:'',
    password:''
  })
  console.log(creatData);
  const dataChange =(e)=>{
 const {name,value}=e.target;
 setCreateData({...creatData,[name]:value})
  }
  const sendData =(e)=>{
    e.preventDefault();
    const{name, email, password}=creatData;
    // dispatch(loginuser(creatData))
    fetch(`https://therailicious.com/api/auth/createuser`, {
         method: "POST",
         headers: {
           "content-type": "application/json"
         },
   
         body: JSON.stringify(
           {
             name, email,password
           })
       })
   
         .then(response => response.json())
         .then(response => {
   
           if (!response?.success) {
             throw Error(response.error)
   
           }
          //  console.log(response);
          //  console.log(response);
           toast.success(response?.message)
           localStorage.setItem("Authorization", JSON.stringify(response.authtoken));
           // setMessage(response);
           navigate("/reservation")
   
         })
         .catch((error) => {
          //  console.log(error);
           toast.error(error?.message);
   
         });

   
  }
  return (
    <div>
      <section className="my-5">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={sendData}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={creatData.name} name='name' onChange={dataChange}/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={creatData.email} name='email' onChange={dataChange} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" value={creatData.password} name='password' onChange={dataChange} />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>


                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Siginin