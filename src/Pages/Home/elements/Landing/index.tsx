import React from "react";

import './Landing.scss'

const Landing = () => {
    return (
        <section id="landing" className="wrapper">
            <div className="content">
                <div className="landing-text">
                <h1>UNLEASH THE <span>SPEED</span> AND EXPERIENCE <span>THRILL</span></h1>
                <p>Welcome to AutoHunt – your ultimate destination for buying and selling cars hassle-free! 
                    Whether you're on the hunt for your next set of wheels or ready to part ways with your current ride, 
                    AutoHunt is here to make the process seamless and stress-free.</p>
                </div>
                <div className="button-group">
                    <a>
                        <button className="button">Shop Now!</button>
                    </a>
                    <a>
                        <button className="button-nobcolor">Sell your Car</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Landing;