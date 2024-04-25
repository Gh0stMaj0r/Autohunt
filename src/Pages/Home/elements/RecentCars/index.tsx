import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './RecentCars.scss'

import { IoLogoModelS, IoIosArrowForward } from "react-icons/io";
import { TbEngine, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";

interface Car {
  id: number;
  brand: string;
  model: string;
  engine: string;
  gearbox: string;
  fueltype: string;
}

const Recent: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Car[]>('http://localhost:5000/api/cars', {
        params: { limit: 6},
      });
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section id="recentcars" className="wrapper">
      <div className="content">
        <h1>Recent Cars</h1>
        
        <div className="car-list">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <img className='icon' src="./Images/car-favicon-nobg.png" alt="" />
              <h2>{car.brand}</h2>
              <p><IoLogoModelS/> Model: {car.model}</p>
              <p><TbEngine/> Engine: {car.engine}</p>
              <p><TbManualGearbox/> Gearbox: {car.gearbox}</p>
              <p><BsFillFuelPumpFill/> Fueltype: {car.fueltype}</p>
              <div className="button-group">
                <button className="button">More details <IoIosArrowForward/></button>
              </div>
            </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Recent;