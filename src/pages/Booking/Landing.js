import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import './Landing.scss'

import { servicesCopy } from '../Services/servicesData';




function Booking({input, setInput}) {
  const [ clicked, setClicked ] = useState('')

  const handleClick = (name)=>{
    if(name === clicked){
      setClicked('')
    }else{
      setClicked(name)
    }
  }

  const servicesCards = servicesCopy.map(service => {
  if(service.header !== 'ADDITIONAL SERVICES'){
    return(
        
      <Accordion >
        <Card key={service.header} className='serviceCard' style={{borderRadius: '0'}}>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <div className={clicked === service.header ? 'header-container-open': 'header-container-closed'} onClick={()=> handleClick(service.header)}>
              <div className='main'>
                <h1 className='header'>{service.header}</h1>
                <div className='arrow-right'></div>
              </div>
              <p>Details</p>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Text className='service-card-body'>
              <p className='title'>{service.title}</p>
              <p className='body'>{service.discription}</p>
              <div className='button-price'>
                <Link to='/booking/address' onClick={()=> setInput({...input, plan:service.header})}>
                  <button>Book Now</button>
                </Link>
                <h1 className='price'>{service.price}</h1>
              </div>

            </Card.Text>
          </Accordion.Collapse>
        </Card>
      </Accordion>
        


    )
  }else {
    return(
      <Accordion>
      <div key={service.header} className='serviceCard'>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
        <div className={clicked === service.header ? 'header-container-open': 'header-container-closed'} onClick={()=> handleClick(service.header)}>
          <div className='main'>
            <h1 className='header'>{service.header}</h1>
            <div className='arrow-right'></div>
          </div>
          <p>Details</p>
        </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
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
        </Accordion.Collapse>
      </div>
      </Accordion>
    )
  }
})


  return (
    <div className='BookLanding'>

      <div className='page-header'>
        <h1>Book Now</h1>
        <p>Select an appointment type.</p>
      </div>
      
      
      <div className='card-container'>
        {servicesCards}
      </div>

    
    </div>
  );
}

export default Booking;
