// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Services.css"; 
import Footer from '../components/Footer/Footer'
import { Helmet } from "react-helmet-async";


const Services = () => {
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

    <section className="services-section">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="services-container"
      >
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          We offer a wide range of taxi services to meet all your travel needs. 
          Safe rides, luxury vehicles, and professional drivers — all just a booking away.
        </p>

        <div className="services-grid">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="service-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Airport Transfers" className="service-icon" />
            <h3 className="service-title">Airport Transfers</h3>
            <p className="service-text">
              Reliable airport pickup and drop services. Always on time, every time.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="service-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046793.png" alt="City Rides" className="service-icon" />
            <h3 className="service-title">City Rides</h3>
            <p className="service-text">
              Smooth rides within the city. Book anytime, anywhere.
            </p>
          </motion.div>

        

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="service-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972974.png" alt="Outstation Rides" className="service-icon" />
            <h3 className="service-title">Outstation Rides</h3>
            <p className="service-text">
              Travel beyond the city with ease and comfort at affordable rates.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
    <Footer />
    </>
  );
};

export default Services;
