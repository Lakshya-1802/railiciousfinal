import React, { useEffect, useState } from 'react'
// import { signItUp } from '../../harsh reducers/action-creators'
// import { useDispatch } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {Navigate} from "react-router-dom";

const Login = () => {
  const isAthenticated =localStorage.getItem(`Authorization`)
  console.log(isAthenticated?.length);
  const navigate =useNavigate();
  
  // const navigate =useNavigate();
//   const dispatch =useDispatch()
  const [signup,setSignUp]=useState({
    email:'',
    password:''
  })
  // console.log(signup);
  const signUpChange=(e)=>{
    const {name,value}=e.target
    setSignUp({...signup,[name]:value})
  }
  
  function signUpData(e){
  e.preventDefault();
//   dispatch(signItUp(navigate,signup))
const { email, password} = signup;
      
        
fetch(`https://therailicious.com/api/auth/login`, {
 method: "POST",
 headers: {
   "content-type": "application/json",
 },

 body: JSON.stringify({
   email,
   password,
 }),
})
 .then((response) => response.json())
 
 
 .then((response) => {
   toast.success(response?.toast)
   console.log(response,"casdvas")
   

   if (!response?.success) {
     throw Error(response.error)
   }
   // debugger;
   localStorage.setItem("Authorization", JSON.stringify(response.authtoken));           
//    dispatch(authtoken(JSON.stringify(response.authtoken).replaceAll('"','')))
   navigate("/")
 
   
 })
 .catch((err) => {
   console.log(err,"cvdsavs");
   // setError(err.message);
   // toast.error(err?.message);
   
 });
  
  }
  return (
    <div>
    <section className=" gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{bordeRadius: "1rem"}}>
          
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" value={signup.email} name='email' onChange={signUpChange} />
                <label className="form-label" for="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg"  value={signup.password} name='password' onChange={signUpChange}  />
                <label className="form-label" for="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={signUpData}>Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link to="/signin " className="text-white-50 fw-bold">Sign Up</Link>
              </p>
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

export default Login