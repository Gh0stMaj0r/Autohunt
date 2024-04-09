import React from "react";

import './SellYourCar.scss'
import CarSellingForm from "../../Components/CarSellingForm";

const SellCar = () => {
    return (
        <section id="sellcar" className="wrapper">
            <div className="content">
                <div className="intro">
                    <h1>Ready to sell your car effortlessly?</h1>
                    <p>"Our intuitive Car Selling Form puts you in the driver's seat.
                        Simply fill in the required details about your vehicle, and let us take care of the rest. 
                        Selling your car has never been easier. Start now and get one step closer to finding the perfect buyer for your vehicle!"</p>
                </div>
                <CarSellingForm/>
            </div>
        </section>
    )
}

export default SellCar;