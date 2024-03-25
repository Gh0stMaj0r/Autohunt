import React from "react";

import './Footer.scss'

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="footer" className="wrapper">
            <div className="content">

                <div className="footer-flex">
                
                    <div className="footer-column">
                        <img src="./Images/New-Logo.png" alt="Logo" className="footer-logo" />
                        <p>"Unleash the Speed and Experience Thrill"<br></br> - with Autohunt</p>
                    </div>

                    <div className="footer-column">
                        <h3>Useful Links</h3>
                        <a>About Us</a>
                        <a>FAQ</a>
                        <a>Contact</a>
                    </div>

                    <div className="footer-column">
                        <h3>Customers Service</h3>
                        <a>support@autohunt.com</a>
                        <a>240-865-3730</a>
                    </div>

                    <div className="footer-column">
                        <h3>Location</h3>
                        <a>Leland Avenue, Maryland</a>
                        <a>21220, United States</a>
                    </div>

                    <div className="footer-column">
                        <h3>Our Social Media</h3>
                        <div className="social">
                            <a><FaFacebook/></a>
                            <a><FaInstagram/></a>
                            <a><FaYoutube/></a>
                        </div>
                    </div>
                </div>

                <div className="copyright-legal">
                    <p>Copyright © 2024 Autohunt Ltd.<br></br> All Rights Reserved</p>
                    
                    <div className="legal-info">
                        <a>Terms Of Service</a>
                        <a>Privacy Policy</a>
                        <a>EULA</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer;