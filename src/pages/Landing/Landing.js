import React from "react";
import "./Landing.scss";
import logo from '../../svgs/logo.svg'

function Landing() {
  return (
    <div id="Landing">
      <div className="splash-container">
        <div className="splash-img-container">
          <img src="" alt="splash-img" id="splash-img" />
        </div>  
        <div className='splash-logo-container'>
          <img src={logo} alt="site logo. Houston CycleFix" id="splash-logo" />
          <h1>Mobile Bicycle Repair</h1>
        </div>
        <div className='splash-button-container'>
          <button className='landing-btn-1'>Book Now</button>
          <button className='landing-btn-2'>How it Works</button>
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
              <p>Whether you need a tune-up or a new-in-box bicycle built, book an appointment and we will work around your busy schedule.</p>
            </li>
            <li>
              <h2>3. GET ROLLING AGAIN</h2>
              <p>Whether you need a tune-up or a new-in-box bicycle built, book an appointment and we will work around your busy schedule.</p>
            </li>
          </ol>
          <button className='landing-btn-1'>Book Now</button>
          <button className='landing-btn-2'>Contact Us</button>
        </div>
    </div>
  );
}

export default Landing;
