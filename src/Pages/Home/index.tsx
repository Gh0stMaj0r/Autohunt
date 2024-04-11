import { useEffect } from "react";

import './Home.scss'

import Landing from "./elements/Landing";
import Brands from "./elements/CarBrands";
import Recent from "./elements/RecentCars";
import AboutUs from "./elements/About";
import Services from "./elements/OurServices";
import Reviews from "./elements/CustomerReviews";

const Home = () => {
    useEffect(() => {
        document.title = "Autohunt - Unleash the speed";  
        window.scrollTo(0,0);
    }, []);

    return (
        <main>
            <Landing/>
            <Brands/>
            <Recent/>
            <AboutUs/>
            <Services/>
            <Reviews/>
        </main>
    )
}

export default Home;