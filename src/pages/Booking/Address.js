import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Form from "../../components/Form";

import { distanceCalculator } from "../../utilities/distanceCalculator";

function Address({coordinates, setCoordinates, setDistance, input, setInput}) {

        useEffect(() => {
      distanceCalculator(coordinates, setDistance);
    }, [coordinates]);

    return (
        <div className='BookAddress'>
            <h1>Booking Address</h1>
          <Link to='/booking/calendar'>Continue</Link>
                <Form
                    input={input}
                    setInput={setInput}
                    coordinates={coordinates}
                    setCoordinates={setCoordinates}
                />

        </div>
    )
}

export default Address
