import { useEffect } from "react";

import './Home.scss'

import Navbar from "../../Components/Header";

const Home = () => {
    useEffect(() => {
        document.title = "Bmw Elite Motors";  
        window.scrollTo(0,0);
    }, []);

    return (
        <main>
            <Navbar/>
        </main>
    )
}

export default Home;