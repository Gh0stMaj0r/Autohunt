import React from "react";

import './Services.scss'

import { IoCarSportOutline } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { MdSell } from "react-icons/md";

const Services = () => {

        interface ServiceProps {
            name_1: string;
            description: string;
            icon: any;
            id?: string;
        }
    
        const Service = (props: ServiceProps) => {
            const { icon, name_1, description, id } = props;
    
            return (
                <div className="service-container" id={id}>
                    <span className="service-icon">
                        {icon}
                    </span>
    
                    <span className="service-name">
                        <span>{name_1} </span>
                    </span>
    
                    <p className="service-description">
                        {description}
                    </p>
    
                    <button
                        rel="noreferrer noopener nofollow"
                        className="button"
                    >
                        Read more
                    </button>
                </div>
            );
        }
    
    return (
        <section id="ourservices" className="wrapper">
            <div className="content">
                <h1>Our Services</h1>
                <div className="service-cards">
                <Service
                    icon= {<IoCarSportOutline/>}
                    name_1="NEW CARS"
                    description="Discover your dream car effortlessly with AutoHunt's New Car Service. 
                    Say goodbye to endless searches and hello to a streamlined car-buying experience tailored to your preferences."
                />

                <Service
                    icon= {<FaCarOn/>}
                    name_1="USED CARS"
                    description="Discover the perfect pre-owned vehicle hassle-free with AutoHunt's exceptional Used Car Service
                    Say farewell to endless searches and embrace the simplicity of finding your dream car with us."
                />

                <Service
                    icon= {<MdSell/>}
                    name_1="SELL CARS"
                    description="Sell your car hassle-free with AutoHunt's Sell Car Service. Experience a streamlined process that connects you with eager buyers, ensuring a quick and profitable sale."
                />
                </div>
            </div>
        </section>
    )
}

export default Services;