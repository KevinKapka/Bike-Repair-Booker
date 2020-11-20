import React from 'react'
import './Covid19.scss'

function Covid19() {
    return (
        <div className='Covid19'>
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
                    <li>Wears a mask at all times</li>
                    <li>Temperature checked upon arrival</li>
                    <li>Wash hands before handling bike</li>
                    <li>Clean bike after maintenance</li>
                    <li>Maintain 6 feet of distance at all times</li>
                </ul>

                <p>If you have further concerns or questions, please reach out and we will address them.</p>

                <button>Contact Us</button>
            </div>
        </div>
    )
}

export default Covid19
