import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";


import { geolocator } from "../utilities/geolocator";
import { distanceCalculator } from "../utilities/distanceCalculator";

function BookingForm({ input, setInput, coordinates, setCoordinates, distance, setDistance }) {
  const [form, setForm] = useState({
    ...input,
  });

  useEffect( ()=>{
      distanceCalculator(coordinates, setDistance)
  }, [coordinates])

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(form);
    geolocator(form, coordinates, setCoordinates);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form
      style={{ width: "100%", margin: "20px auto" }}
      onSubmit={handleSubmit}
    >

      <Form.Group controlId="formGridAddress1">
        <Form.Label style={{paddingTop:'10px'}}>Street address 1</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          name="address1"
          value={form.address1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label style={{paddingTop:'10px'}}>Street address 2</Form.Label>
        <Form.Control
          placeholder="Apartment, studio, or floor"
          name="address2"
          value={form.address2}
          onChange={handleChange}
        />
      </Form.Group>

      <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px'}}>
        <Form.Group controlId='formGridCity'>
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={form.city} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='formGridState' style={{width:'33%'}}>
          <Form.Label>State</Form.Label>
          <Form.Control
            name="state"
            value={form.state}
            onChange={handleChange}
          />
        </Form.Group>
      </div>

      <Form.Group controlId='formGripZip' style={{width:'33%', paddingTop:'10px'}}>
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip" value={form.zip} onChange={handleChange} />
      </Form.Group>
      <button type='submit' style={{
              width: '110px',
              height: '50px',
              background: '#E5E5E5',
              borderRadius: '20px',
              marginTop: '10px'
        }}>
          Continue
      </button>
      {distance <= 15 && distance > 0 ? <Redirect to='/booking/calendar' />: null}
      
      
    </Form>
  );
}

export default BookingForm;
