import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Address.scss'


import backButton from '../../svgs/backButton.svg'
import Form from "../../components/Form";
import { distanceCalculator } from "../../utilities/distanceCalculator";

function Address({coordinates, setCoordinates, distance, setDistance, input, setInput}) {

    // useEffect(() => {
    //   distanceCalculator(coordinates, setDistance);
    // }, [coordinates]);

    useEffect(()=>{
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    }, [])

    return (
        <div className='BookAddress'>

            <div className='page-header'>
                <Link to='/booking'>
                    <img src={backButton} alt='back button'/>
                </Link>
                <h1>{input.plan}</h1>
                <p>Houston CycleFix serves the following area.</p>
                <p>If you are unsure if your address is within our service area, enter your address below. You will be unable to book in the event that your address is outside of the service area.</p>
            </div>

            <div className='page-body'>
                <div className='img-container'>
                </div>

                <div className='form-header'>
                    <h2>Service Location</h2>
                    <p className='default-message'>An address is required to continue booking.
Enter the address at which the maintenance will be completed. </p>
                    {distance > 15? <p className='rejection-message'>We’re sorry! This address is unfortunately outside of our service area.
If you think you are receiving this message in error, please contact us.</p>: null}
                </div>
                <Form
                    className='book-form'
                    input={input}
                    setInput={setInput}
                    coordinates={coordinates}
                    setCoordinates={setCoordinates}
                    distance={distance}
                    setDistance={setDistance}
                />
            </div>
  

        </div>
    )
}

export default Address
