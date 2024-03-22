import { useEffect } from "react";

import './Home.scss'

import Navbar from "../../Components/Header";
import Landing from "./elements/Landing";
import Brands from "./elements/CarBrands";
import Recent from "./elements/RecentCars";
import AboutUs from "./elements/About";
import Services from "./elements/OurServices";
import Reviews from "./elements/CustomerReviews";
import Contact from "./elements/Contact";
import Footer from "../../Components/Footer";

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
            <AboutUs/>
            <Services/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </main>
    )
}

export default Home;