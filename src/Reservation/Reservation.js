import React, { useState } from 'react'
import './reservation.css'
import { toast } from "react-toastify";
// import {useNavigate} from "react-router-dom";


const Reservation = () => {
    // const navigate =useNavigate();

    const [data, setData] = useState({
        name: "",
        contactNo: '',
        numberofpeople: '',
        setectDate: "",
        selectHour: ""
    })
    console.log(data);
    const samplehit = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const sendData = (e) => {


        e.preventDefault();
        const { name, contactNo, numberofpeople, setectDate, selectHour } = data;
        // debugger;

        fetch(`https://therailicious.com/api/notes/addnote`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YjQ3NmY2NmQ5MzIzNDJiYjJmZjVmIn0sImlhdCI6MTY4Njg1MjA4N30.FwqwtCx8JGytoRuw8sQJ7SxeDbyqJKEKq9NG8FrC-TM",
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

            <section className="banner">
                <h2 style={{ fontSize: "60px" }}>Book Your Table Now</h2>
                <div className="card-container">
                    <div className="card-img">

                    </div>

                    <div className="card-content">
                        <h3 style={{ fontFamily: "Calligraffitti', cursive" }}>Reservation</h3>
                        <form onSubmit={sendData}>
                            <div className="form-row">
                                <input type='date' name="setectDate" value={data.setectDate} onChange={samplehit}>
                                </input>
                                <select name="selectHour" value={data.selectHour} onChange={samplehit}>
                                    <option value="hour-select">Select Hour</option>
                                    <option >12: 00 PM</option>
                                    <option >13: 00 PM</option>
                                    <option >14: 00 PM</option>
                                    <option >15: 00 PM</option>
                                    <option >16: 00 PM</option>
                                    <option >17: 00 PM</option>
                                    <option >18: 00 PM</option>
                                    <option >19: 00 PM</option>
                                    <option >20: 00 PM</option>
                                    <option >21: 00 PM</option>
                                    <option >22: 00 PM</option>


                                </select>
                            </div>

                            <div className="form-row">
                                <input type="text" value={data.name} onChange={samplehit} name='name' placeholder="Full Name" />
                                <input type="text" value={data.contactNo} onChange={samplehit} name='contactNo' placeholder="Phone Number" />
                            </div>

                            <div className="form-row">
                                <input type="number" value={data.numberofpeople} onChange={samplehit} name='numberofpeople' placeholder="How Many Persons?" min="1" />
                                <input type="submit" value="BOOK TABLE" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Reservation
