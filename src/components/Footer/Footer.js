import React from 'react';
import './Footer.scss';
import logo from '../../svgs/logo.svg';
import facebookIcon from '../../svgs/facebookLogo.svg';
import instagramIcon from '../../svgs/instagramLogo.svg';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-branding'>
                <Link to='/'>
                    <img src={logo} alt="site logo. Houston CycleFix" className='logo' />
                </Link>
                <div className='foot-sub'>
                    <p className='footer-email'>houstoncyclefix@gmail.com</p>
                    <div className='icon-container'>
                        <img src={facebookIcon} alt="facebook icon" className='footer-fb-icon' />
                        <img src={instagramIcon} alt="instagram icon" className='footer-ig-icon' />
                    </div>
                </div>
            </div>

            <div className='footer-nav'>
                <ul>
                    <li>
                        <Link to="/booking">Book Now</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">Meet CycleFix</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/covid19">COVID-19</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer
