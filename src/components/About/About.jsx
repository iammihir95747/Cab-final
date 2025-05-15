import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // Import external CSS
import Footer  from "../Footer/Footer";
import { Helmet } from "react-helmet-async";


const About = () => {
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

    <section className="about-section">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="about-container"
      >
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          At <span className="highlight">ChamundaCab service</span>, we believe every journey should be smooth, safe, and memorable.
          With our professional drivers, 24/7 availability, and affordable rates, we redefine your travel experience.
        </p>

        <div className="about-features">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="feature-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="24/7 Service" className="feature-icon" />
            <h3 className="feature-title">24/7 Service</h3>
            <p className="feature-text">
              Reliable rides at any time, day or night. We’re just one call away!
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="feature-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046793.png" alt="Affordable Pricing" className="feature-icon" />
            <h3 className="feature-title">Affordable Pricing</h3>
            <p className="feature-text">
              Transparent and fair prices. No hidden surprises!
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="feature-card"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="Professional Drivers" className="feature-icon" />
            <h3 className="feature-title">Professional Drivers</h3>
            <p className="feature-text">
              Trained and courteous drivers ensuring your safety.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
    <Footer />
    </>
  );
};

export default About;
