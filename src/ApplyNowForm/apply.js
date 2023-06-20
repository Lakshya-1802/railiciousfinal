import React, {  useState } from 'react'
import './apply.css'
// import { useNavigate } from "react-router-dom";
function Apply (){
  const [data, setData] = useState({
    name: "",
    contactNo: '',
    email: '',
    discription: "",
    address: ""
})
console.log(data);
const samplehit = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
}
const sendData = (e) => {
    e.preventDefault();
    const { name,  email,contactNo, discription, address } = data;
    // debugger;

    fetch(`https://backend-production-e1c2.up.railway.app/api/notes/addnote`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YjQ3NmY2NmQ5MzIzNDJiYjJmZjVmIn0sImlhdCI6MTY4Njg1MjA4N30.FwqwtCx8JGytoRuw8sQJ7SxeDbyqJKEKq9NG8FrC-TM"
        },

        body: JSON.stringify({
            name,
            email,
            contactNo,
            discription,
            address
        }),
    })
        .then((response) => response.json())

        .then((response) => {
            //  console.log(response.sucess) 
            // toast.success(response?.sucess)

            if (!response?.sucess) {
                throw Error(response.error)
            }
            //  console.log(respo
        })
        .catch((err) => {
            // setError(err.message);
            //  toast.error(err);     

        })
}
  return (
    <>
 
 <div className="form-container my-5 text-center">
  <h2>Apply Now</h2>
  <form action="https://formsubmit.co/lakshyaofficial18@gmail.com" method="POST">
    <div className="form-group">
      <input type="name" id="name" name="Name" placeholder='Full Name' required />
    </div>
    <div className="form-group">
      <input type="email" id="email" name="E-mail" placeholder='Email'  required />
    </div>
    <div className="form-group">
      <input type="text" id="contactNumber" name="Contact Number" placeholder='Contact Number'  required />
    </div>
    <div className="form-group">
      <input type="name" id="role" name="Job Title" placeholder='Job Profile' required />
    </div>
    <div className="form-group"style={{marginLeft:"15px"}}>
      <textarea id="addres" name="Address" placeholder='Address' required defaultValue={""} />
    </div>
    <button type="submit" className="submit-button">Submit</button>
  </form>
</div>


    </>
  )
}

export default Apply
