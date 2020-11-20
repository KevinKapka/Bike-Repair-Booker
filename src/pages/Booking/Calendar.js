import React from 'react'

import Calender from "../../components/Calendar";

function Calendar({input}) {
    return (
        <div className='BookCalendar'>
            <h1>Booking Calendar</h1>
              <Calender input={input} />
        </div>
    )
}

export default Calendar
