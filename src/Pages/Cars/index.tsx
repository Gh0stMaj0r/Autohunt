import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Cars.scss'

import { IoIosArrowForward } from "react-icons/io";
import { FaRoad } from "react-icons/fa6";
import { TbEngine, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill, BsCalendar2DateFill } from "react-icons/bs";

interface Car {
  id: number;
  brand: string;
  model: string;
  engine: string;
  year: number;
  mileage: number;
  gearbox: string;
  fueltype: string;
  price: number;
  userId: number;
  contactfName: string;
  contactlName: string;
}

const Cars: React.FC = () => {
    const [cars, setCars] = useState<any>([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const carResponse = await axios.get('http://localhost:5000/api/cars', {
          params: { limit: 6 },
        });
  
        const carsData = carResponse.data;
        console.log(carsData)

        const userIds = carsData.map((car: any) => car.userid);
        console.log(userIds);
  
        const userResponse = await axios.get('http://localhost:5000/api/users', {
          params: { userIds: userIds.join(',') },
        });
  
        const usersData = userResponse.data;
  
        const carsWithUserDetails = carsData.map((car: any) => {
          const user = usersData.find((user: any) => user.id === car.userid);
  
          return {
            ...car,
            contactfName: user ? user.contactfName : '',
            contactlName: user ? user.contactlName : '',
          };
        });
        console.log('Cars with user details:', carsWithUserDetails);
  
        setCars(carsWithUserDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      console.log(cars);
    }, [cars]);

    const calculateMonthlyInstallment = (price: number): number => {
      // Assuming a fixed interest rate and loan term
      const interestRate = 0.02; // 2% annual interest rate
      const loanTermMonths = 60; // 3 years loan term (in months)
    
      // Calculate monthly interest rate
      const monthlyInterestRate = interestRate / 12;
    
      // Calculate monthly installment using the formula for fixed monthly payments
      const monthlyInstallment =
        (price * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
    
      // Round the result to two decimal places
      return Math.round(monthlyInstallment * 100) / 100;
    };

    return (
        <section id="cars" className="wrapper">
        <div className="content">
          <h1>All Cars</h1>
          
          {/* Car List */}
          <div className="car-list">
            {cars.map((car: Car) => (
              <div className="car-card" key={car.id}>
                  <img className='icon' src="./Images/car-favicon-nobg.png" alt="" />
                  <div className="car-details">
                    <h2>{car.brand} {car.model}</h2>
                    
                    <div className="car-info">
                        <p><TbEngine/> Engine: {car.engine}</p>
                      </div>

                      <div className="car-info">
                        <p><TbManualGearbox/> Gearbox: {car.gearbox}</p>
                        <p><BsFillFuelPumpFill/> Fueltype: {car.fueltype}</p>
                      </div>

                      <div className="car-info">
                        <p><BsCalendar2DateFill /> Year: {car.year}</p>
                        <p><FaRoad /> Mileage: {car.mileage} km</p>
                      </div>

                </div>
                  <div className="seller">
                    <h3>Seller</h3>
                    <p>{car.contactfName} {car.contactlName}</p>
                  </div>

                  <div className="button-group">
                  <p className='price'>{car.price}$ ({calculateMonthlyInstallment(car.price)}$/kk)</p>
                      <button className="button">More details <IoIosArrowForward/></button>
                  </div>
              </div>
              ))}
          </div>
  
        </div>
      </section>
    )
}

export default Cars;