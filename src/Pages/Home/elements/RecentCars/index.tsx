import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './RecentCars.scss'

import { IoLogoModelS } from "react-icons/io";
import { TbEngine, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarKey } from "react-icons/gi";

interface Car {
  id: number;
  brand: string;
  model: string;
  engine: string;
  gearbox: string;
  fueltype: string;
}

const Recent: React.FC = () => {
  const [new_cars, setCars] = useState<Car[]>([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');
  const [gearbox, setGearbox] = useState('');
  const [fueltype, setFueltype] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Car[]>('http://localhost:5000/api/new_cars', {
        params: { limit: 5},
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
          {new_cars.map((car) => (
            <div className="car-card" key={car.id}>
              <GiCarKey className='icon'/>
              <h2>{car.brand}</h2>
              <p><IoLogoModelS/> Model: {car.model}</p>
              <p><TbEngine/> Engine: {car.engine}</p>
              <p><TbManualGearbox/> Gearbox: {car.gearbox}</p>
              <p><BsFillFuelPumpFill/> Fueltype: {car.fueltype}</p>
            </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Recent;