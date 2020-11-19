import React from "react";
import './Services.scss';
import { servicesCopy } from './servicesData';

const servicesCards = servicesCopy.map(service => {
  if(service.header !== 'ADDITIONAL SERVICES'){
    return(
      <div key={service.header} className='serviceCard'>
        <div className='header-container'>
          <h1 className='header'>{service.header}</h1>
          <h1 className='price'>{service.price}</h1>
        </div>
        <h2 className='title'>{service.title}</h2>
        <p className='body'>{service.discription}</p>
        <button>Book Now</button>
      </div>
    )
  }else {
    return(
      <div key={service.header} className='serviceCard'>
        <div className='header-container'>
          <h1 className='header'>{service.header}</h1>
        </div>
        <button>Book Now</button>
      </div>
    )
  }

})

function Services() {

  return (
    <div className='Services'>
      <h1>Services</h1>
      <p>Prices may vary based on complexity. Pricing does not include parts or any necessary additional materials.</p>
      <div className='card-container'>
        {servicesCards}
      </div>


    </div>
  );
}

export default Services;
