import React from 'react'
import logo from '../../svgs/logo-black.svg'
import './CornerLogo.scss'
import { Link } from "react-router-dom";



function CornerLogo() {
    return (
        <div className='CornerLogo'>
            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>
        </div>
    )
}

export default CornerLogo

