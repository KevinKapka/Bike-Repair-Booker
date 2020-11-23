import React, { useEffect } from 'react';
import './Covid19.scss';
import { Link } from "react-router-dom";

import CornerLogo from '../../components/CornerLogo/CornerLogo';
import TopNav from '../../components/NavBar/TopBar'



function Covid19({ setNavColor }) {
    useEffect(()=>{
        setNavColor('#000812')
    }, [])

    return (
        <div className='Covid19'>
            <CornerLogo />
            <TopNav />

            <div className='page-header'>
                <h1>COVID-10 PRECAUTIONS</h1>
            </div>

            <div className='page-body'>
                <header>Safety is important!</header>
                <p>You wouldn’t ride your bike without wearing a helmet, and we won’t repair your bike without wearing a mask. CycleFix is taking important precautions to protect each client from the spread of COVID-19.</p>
                <p>
                Below are some of the precautions we take before, during, and after each appointment.
                </p>

                <ul>
                    <li><div className='bullet'/>
                    Wears a mask at all times
                    </li>
                    <li><div className='bullet'></div>Temperature checked upon arrival</li>
                    <li><div className='bullet'></div>Wash hands before handling bike</li>
                    <li><div className='bullet'></div>Clean bike after maintenance</li>
                    <li><div className='bullet'></div>Maintain 6 feet of distance at all times</li>
                </ul>

                <p>If you have further concerns or questions, please reach out and we will address them.</p>

                <Link to='/contact'>
                    <button>Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Covid19
