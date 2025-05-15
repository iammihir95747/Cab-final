import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import Homepage from './components/Homepage';
import Services from './components/Services';
import Booking from './components/Booking/Booking';
import Places from './components/Places/Places'
import Vehicles from './components/Vehicles/Vehicles';

function Layout() {
    return (
        <>
               <HelmetProvider>
            <Navbar /> {/* Always show Home now */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/Places" element={<Places />} />
                <Route path="/Vehicles" element={<Vehicles />} />               
            </Routes>
            </HelmetProvider>
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