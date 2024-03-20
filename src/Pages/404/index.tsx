import { useEffect } from "react";

import './Error.scss'

import Navbar from "../../Components/Header";
import { TbError404 } from "react-icons/tb";

const Error = () => {
    useEffect(() => {
        document.title = "Autohunt - Unleash the speed";  
        window.scrollTo(0,0);
    }, []);

    return (
        <>
        <Navbar/>
        <section className="wrapper">
            <div className="content">
                <TbError404/>
            </div>
        </section>
        </>
    )
}

export default Error;