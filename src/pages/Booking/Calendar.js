import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import './Calendar.scss'
import backButton from '../../svgs/backButton.svg';
import Calender from "../../components/Calendar";
import CornerLogo from '../../components/CornerLogo/CornerLogo';
import TopNav from '../../components/NavBar/TopBar'


function Calendar({input, setNavColor }) {
    useEffect(()=>{
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
      setNavColor('#000812')
    }, [])

    return (
        <div className='BookCalendar'>
          <CornerLogo />
          <TopNav />
            <div className='page-header'>
              <Calender input={input} />
            </div>
            <div className='page-body'>
              
            </div>
                

        </div>
    )
}

export default Calendar
