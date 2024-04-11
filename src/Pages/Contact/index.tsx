import React from "react";

import './Contact.scss'

const Contact = () => {
    return (
        <section id="contact" className="wrapper">
            <div className="content">
                <div className="intro">
                    <h1>Contact</h1>
                    <p>Have questions or feedback? We'd love to hear from you! 
                    Get in touch with us using the form below, and we'll get back to you as soon as possible. 
                    Your satisfaction is our priority, and we're here to assist you every step of the way.</p>
                </div>
                <div className="contact-row">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.988892983447!2d-76.43936704313612!3d39.33383716898806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7fd46c7cb8043%3A0xf0226bac876ec7fd!2sLeland%20Ave%2C%20Middle%20River%2C%20MD%2021220%2C%20Yhdysvallat!5e0!3m2!1sfi!2sfi!4v1711105444209!5m2!1sfi!2sfi" 
                title="Maps Location"
                width="600" 
                height="450" 
                loading="lazy"
                className="maps"
                />
                <form>
                    <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Full Name" name="name"/>
                    <label htmlFor="email">Email</label>
                        <input type="email" placeholder="example@gmail.com" name="email"/>
                    <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder="000-111-2222" name="phone"/>
                    <label htmlFor="message">Message</label>
                        <textarea rows={6} cols={50} name="message" placeholder="Write Your Message"></textarea>
                    <button className="button-form">Send Message</button>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;