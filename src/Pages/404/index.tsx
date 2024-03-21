import { useEffect } from "react";

import './Error.scss'

import Navbar from "../../Components/Header";
import { TbError404 } from "react-icons/tb";

const Error = () => {
    useEffect(() => {
        document.title = "Autohunt - 404 Page";  
        window.scrollTo(0,0);
    }, []);

    return (
        <>
        <Navbar/>
        <section id="error" className="wrapper">
            <div className="content">
                <div>
                    <span><TbError404 id="error"/></span>
                    <p>ERROR</p>
                </div>
                <div className="error-text">
                    <p>
                        <span>Sorry</span>, Page <span>Not</span> Found!
                    </p>
                    <div className="error-reason">
                    <ul>
                        <h3>Possible Reasons</h3>
                        <li>Page is broken or outdated link</li>
                        <li>Page is under development</li>
                        <li>
                            If you see this, take contact to our support team.<br></br> 
                            <a

                            className="support-link"
                            href="mailto:support@autohunt.com" 
                            rel='noreferrer noopener nofollow' 
                            target='_blank'

                            >
                                support@autohunt.com</a></li>
                    </ul>
                    </div>
                    <a href="/">
                        <button className="button">Go back Home</button>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Error;