import React from 'react'
import { Link } from "react-router-dom";
import './TopBar.scss'

function TopBar() {
    return (
        <div className='TopBar'>
            <ul >
                <li>
                <Link to="/booking"><p>Book Now</p></Link>
                </li>
                <li>
                <Link to="/services"><p>Services</p></Link>
                </li >
                <li>
                <Link to="/about"><p>Meet CycleFix</p></Link>
                </li>
                <li>
                <Link to="/contact"><p>Contact Us</p></Link>
                </li>
                <li>
                <Link  to="/covid19"><p>COVID-19</p></Link>
                </li>
         </ul>
        </div>
    )
}

export default TopBar
