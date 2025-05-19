import React from 'react'
import CarSelection from  '../CarSelection/CarSelection'
import Footer from '../Footer/Footer'
import './Vehicles.css';


const Vehicles = () => {
  return (
    <div className='Vehicles-container'>
    
      <CarSelection />  
      <Footer />
    </div>  
  )
}

export default Vehicles
