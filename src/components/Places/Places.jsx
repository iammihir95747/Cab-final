import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './places.css';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet-async";


const WHATSAPP_BUSINESS_NUMBER = '+919574713004';

const famousPlaces = [
  {
    name: 'Dwarka',
    image: 'https://www.daiwikhotels.com/wp-content/uploads/2024/08/Lord-Krishnas-City-1.jpg',
    description: 'A holy city and one of the Char Dham pilgrimage sites.',
  },
  {
    name: 'Somnath Temple',
    image: 'https://www.indiantempletour.com/wp-content/uploads/2018/12/Somnath-Tour-Package.jpg',
    description: 'First among the twelve Jyotirlinga shrines of Shiva.',
  },
  {
    name: 'Sasan Gir',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg',
    description: 'The only home of the Asiatic lions in the wild.',
  },
  {
    name: 'Statue of Unity',
    image: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1317845540_20191031110021_20191031110103.png',
    description: 'The Statue of Unity is the world\'s tallest statue',
  },
  {
    name: 'Mumbai Siddhivinayak temple',
    image: 'https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/08/Siddhivinayak-Temple_600-1280x720-1.jpg?fit=1280%2C720&ssl=1',
    description: 'The Shri Siddhivinayak Ganapati Mandir is a Hindu temple dedicated to Ganesha.',
  },
];

const allPlaces = [
  { name: 'Dwarka', district: 'Devbhoomi Dwarka', type: 'Temple' },
  { name: 'Somnath', district: 'Gir Somnath', type: 'Temple' },
  { name: 'Sasan Gir', district: 'Junagadh', type: 'Wildlife Sanctuary' },
  { name: 'Kutchh Rannotsav', district: 'Kutch', type: 'Festival/Desert' },
];

const galleryImages = [
  'car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg', 'car5.jpg', 'car6.jpg'
];

export default function Places() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Updated handleBookNow function to navigate to the Booking component
  const handleBookNow = (place) => {
    navigate('/booking', { state: { place } }); // Pass place details to Booking page
  };

  return (
    <>
   <Helmet>
  <title>Gujarat to Mumbai Taxi | Affordable & Reliable Cab Booking Service</title>
  <meta
    name="description"
    content="Book reliable and affordable taxi service from Gujarat. Best cab booking with experienced drivers, one-way and round-trip options, 24/7 customer support."
  />
  <meta
    name="keywords"
  content="Chamunda Cab, taxi service, reliable cab, one-way taxi, round trip cab, airport transfer, local taxi, hatchback taxi, sedan taxi, SUV taxi, cab booking, taxi near me, hassle-free ride" 
  
  />


  <link rel="canonical" href="https://www.chamundacab.com/Places" />
</Helmet>

      <div className="tourism-container">
        <h2 className="section-title">Some Of The Famous Travelling Places</h2>

        <div className="places-grid">
          {famousPlaces.map((place, i) => (
            <div key={i} className="place-card">
              <img src={place.image} alt={place.name} className="place-image" />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <button className="whatsapp-btn" onClick={() => handleBookNow(place)}>
                📲 Book Now
              </button>
            </div>
          ))}
        </div>

        <h2 className="section-title">All Tourist Places in Gujarat</h2>
        <div className="table-container">
          <table className="places-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>District</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {allPlaces.map((place, i) => (
                <tr key={i}>
                  <td>{place.name}</td>
                  <td>{place.district}</td>
                  <td>{place.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
