import React from 'react';

import './App.css';
import './Scss/Colors.scss';

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

import Home from './Pages/Home';
import Error from './Pages/404';

function App() {
  return (
    <Router>
      <Routes>

        <Route
        path="/"
        element={<Home/>}/>

        <Route
        path="/*"
        element={<Error/>}/>

      </Routes>
    </Router>
  );
}

export default App;
