import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Calender from "./components/Calendar";
import Form from "./components/Form";
import { distanceCalculator } from "./utilities/distanceCalculator";

function App() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "TX",
    zip: "",
    option1: "",
    plan: "",
  });
  const [coordinates, setCoordinates] = useState({
    start: {
      lat: 29.760427,
      lng: -95.369804,
    },
    end: {
      lat: 29.760427,
      lng: -95.369804,
    },
  });
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    distanceCalculator(coordinates, setDistance);
  }, [coordinates]);

  console.log("input", input);

  return (
    <div className="App">
      <h1>Bicycle Repair</h1>
      <h2>Distance: {distance}</h2>
      <Form
        input={input}
        setInput={setInput}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <Calender input={input} />
    </div>
  );
}

export default App;
