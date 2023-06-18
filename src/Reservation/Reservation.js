import React, { useEffect, useState } from 'react'
import './reservation.css'
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";


const Reservation = () => {
    const navigate =useNavigate();
    // const [samp,setSamp] =useState("")
    // useEffect(()=>{
    //     const authToken = localStorage?.getItem('Authorization')?.replaceAll('"', "");
    //     if (authToken) {
    //       setSamp(authToken);
    //     }
    // },[])
    const [data,setData]= useState({
        name:"",
        contactNo:'',
        numberofpeople:'',
        setectDate:"",
        selectHour:""
    })
    console.log(data);
    const samplehit=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }
    const sendData =(e)=>{
        

            e.preventDefault();
            const { name, contactNo,numberofpeople,setectDate,selectHour} = data;
            // debugger;
            
            fetch(`https://backend-production-e1c2.up.railway.app/api/notes/addnote`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YjQ3NmY2NmQ5MzIzNDJiYjJmZjVmIn0sImlhdCI6MTY4Njg1MjA4N30.FwqwtCx8JGytoRuw8sQJ7SxeDbyqJKEKq9NG8FrC-TM",
                },
                
                body: JSON.stringify({
                    name,
                    contactNo,
                    setectDate,
                    numberofpeople,
                    selectHour

                }),
            })
            .then((response) => response.json())
            
            .then((response) => {
                //  console.log(response.sucess) 
                toast.success(response?.sucess)      
                
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
    <div>
        
        <section className = "banner">
            <h2 style={{fontSize:"60px"}}>Book Your Table Now</h2>
            <div className = "card-container">
                <div className = "card-img">
                    
                </div>

                <div className = "card-content">
                    <h3 style={{fontFamily:"Calligraffitti', cursive"}}>Reservation</h3>
                    <form onSubmit={sendData}>
                        <div className = "form-row">
                            <select name = "setectDate"  value={data.setectDate} onChange={samplehit}>
                                <option value = "day-select">Select Day</option>
                                <option value = "sunday">Sunday</option>
                                <option value = "monday">Monday</option>
                                <option value = "tuesday">Tuesday</option>
                                <option value = "wednesday">Wednesday</option>
                                <option value = "thursday">Thursday</option>
                                <option value = "friday">Friday</option>
                                <option value = "saturday">Saturday</option>
                            </select>

                            <select name = "selectHour"  value={data.selectHour} onChange={samplehit}>
                                <option value = "hour-select">Select Hour</option>
                                <option value = "10">10: 00</option>
                                <option value = "10">12: 00</option>
                                <option value = "10">14: 00</option>
                                <option value = "10">16: 00</option>
                                <option value = "10">18: 00</option>
                                <option value = "10">20: 00</option>
                                <option value = "10">22: 00</option>
                            </select>
                        </div>

                        <div className = "form-row">
                            <input type = "text" value={data.name} onChange={samplehit} name='name'   placeholder="Full Name"/>
                            <input type = "text" value={data.contactNo} onChange={samplehit} name='contactNo'  placeholder="Phone Number"/>
                        </div>

                        <div className = "form-row">
                            <input type = "number" value={data.numberofpeople} onChange={samplehit} name='numberofpeople' placeholder="How Many Persons?" min = "1"/>
                            <input type = "submit" value = "BOOK TABLE"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Reservation
