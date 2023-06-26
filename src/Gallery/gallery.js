
import React, { useState, useEffect, useRef } from 'react'

import "./gallery.css"



import { Link } from 'react-router-dom'


const Gallery = () => {

  const ambience = [
    { id: 1, img: "/Images/Galleryimg/Gallerypage/A1.jpg" },
    { id: 2, img: "/Images/Galleryimg/Gallerypage/A2.jpg" },
    { id: 3, img: "/Images/Galleryimg/Gallerypage/A3.jpg" },
  ]
  const food = [
    { id: 1, img: "/Images/Delicacies/veg (2).jpg" },
    { id: 2, img: "/Images/Delicacies/sizzler.jpg" },
    { id: 3, img: "/Images/Delicacies/pizza.jpg" },
  ]
  const guest = [
    { id: 1, img: "/Images/Delicacies/veg (2).jpg" },
    { id: 2, img: "/Images/Delicacies/sizzler.jpg" },
    { id: 3, img: "/Images/Delicacies/pizza.jpg" },
  ]
  const videos = [
    { id: 1, vid: "/Images/Galleryimg/Videosgallery/video1.mp4" },
    { id: 2, vid: "/Images/Galleryimg/Videosgallery/video2.mp4" },
    { id: 3, vid: "/Images/Galleryimg/Videosgallery/video3.mp4" },
  ]

  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    const videoRef = videoRefs.current[index];
    videoRef.pause();
    videoRef.currentTime = 0;
  };

  return (

    <>
      <div ><h1 className='text-center'>Check Out Our Gallery </h1><hr /></div>
      <div>
        {/* guests */}
        <section className="delicacies">
          <h2>Our Happy Customers !!</h2>


          <div className="row delicacies-row">
            {
              guest.map((image) => (
                <div className="col-sm-6 col-md-4 delicacy">
                  <img src={image.img} alt="Delicacy 1" />
                </div>
              ))
            }

          </div>
          <a href='https://drive.google.com/drive/folders/1tTOKHgUUPBfAKjA_-uHNPnvRZm9Opaqy?usp=sharing'>
            <button type="button" className="btn btn-secondary">More</button>
          </a>
        </section>
        {/* AMBIENCE */}
        <section className="delicacies">
          <h2>Our Ambience</h2>


          <div className="row delicacies-row">
            {
              ambience.map((image) => (
                <div className="col-sm-6 col-md-4 delicacy">
                  <img src={image.img} alt="Delicacy 1" />
                </div>
              ))
            }

          </div>
          <Link to='/ambiencegallery'>
            <button type="button" className="btn btn-secondary">More</button>
          </Link>

        </section>
        {/*Food Gallery*/}
        <section className="delicacies">
          <h2> Our Food</h2>

          <div className="row delicacies-row">
            {
              food.map((img) => (
                <div className="col-sm-6 col-md-4 delicacy">
                  <img src={img.img} alt="Delicacy 1" />
                </div>
              ))
            }

          </div>
          <Link to='/foodgallery'>
            <button type="button" className="btn btn-secondary">More</button>
          </Link>

        </section>
        {/*Video gallery*/}
        <section className="delicacies">
          <h2>Videos</h2>

          <div className="row delicacies-row">
            {
              videos.map((video, index) => (
                <div key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)} className="col-sm-6 col-md-4 delicacy" >
                  <video ref={ref => (videoRefs.current[index] = ref)} className='video' width="216" height="384"  >
                    <source src={video.vid} type="video/mp4" />
                  </video>
                </div>

              ))
            }




          </div>
          <Link to='/videogallery'>
            <button type="button" className="btn btn-secondary">More</button>
          </Link>

        </section>
      </div>
    </>

  )
}

export default Gallery
