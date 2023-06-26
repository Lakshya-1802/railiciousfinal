import React,{ useEffect, useState } from 'react'
import './Timers.css'
function Timers() {
    const [timer, setTimer] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);
    const [todaySum, setTodaySum] = useState(0);
  
    // Function to generate a random number between 40 and 60
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * (56 - 40) + 40);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const hour = now.getHours();
  
        if (hour >= 11 && hour <= 22) {
          const randomNumber = generateRandomNumber();
          setNumbers(prevNumbers => [...prevNumbers, randomNumber]);
  
          // Calculate the sum of all generated numbers
          const sum = numbers.reduce((acc, curr) => acc + curr, 0);
          setSum(sum);
  
          // Update the timer display
          setTimer(randomNumber);
  
          // Update today's sum
          setTodaySum(prevTodaySum => prevTodaySum + randomNumber);
        } else if (hour === 23) {
          // Reset today's sum at the end of the cycle
          setTodaySum(sum);
            
          // Clear the numbers array to start a new cycle
          setNumbers([]);
        }
      }, 60*60 * 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [numbers, sum]);
  
    useEffect(() => {
      const now = new Date();
      const hour = now.getHours();
  
      // Reset today's sum at the start of a new day
      if (hour >= 0 && hour < 11) {
        setTodaySum(0);
      }
    }, []);
  
    return (
      <>

<section className="contact" style={{background:"green"}} >
        <div className="container text-center">

          <div className="row">
            
            <div className="col-md-4"> 
              <h3>Hourly Customers</h3><hr />
              <div className="info-item text-center">
                <span>{timer} +</span>
              </div>
            </div>
            <div className="col-md-4"> 
              <h3> Customers Today</h3><hr />
              <div className="info-item text-center">
                <span>{todaySum} +</span>
              </div>
            </div>
            <div className="col-md-4"> 
              <h3>Total Customers till now</h3><hr />
              <div className="info-item text-center">
                <span>{sum} +</span>
              </div>
            </div>
        </div>
        </div>
      </section>
      </>
    );
}

export default Timers
