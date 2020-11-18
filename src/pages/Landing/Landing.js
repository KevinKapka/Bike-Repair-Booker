import React from "react";
import "./Landing.scss";
import logo from '../../svgs/logo.svg'

function Landing() {
  return (
    <div id="Landing">
      <div id="splash">
        <div id="splash-img-container">
          <img src="" alt="splash-img" id="splash-img" />
        </div>
        
        <div className='splash-logo-container'>
          <img src={logo} alt="site logo. Houston CycleFix" id="splash-logo" />
          <h1>Mobile Bicycle Repair</h1>
        </div>
        <div className='splash-button-container'>
          <button id='book-now'>Book Now</button>
          <button id='how-it-works'>How it Works</button>
        </div>
      </div>

    </div>
  );
}

export default Landing;
