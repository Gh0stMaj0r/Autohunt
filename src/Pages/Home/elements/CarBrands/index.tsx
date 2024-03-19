import React from "react";

import './Carbrand.scss'

import { 
    SiBmw, 
    SiAudi, 
    SiPorsche, 
    SiLandrover, 
    SiBentley, 
    SiMercedes, 
    SiSubaru,
    SiMitsubishi,
} from "react-icons/si";

const Brands = () => {
    return (
        <section className="wrapper">
            <div className="content">
                <div className="brands">
                    <SiBmw/>
                    <SiAudi/>
                    <SiPorsche/>
                    <SiLandrover/>
                    <SiBentley/>
                    <SiMercedes />
                    <SiSubaru/>
                    <SiMitsubishi/>
                </div>
                <h2>- Sponsored By -</h2>
            </div>
        </section>
    )
}

export default Brands;