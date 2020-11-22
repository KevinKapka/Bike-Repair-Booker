import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import './Calendar.scss'
import backButton from '../../svgs/backButton.svg';
import Calender from "../../components/Calendar";
import CornerLogo from '../../components/CornerLogo/CornerLogo';


function Calendar({input}) {
    useEffect(()=>{
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    }, [])

    return (
        <div className='BookCalendar'>
          <CornerLogo />
            <div className='page-header'>
              <Calender input={input} />
            </div>
            <div className='page-body'>
              
            </div>
                

        </div>
    )
}

export default Calendar
