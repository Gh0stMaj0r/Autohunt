import React from "react";

import './About.scss'

import { GiHomeGarage } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FaUser, FaStar } from "react-icons/fa";

const AboutUs = () => {

    interface AboutProps {
        icon: any
        stats: string
        label: string
        id?: string
    }

    const About = (props: AboutProps) => {
        const { stats, icon, label, id } = props;

        return (
            <div className="stats-container" id={id}>
                <span className="stats-name">
                    <span>{icon} {stats} </span>
                </span>

                <hr></hr>

                <p className="stats-label">
                    {label}
                </p>
            </div>
        );
    }


    return (
        <section id="about" className="wrapper">
            <div className="content">
                <h1>About Us</h1>
                <div className="about-container">
                    <div className="about-stats">
                        <p>AutoHunt is revolutionizing the way people buy and sell cars. 
                            With a passion for innovation and a commitment to customer satisfaction, we've created a platform that simplifies the entire automotive experience. <br></br><br></br>
                            Our mission is to provide a seamless, stress-free process for finding the perfect vehicle or selling your current one. 
                            Backed by cutting-edge technology and a dedicated team, we strive to exceed expectations and make car shopping and selling enjoyable for everyone.<br></br><br></br>
                            Whether you're a first-time buyer or a seasoned seller, trust AutoHunt to deliver convenience, transparency, and exceptional service every step of the way.</p>

                        <div className="stats-row">
                            <About
                                icon= {<GiHomeGarage/>}
                                stats="150"
                                label="Vehicles in Stock"
                            />

                            <About
                                icon= {<IoCarSportSharp/>}
                                stats="40"
                                label="Sold Vehicles"
                            />
                        </div>

                        <div className="stats-row">
                            <About
                                icon={<FaUser/>}
                                stats="38"
                                label="Happy customers"
                            />

                            <About
                                icon={<FaStar/>}
                                stats="4.8 / 5"
                                label="Avarage Rating"
                            />
                        </div>
                    </div>
                    <div>
                        <img src="./Images/about-image.jpg" alt="AboutImage" className="about-image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;