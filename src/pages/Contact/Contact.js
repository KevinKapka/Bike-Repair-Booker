import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import emailjs from 'emailjs-com'

import './Contact.scss'

function Contact() {
    const [ isSent, setIsSent ] = useState(false)

    useEffect(()=>{
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    }, [])

    function sendEmail(e){
        e.preventDefault();
        console.log('e.target', e.target)
        emailjs.sendForm('service_5qhb5bm', 'template_g3rbt0j', e.target, 'user_1tTUVlfVHJ0QgAOqETSmf')
        .then((result) => {
            console.log(result.text);
            setIsSent(true)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setIsSent(false)
    }

    if(isSent){
        return(<Redirect to='/contact/confirm' />)
    }

    return (
        <div className='Contact'>
            <div className='page-header'>
                <h1>CONTACT US</h1>   
                <h2>Still have questions?</h2>
                <p>We have the answers! Get in touch and we will respond within 24-48 hours.</p>      
            </div>
            <div className='page-body'>
                <Form className='contact-form' onSubmit={sendEmail}>
                    <p><span>*</span>Required Field</p>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First name*</Form.Label>
                        <Form.Control name='firstName'/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name='lastName' />
                    </Form.Group>                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control type="email"  name='email'/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name='phone' />
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>How can we help*</Form.Label>
                        <Form.Control as='textarea' rows={4} name='message'/>
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
