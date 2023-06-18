import React, { useState } from 'react';
import reviewsData from './reviewdata'; // Import the data for reviews
import './review.css'




const ReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviewsData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviewsData.length - 1 : prevSlide - 1));
  };

  const logC = () => {
    console.log(reviewsData,'data');
  }
  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className='text-center'>Customer Reviews</h2><hr/>
        <div className="reviews-carousel">
          {reviewsData.map((review, index) => (
            <div className={`review ${index === currentSlide ? 'active' : ''}`} key={index}>
              <img src={review.image} alt={`Reviewer ${index + 1}`} />
              <h4>{review.name}</h4>
              <p onClick={logC} className="review-text">{review.comment}</p>
            </div>
          ))}
          <button className="carousel-control prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
