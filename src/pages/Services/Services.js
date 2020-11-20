import React from "react";
import './Services.scss';
import { servicesCopy } from './servicesData';
import { Link } from "react-router-dom";


const servicesCards = servicesCopy.map(service => {
  if(service.header !== 'ADDITIONAL SERVICES'){
    return(
      <div key={service.header} className='serviceCard'>
        <div className='header-container'>
          <h1 className='header'>{service.header}</h1>
          <h1 className='price'>{service.price}</h1>
        </div>
        <div className='service-card-body'>
          <p className='title'>{service.title}</p>
          <p className='body'>{service.discription}</p>
          <Link to='/booking/address'>
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    )
  }else {
    return(
      <div key={service.header} className='serviceCard'>
        <div className='header-container'>
          <h1 className='header'>{service.header}</h1>
          <h1 className='price'></h1>
        </div>
        <div className='additional-services'>
          {service.addServices.map(s =>(
            <div className='add-serv-group'>
              <p className='add-serv-name'>{s.name}</p>
              <p className='add-serv-price'>{s.price}</p>
            </div>
          ))}

          <Link to='/booking/address'>
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    )
  }
})

function Services() {

  return (
    <div className='Services'>

      <div className='page-header'>
        <h1>Services</h1>

        <p>Prices may vary based on complexity. Pricing does not include parts or any necessary additional materials.</p>
      </div>

      <div className='card-container'>
        {servicesCards}
      </div>

    </div>
  );
}

export default Services;
