import React from 'react'
import logo from '../../svgs/logo-black.svg'
import './CornerLogo.scss'


function CornerLogo() {
    return (
        <div className='CornerLogo'>
            <img src={logo} alt='logo' />
        </div>
    )
}

export default CornerLogo

