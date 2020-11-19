import React from "react";
import { Link } from "react-router-dom";


// import Calender from "../../components/Calendar";
// import Form from "../../components/Form";
// import { distanceCalculator } from "../../utilities/distanceCalculator";

function Booking() {
  //   useEffect(() => {
  //     distanceCalculator(coordinates, setDistance);
  //   }, [coordinates]);

  return (
    <div>
      <h1>Booking</h1>
      <Link to='/booking/address'>Continue</Link>
      {/* <Form
        input={input}
        setInput={setInput}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <Calender input={input} /> */}
    </div>
  );
}

export default Booking;
