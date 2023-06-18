import React, { useState, useEffect, useRef } from 'react';
import './videosgallery.css';

function Videosgallery () {
  const [data, setData] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    fetch('https://backend-production-e1c2.up.railway.app/api/video/getallvideo', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4YjQ3NmY2NmQ5MzIzNDJiYjJmZjVmIn0sImlhdCI6MTY4Njg1MzE0Mn0._g7VbHLLHvzawjxG3EH8oKIu1c4td3yQ3pOkIgucwfU',
      },
    })
      .then(response => response.json())
      .then(response => {
        setData(response?.videos);
        console.log(response.videos);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    const videoRef = videoRefs.current[index];
    videoRef.pause();
    videoRef.currentTime = 0;
  };

  return (
    <section className="delicacies">
      <h2>Videos</h2>
      <hr />
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        {data?.map((harsh, index) => (
          <div
            className="d-flex flex-column m-3"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              ref={ref => (videoRefs.current[index] = ref)}
              width="300px"
              height="350px"
              
            >
              <source
                src={`https://backend-production-e1c2.up.railway.app/${harsh?.video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </section>

    
  );
};

export default Videosgallery;
