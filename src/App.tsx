import React, { useState } from 'react';

import './App.css';
import './Scss/Colors.scss';
//Components
import Navbar from './Components/Header';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

import Home from './Pages/Home';
import Error from './Pages/404';
import SellCar from './Pages/SellYourCar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

        <Route
        path="/"
        element={<Home/>}/>

        <Route
        path="/sellyourcar"
        element={<SellCar/>}/>

        <Route
        path="/*"
        element={<Error/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
