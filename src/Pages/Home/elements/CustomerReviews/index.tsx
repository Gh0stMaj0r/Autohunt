import React from "react";

import './Reviews.scss'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    var settings = {
        dots: true,
        appendDots: (dots: any) => ( //Customoidut navigaatio pallot
        <div
          style={{
            backgroundColor: "transparent",
            borderRadius: "50%",
            padding: "10px"
          }}
        >
            <ul className='dots'>
                {dots}
            </ul>
        </div>
      ),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <section id="reviews" className="wrapper">
            <div className="content">
                <h1>Customer and Staff Reviews</h1>

                <Slider {...settings} className="carousel-slider">
                    <div className="carousel-row">
                        <img className="carousel-image" src="./Images/customer.jpg" alt="" />
                        <div className="carousel-text">
                            <h3>Samuel</h3>
                            <span>Customer</span>
                            <p>"Finding my dream car with AutoHunt was a game-changer. 
                                Their website made it simple to search for the exact features I wanted, and I found the perfect vehicle in no time. 
                                The whole experience was smooth, from browsing to purchasing. I couldn't be happier with my new ride!"</p>
                        </div>
                    </div>
                    <div className="carousel-row">
                        <img className="carousel-image" src="./Images/customer2.jpg" alt="" />
                        <div className="carousel-text">
                            <h3>Addison</h3>
                            <span>Customer</span>
                            <p>"I had been searching for the perfect used car for weeks with no luck until I discovered AutoHunt. 
                                Their extensive inventory and customizable search options helped me narrow down my choices and find the exact make and model I wanted. 
                                The purchasing process was straightforward, and I couldn't be happier with my new car. Thank you, AutoHunt!"</p>
                        </div>
                    </div>
                    <div className="carousel-row">
                        <img className="carousel-image" src="./Images/customer3.jpg" alt="" />
                        <div className="carousel-text">
                            <h3>Samantha</h3>
                            <span>Customer</span>
                            <p>"AutoHunt made buying a car so easy! Their website is intuitive, and their customer service team was incredibly helpful throughout the entire process. 
                                I appreciated their attention to detail and commitment to finding me the right vehicle.
                                 I'll definitely be using AutoHunt for all my future car purchases."</p>
                        </div>
                    </div>
                    <div className="carousel-row">
                        <img className="carousel-image" src="./Images/seller.jpg" alt="" />
                        <div className="carousel-text">
                            <h3>William</h3>
                            <span>Autohunt - Managing Director</span>
                            <p>"Joining AutoHunt has been an incredible journey. 
                                Being part of a team that prioritizes customer satisfaction and revolutionizes the car market is both rewarding and exciting. 
                                I'm proud to contribute to the success of such a dynamic and forward-thinking company."</p>
                        </div>
                    </div>
                    <div className="carousel-row">
                        <img className="carousel-image" src="./Images/seller2.jpg" alt="" />
                        <div className="carousel-text">
                            <h3>Oliver</h3>
                            <span>Autohunt - Marketing Manager</span>
                            <p>"AutoHunt's team has been phenomenal to work with. 
                                Their commitment to excellence and innovation in the automotive industry is inspiring. 
                                It's a privilege to be part of a company that's transforming the car buying and selling experience."</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Reviews;