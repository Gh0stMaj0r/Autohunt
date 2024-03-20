import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './RecentCars.scss'

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

const Recent: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<Car[]>('/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="car-list">
    {cars.map((car) => (
      <div className="car-card" key={car.id}>
        <h2>{car.brand}</h2>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
      </div>
        ))}
    </div>
  );
};

export default Recent;