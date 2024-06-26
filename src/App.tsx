import React, { useEffect, useState } from 'react';

import './App.css';
import './Scss/Colors.scss';
//Components
import Navbar from './Components/Header';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';
import Maintenance from './Components/Maintenance';

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

import Home from './Pages/Home';
import Error from './Pages/404';
import Cars from './Pages/Cars';
import SellCar from './Pages/SellYourCar';
import News from './Pages/News';
import NewsPage from './Pages/NewsArticle';
import newsData from './Pages/News/NewsData';
import Contact from './Pages/Contact';
import Faq from './Pages/FAQ';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
    {loading ? (
      <Preloader />
    ) : (
    <Router>
      <Navbar/>
      <Routes>

        <Route
        path="/"
        element={<Home/>}
        />

        <Route
        path="/*"
        element={<Error/>}/>

        <Route
        path="/cars"
        element={<Cars/>}/>

        <Route
        path="/sellyourcar"
        element={<SellCar/>}/>

        <Route 
        path="/news" 
        element={<News news={newsData} />} />
        
        <Route 
        path="/news/:id" 
        element={<NewsPage news={newsData} />} />

        <Route
        path="/contact"
        element={<Contact/>}/>

        <Route
        path="/faq"
        element={<Faq/>}/>

      </Routes>
      <Maintenance/>
      <Footer/>
    </Router>
      )}
    </div>
  );
}

export default App;
