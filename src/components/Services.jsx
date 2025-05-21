import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import Footer from '../components/Footer/Footer';
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Taxi Services in Gujarat - One Way, Airport, Outstation | ChamundaCab</title>
        <meta 
          name="description" 
          content="ChamundaCab offers reliable taxi services in Gujarat including airport transfers, city rides, and outstation trips. Book clean, affordable taxis with professional drivers today." 
        />
        <meta 
          name="keywords" 
          content="taxi services Gujarat, one way cab, airport transfer taxi, outstation cab Gujarat, ChamundaCab taxi" 
        />
        <link rel="canonical" href="https://www.chamundacab.com/services" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Taxi Services in Gujarat",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ChamundaCab",
              "url": "https://www.chamundacab.com"
            },
            "areaServed": {
              "@type": "State",
              "name": "Gujarat"
            },
            "serviceType": ["Airport Transfers", "City Rides", "Outstation Taxi"]
          }
          `}
        </script>
      </Helmet>

      <section className="services-section">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="services-container"
        >
          <h1 className="services-title">Taxi Services in Gujarat</h1>
          <p className="services-description">
            At ChamundaCab, we provide affordable, reliable, and professional taxi services throughout Gujarat. Whether you need a quick ride within the city, a comfortable airport drop, or a long-distance outstation cab, we've got you covered. Our fleet includes hatchbacks, sedans, and SUVs — driven by trained, courteous drivers who value your safety and time.
          </p>

          <h2 className="services-subtitle">Available Services</h2>
          <div className="services-grid">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service-card"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/854/854878.png" alt="Airport Transfers" className="service-icon" />
              <h3 className="service-title">Airport Transfers</h3>
              <p className="service-text">
                Timely and comfortable pickups/drop-offs to major airports in Gujarat, including Ahmedabad, Vadodara, and Surat. Never miss a flight with our punctual taxi service.
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
                Book a city ride for office travel, shopping, appointments or daily commutes. Available in all major cities across Gujarat at affordable rates.
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
                Travel across Gujarat and beyond with our outstation taxi services. Perfect for weekend getaways, business trips, or family visits. Book round trips or one-way rides easily.
              </p>
            </motion.div>
          </div>

          <p className="services-cta">
            Ready to book your ride? <a href="/booking">Book your taxi now</a>  We are here 24/7 to serve you.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
