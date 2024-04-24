import React from "react";

import './Maintenance.scss'
import { FaDev } from "react-icons/fa6";

const Maintenance = () => {
    return (
        <div id="maintenance" className="wrapper">
            <div className="content">
                <div id="scroll-container">
                <div className="left-icon">
                    <FaDev />
                </div>
                    <div id="scroll-text">
                        <p>
                            <span>MAINTENANCE! </span>
                            Site is under development to bring you an even better experience. Also bring exciting new features and improvements.
                        </p>
                    </div>
                <div className="right-icon">
                    <FaDev />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Maintenance;