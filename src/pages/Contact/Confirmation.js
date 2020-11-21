import React, { useEffect } from 'react'
import './Confirmation.scss'

function Confirmation() {

    useEffect(()=>{
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    }, [])


    return (
        <div className='Confirmation'>
            <div className='page-header'>
                <h1>CONTACT US</h1>   
                <header>We hear you!</header>
                <p>Your message has been sent. We will respond within 24-48 hours. Thank you for reaching out!</p>      
            </div>
        </div>
    )
}

export default Confirmation
