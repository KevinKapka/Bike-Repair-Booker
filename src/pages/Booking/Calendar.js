import React from 'react';
import { Link } from "react-router-dom";

import './Calendar.scss'
import backButton from '../../svgs/backButton.svg';
import Calender from "../../components/Calendar";

function Calendar({input}) {
    return (
        <div className='BookCalendar'>
            <div className='page-header'>
            </div>
                
              <Calender input={input} />
        </div>
    )
}

export default Calendar
