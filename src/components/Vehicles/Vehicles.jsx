import React from 'react'
import CarSelection from  '../CarSelection/CarSelection'
import Footer from '../Footer/Footer'
import { Helmet } from "react-helmet-async";


const Vehicles = () => {
  return (
    <div>
     <Helmet>
  <title> ChamundaCab | Affordable & Reliable Cab Booking Service</title>
  <meta
    name="description"
    content="Book reliable and affordable taxi service from Gujarat to Mumbai. Best cab booking with experienced drivers, one-way and round-trip options, 24/7 customer support."
  />
<meta name="keywords" content="Chamunda Cab, taxi service, reliable cab, one-way taxi, round trip cab, airport transfer, local taxi, hatchback taxi, sedan taxi, SUV taxi, cab booking, taxi near me, hassle-free ride" />

  <link rel="canonical" href="https://www.chamundacab.com/Vehicles" />
</Helmet>

      <CarSelection />  
      <Footer />
    </div>  
  )
}

export default Vehicles
