import React from 'react'
import { Link } from "react-router-dom";


function Address() {
    return (
        <div className='BookAddress'>
            <h1>Booking Address</h1>
          <Link to='/booking/calendar'>Continue</Link>

        </div>
    )
}

export default Address
