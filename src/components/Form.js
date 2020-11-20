import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import { geolocator } from "../utilities/geolocator";

function BookingForm({ input, setInput, coordinates, setCoordinates }) {
  const [form, setForm] = useState({
    ...input,
  });

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
        <div >
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={form.city} onChange={handleChange} />
        </div>

        <div style={{width:'33%'}}>
          <Form.Label>State</Form.Label>
          <Form.Control
            name="state"
            value={form.state}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{width:'33%', paddingTop:'10px'}}>
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip" value={form.zip} onChange={handleChange} />
      </div>

      <Link to='/booking/calendar'>
        <button type='submit' style={{
              width: '110px',
              height: '50px',
              background: '#E5E5E5',
              borderRadius: '20px',
              marginTop: '10px'
        }}>
          Continue
        </button>
      </Link>
    </Form>
  );
}

export default BookingForm;
