import React from 'react'
import { Form, Button } from "react-bootstrap";

import './Contact.scss'

function Contact() {
    return (
        <div className='Contact'>
            <div className='page-header'>
                <h1>CONTACT US</h1>   
                <h2>Still have questions?</h2>
                <p>We have the answers! Get in touch and we will respond within 24-48 hours.</p>      
            </div>
            <div className='page-body'>
                <Form className='contact-form'>
                    <p><span>*</span>Required Field</p>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First name*</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control  />
                </Form.Group>                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email"  />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>How can we help*</Form.Label>
                    <Form.Control as='textarea' rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact
