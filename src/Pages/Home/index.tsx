import { useEffect } from "react";

import './Home.scss'

import Navbar from "../../Components/Header";
import Landing from "./elements/Landing";

const Home = () => {
    useEffect(() => {
        document.title = "Autohunt";  
        window.scrollTo(0,0);
    }, []);

    return (
        <main>
            <Navbar/>
            <Landing/>
        </main>
    )
}

export default Home;