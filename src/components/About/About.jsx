// About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import "./About.css";

const features = [
  {
    title: "24/7 Service",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    text: "Reliable rides at any time, day or night. We're just one call away!",
  },
  {
    title: "Affordable Pricing",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png",
    text: "Transparent and fair prices. No hidden surprises!",
  },
  {
    title: "Professional Drivers",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    text: "Trained and courteous drivers ensuring your safety.",
  },
];

const About = () => (
  <>
    <Helmet>
      <title>About Us | ChamundaCab</title>
      <meta name="description" content="Smooth, safe and memorable journeys with ChamundaCab service." />
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
          {features.map(({ title, icon, text }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="feature-card"
            >
              <img src={icon} alt={title} className="feature-icon" loading="lazy" />
              <h3 className="feature-title">{title}</h3>
              <p className="feature-text">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    <Footer />
  </>
);

export default About;
