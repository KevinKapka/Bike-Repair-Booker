import React from 'react'
import { Link } from "react-router-dom";
import './TopBar.scss'

function TopBar() {
    return (
        <div className='TopBar'>
            <ul >
                <li>
                <Link to="/booking">Book Now</Link>
                </li>
                <li>
                <Link to="/services">Services</Link>
                </li >
                <li>
                <Link to="/about">Meet CycleFix</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                <Link  to="/covid19">COVID-19</Link>
                </li>
         </ul>
        </div>
    )
}

export default TopBar
