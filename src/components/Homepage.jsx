import React from 'react';
import Footer from './Footer/Footer';
import CarSelection from './CarSelection/CarSelection';
import './Home.css';
import { Helmet } from "react-helmet-async";


const Homepage = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      <section id="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
            Most Trusted Cab booking Service.</h1>
            <p>
              Experience the best cab service in the city – safe, reliable, and always on time.
              Let us drive you to your destination in style.
            </p>
            <button className="btn-book" onClick={scrollToBooking}>
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>Airport Transfers</h3>
            <p>Timely and reliable rides to the airport ensuring you never miss a flight.</p>
          </div>
          <div className="service-item">
            <h3>Local Rides</h3>
            <p>Efficient and budget-friendly rides for your daily commute and errands.</p>
          </div>
          <div className="service-item">
            <h3>Outstation Trips</h3>
            <p>
              Comfortable, long-distance journeys with the highest standards of safety and convenience.
            </p>
          </div>
        </div>
      </section>

      <section id="info">
        <h2>Why Choose Our Cab Service?</h2>
        <p>
          Our fleet of modern vehicles, along with our professional and courteous drivers, guarantees a smooth
          and secure ride every time. Whether you're heading to an important meeting or exploring the city on a
          weekend, our service is tailored to meet your needs. Enjoy state-of-the-art booking options and
          excellent customer support that puts you first.
        </p>
      </section>

      <section id="booking">
        <h2>Book Your Ride Today </h2>
        <hr className='bookridehr' />
        <CarSelection />
      </section>

      <Footer />  
    </>
  );
};

export default Homepage;
