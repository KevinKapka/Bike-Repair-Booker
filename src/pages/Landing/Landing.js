import React, { useEffect } from "react";
import "./Landing.scss";
import logo from '../../svgs/logo.svg'
import { Link } from "react-router-dom";

import TopNav from '../../components/NavBar/TopBar'
import Hamburger from '../../components/NavBar/Hamburger'




function Landing({ setNavColor }) {
  useEffect(()=>{
    setNavColor('#FCFCFC')
  }, [])

  const toTop = ()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleHowToScroll = ()=>{
    document.querySelector('.info-container').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  return (
    <div className="Landing">
      <div className="splash-container">
        <div className='nav'>
          <TopNav />
        </div>
        <div className='splash-logo-container'>
          <img src={logo} alt="site logo. Houston CycleFix" id="splash-logo" />
          <h1>Mobile Bicycle Repair</h1>
        </div>
        <div className='splash-button-container'>
          <Link to='/booking'>
            <button className='landing-btn-1'>Book Now</button>
          </Link>
            <button className='landing-btn-2'
            onClick={handleHowToScroll}
            >How it Works</button>
        </div>
      </div>

        <div className='info-container'>
          <h1>HOW IT WORKS</h1>
          <ol>
            <li>
              <h2>1. BOOK AN APPOINTMENT</h2>
              <p>Whether you need a tune-up or a new-in-box bicycle built, book an appointment and we will work around your busy schedule.</p>
            </li>
            <li>
              <h2>2. REPAIR WITHOUT STRESS</h2>
              <p>A skilled bicycle mechanic will complete the repair on-site at your home or office.</p>
            </li>
            <li>
              <h2>3. GET ROLLING AGAIN</h2>
              <p>You will be ready to roll again in no time! Tell a friend about your quick and convenient CycleFix experience!</p>
            </li>
          </ol>
          <div className='button-container'>
            <Link to='/booking'>
              <button className='landing-btn-1'>Book Now</button>
            </Link>
            <Link to='/contact'>
              <button className='landing-btn-2'>Contact Us</button>
            </Link>
          </div>
          <div className='to-top' onClick={toTop}>
              <p>To-Top</p>
              <div className='arrow-up'></div>
          </div>
        </div>
    </div>
  );
}

export default Landing;
