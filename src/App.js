import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Calender from "./components/Calendar";
import Map from "./components/Map";
import Form from "./components/Form";

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

  console.log("input", input);

  return (
    <div className="App">
      <h1>Bicycle Repair</h1>
      <Form input={input} setInput={setInput} />
      <Map />
      <Calender input={input} />
    </div>
  );
}

export default App;
