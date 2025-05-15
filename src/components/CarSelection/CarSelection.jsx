// CarSelection.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CarSelection.css';
import { Helmet } from "react-helmet-async";

import Footer from "../Footer/Footer";

const API_VITE = "https://cabservermaster.onrender.com";
const WHATSAPP_BUSINESS_NUMBER = '+919574713004';

const CarSelection = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCars = async () => {
    try {
      const response = await axios.get(`${API_VITE}/api/vehicles`);
      if (response.data.success) {
        setCars(response.data.vehicles);
      } else {
        setError("Failed to load cars.");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to load cars.");
      setLoading(false);
    }
  };

  const handleBookNow = (car) => {
    // Clear previous form data; only pass selected vehicle
    navigate('/booking', {
      state: {
        vehicleType: car.modelName,
        carType: car.type,
      },
    });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
       <Helmet>
  <title>Gujarat to Mumbai Taxi | Affordable & Reliable Cab Booking Service</title>
  <meta
    name="description"
    content="Book reliable and affordable taxi service from Gujarat to Mumbai. Best cab booking with experienced drivers, one-way and round-trip options, 24/7 customer support."
  />
  <meta
    name="keywords"
    content="Gujarat to Mumbai taxi, taxi booking Gujarat, cab from Gujarat to Mumbai, online cab booking Gujarat, Mumbai taxi service, Gujarat airport taxi, affordable taxi Gujarat, one way taxi Gujarat to Mumbai, best taxi service Gujarat"
  />
  <link rel="canonical" href="https://Chamundacabs.com/gujarat-to-mumbai-taxi" />
</Helmet>

      <section id="car-selection" className="container my-5">
        <h2 className="text-center mb-4">Select a Car</h2>
        <div className="row">
          {loading ? (
            <p>🚗 Car is loading...</p>
          ) : error ? (
            <p className="text-danger">❌ {error}</p>
          ) : (
            cars.map((car, index) => (
              <div key={index} className="car-item col-md-4 col-sm-6 col-12">
                <div className="car-box">
                  <img
                    src={car.imageUrl}
                    alt={car.modelName}
                    className="car-image"
                  />
                  <div className="car-info">
                    <h5>{car.modelName}</h5>
                    <p>Type: {car.type}</p>
                    <p>Seats: {car.capacity}</p>
                    <p>Rate: ₹{car.ratePerKm}/km</p>
                    <p>Base Fare: ₹{car.baseFare}</p>
                    <button className="book-btn" onClick={() => handleBookNow(car)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
     
    </>
  );
};

export default CarSelection;
