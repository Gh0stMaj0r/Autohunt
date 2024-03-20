import { useEffect } from "react";

import './Home.scss'

import Navbar from "../../Components/Header";
import Landing from "./elements/Landing";
import Brands from "./elements/CarBrands";
import Recent from "./elements/RecentCars";
import Services from "./elements/OurServices";

const Home = () => {
    useEffect(() => {
        document.title = "Autohunt - Unleash the speed";  
        window.scrollTo(0,0);
    }, []);

    return (
        <main>
            <Navbar/>
            <Landing/>
            <Brands/>
            <Recent/>
            <Services/>
        </main>
    )
}

export default Home;