import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import React from 'react';
import Cablogo from './Images/Cablogo.jpg';
import 'font-awesome/css/font-awesome.min.css';


const Navbar = () => {
  const message = "Hello, I want to book a cab for a tour.";
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const role = localStorage.getItem("role");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleRegister = () => {
    navigate("/category");
    setMenuOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/");
  };

  const handleAdminNavigation = () => {
    navigate("/admin");
    setMenuOpen(false);
  };

  const phoneNumber = "919574713004";

  const handleCallNow = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = () => {
    navigate('/Booking');
  };

  return (
    <>
 
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/homepage">
        <img src={Cablogo}/>
        </Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/homepage" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/places" className="nav-link" onClick={() => setMenuOpen(false)}>Places</Link></li>
        <li><Link to="/vehicles" className="nav-link" onClick={() => setMenuOpen(false)}>Vehicles</Link></li>
        <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
        {role === "admin" && (
          <li><Link to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Admin</Link></li>
        )}
        {/* Mobile Only Buttons */}
        <li className="mobile-only">
          <button className="nav-button call-now" onClick={handleCallNow}>📞 Call Now</button>
        </li>
        <li className="mobile-only">
          <button className="nav-button whatsapp" onClick={handleWhatsApp}>
          <i className="fa fa-book"></i> Booknow
          </button>
        </li>
        {isLoggedIn && (
          <li className="mobile-only">
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>

      <div className="nav-right desktop-only">
        {isLoggedIn && (
          <>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
            <a href="/profile">
              <img alt="Profile" src={Profile} className="profilenav" />
            </a>
          </>
        )}
      </div>

      <div className="nav-buttons-right desktop-only">
        <button className="nav-button call-now" onClick={handleCallNow}>📞 Call Now</button>
        <button className="nav-button whatsapp" onClick={handleWhatsApp}>
          <i className="fa fa-book"></i> Booknow
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
