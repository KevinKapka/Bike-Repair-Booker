import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

import { geolocator } from "./Geolocator";

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
      style={{ width: "500px", margin: "20px auto" }}
      onSubmit={handleSubmit}
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            placeholder="First Last"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type=""
          placeholder="(000) 000-0000"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          name="address1"
          value={form.address1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          placeholder="Apartment, studio, or floor"
          name="address2"
          value={form.address2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={form.city} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control
            name="state"
            value={form.state}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="zip" value={form.zip} onChange={handleChange} />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formPlanSelection">
        <Form.Control
          as="select"
          size="lg"
          defaultValue="Choose Your Plan"
          name="plan"
          value={form.plan}
          onChange={handleChange}
        >
          <option>Choose Your Plan</option>
          <option>Basic Plan</option>
          <option>Medium Plan</option>
          <option>Elete Plan</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BookingForm;
