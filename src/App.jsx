import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Services from "./components/Services";
import Booking from "./components/Booking/Booking";
import Places from "./components/Places/Places";
import Vehicles from "./components/Vehicles/Vehicles";
import Loader from "./Loader/Loader";
import SEO from './Seo'; 

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <SEO /> {/* Add SEO here so it updates on every route */}
      <Navbar />
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/places" element={<Places />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      )}
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
