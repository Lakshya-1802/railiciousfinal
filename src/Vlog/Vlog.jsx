import React from 'react'
import './Vlog.css'
const vlog = [
    { id: 1, link: "https://so.city/delhi/article/check-out-this-new-restaurant-where-food-is-served-via-mini-trains-on-each-table" },
    { id: 2, link: "https://www.herzindagi.com/reviews/explore-railicious-cafe-in-south-delhi-a-unique-railway-themed-restaurant-article-223296" },
    { id: 3, link: "https://www.jagrantv.com/en-show/what-the-food-episode-11-railicious-cafe-ft-himani-khatri-kailash-colony-cafe-in-south-delhi-rc1038946" },
    { id: 4, link: "https://www.gocityguides.com/delhi/noida/restaurant/railicious" },
    { id: 5, link: "https://mistertikku.com/food-served-by-train/" },
   
]
function Vlog() {
    return (
        <>
            <div ><h1 className='text-center'>Check Out Articles </h1><hr /></div>
            <section className="delicacies">
                
                <div className="row delicacies-row">
                    {
                        vlog.map((video) => (
                            <div className="col-sm-6 col-md-4 delicacy">
                                <a href={video.link}>
                                <iframe  width="300" height="250"
                                    src={video.link}>
                                </iframe>
                                <button  type="button" className="btn btn-secondary my-3">Read More</button>
                                </a>
                                {/* <img src={image.img} alt="Delicacy 1" /> */}
                            </div>
                        ))
                    }

                </div>


            </section>
        </>
    )
}

export default Vlog
