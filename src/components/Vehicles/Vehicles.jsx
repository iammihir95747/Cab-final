import React from 'react'
import CarSelection from  '../CarSelection/CarSelection'
import Footer from '../Footer/Footer'
import { Helmet } from "react-helmet";


const Vehicles = () => {
  return (
    <div>
       <Helmet>
        <title>ChamudaCabs | Vehicles</title>
        <meta name="description" content="ChamudaCabs is Gujarat’s trusted taxi booking website. Book safe, affordable cabs online for local and outstation rides anytime." />
        <meta name="keywords" content="ChamudaCabs, taxi booking website, cab booking Gujarat, online taxi service, book taxi online, taxi near me, car rental Gujarat" />
      </Helmet> 
      <CarSelection />  
      <Footer />
    </div>  
  )
}

export default Vehicles
