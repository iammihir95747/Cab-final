// Vehicle.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    modelName: '',
    type: '',
    capacity: '',
    ratePerKm: '',
    baseFare: '',
    imageUrl: '',
  });
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const fromBooking = location.state?.fromBooking;
  const previousFormData = location.state?.formData || {};

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/vehicles')
      .then((response) => {
        if (response.data && response.data.vehicles) {
          setVehicles(response.data.vehicles);
        }
      })
      .catch((error) => {
        console.error('Error fetching vehicles:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedVehicle) {
      axios
        .put(`http://localhost:5001/api/vehicles/update/${selectedVehicle._id}`, formData)
        .then((response) => {
          setVehicles(
            vehicles.map((vehicle) =>
              vehicle._id === selectedVehicle._id ? response.data.vehicle : vehicle
            )
          );
          resetForm();
        })
        .catch((error) => {
          console.error('Error updating vehicle:', error);
        });
    } else {
      axios
        .post('http://localhost:5001/api/vehicles/add', formData)
        .then((response) => {
          setVehicles([...vehicles, response.data.vehicle]);
          resetForm();
        })
        .catch((error) => {
          console.error('Error adding vehicle:', error);
        });
    }
  };

  const resetForm = () => {
    setFormData({
      modelName: '',
      type: '',
      capacity: '',
      ratePerKm: '',
      baseFare: '',
      imageUrl: '',
    });
    setSelectedVehicle(null);
  };

  const handleUpdate = (vehicle) => {
    setSelectedVehicle(vehicle);
    setFormData({
      modelName: vehicle.modelName,
      type: vehicle.type,
      capacity: vehicle.capacity,
      ratePerKm: vehicle.ratePerKm,
      baseFare: vehicle.baseFare,
      imageUrl: vehicle.imageUrl,
    });
  };

  const handleDelete = (vehicleId) => {
    axios
      .delete(`http://localhost:5001/api/vehicles/delete/${vehicleId}`)
      .then(() => {
        setVehicles(vehicles.filter((vehicle) => vehicle._id !== vehicleId));
      })
      .catch((error) => {
        console.error('Error deleting vehicle:', error);
      });
  };

  const handleSelectVehicle = (vehicle) => {
    navigate('/booking', {
      state: {
        vehicleType: vehicle.type,
        carType: vehicle.modelName,
        formData: previousFormData,
      },
    });
  };

  return (
    <div>
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


      {!fromBooking && (
        <>
          <h1>Vehicle Management</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Model Name</label>
              <input type="text" name="modelName" value={formData.modelName} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Type</label>
              <input type="text" name="type" value={formData.type} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Capacity</label>
              <input type="number" name="capacity" value={formData.capacity} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Rate per Km</label>
              <input type="number" name="ratePerKm" value={formData.ratePerKm} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Base Fare</label>
              <input type="number" name="baseFare" value={formData.baseFare} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Image URL</label>
              <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} required />
            </div>
            <button type="submit">{selectedVehicle ? 'Update Vehicle' : 'Add Vehicle'}</button>
          </form>
        </>
      )}

      <h2>{fromBooking ? 'Select a Vehicle for Booking' : 'Vehicle List'}</h2>
      <table>
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Type</th>
            <th>Capacity</th>
            <th>Rate per Km</th>
            <th>Base Fare</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No vehicles available.</td>
            </tr>
          ) : (
            vehicles.map((vehicle) => (
              <tr key={vehicle._id}>
                <td>{vehicle.modelName}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.capacity}</td>
                <td>{vehicle.ratePerKm}</td>
                <td>{vehicle.baseFare}</td>
                <td>
                  {fromBooking ? (
                    <button onClick={() => handleSelectVehicle(vehicle)}>Select</button>
                  ) : (
                    <>
                      <button onClick={() => handleUpdate(vehicle)}>Edit</button>
                      <button onClick={() => handleDelete(vehicle._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Vehicle;
