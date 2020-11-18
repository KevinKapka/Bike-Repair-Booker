import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [isResume, setIsResume] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    setIsOpen(!isOpen);
    setIsClose(!isClose);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
      setIsClose(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleResumeClick = () => {
    console.log("resume clicked");
    setIsResume(!isResume);
  };

  const navBar = (
    <div className="navContainer">
      <ul className={isOpen ? "navBar" : "hideNavBar"}>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
      </ul>
      {isClose ? <div className="close" onClick={handleNavClick} /> : null}
    </div>
  );

  const hamburger = (
    <div className="hamburger" onClick={handleNavClick}>
      <span />
      <span />
      <span />
    </div>
  );

  const times = (
    <div className="times" onClick={handleNavClick}>
      <span className="crossTop" />
      <span className="crossMid" />
      <span className="crossBottom" />
    </div>
  );

  return (
    <nav>
      {isOpen ? times : hamburger}
      {navBar}
    </nav>
  );
}

export default Nav;
