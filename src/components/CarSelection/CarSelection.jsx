import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './CarSelection.css';

const API_VITE = "https://cabservermaster.onrender.com";

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
    <section id="car-selection" className="container my-5">
      <h2 className="text-center mb-4">Select a Car</h2>
      <div className="row">
        {loading ? (
          <div className="dot-spinner-container">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        ) : error ? (
          <p className="text-danger text-center">❌ {error}</p>
        ) : (
          cars.map((car, index) => (
            <motion.div
              key={index}
              className="car-item col-md-4 col-sm-6 col-12 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default CarSelection;
