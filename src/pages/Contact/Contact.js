import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import emailjs from 'emailjs-com';

import './Contact.scss'
import CornerLogo from '../../components/CornerLogo/CornerLogo';
import TopNav from '../../components/NavBar/TopBar'

const SERVICE_KEY = process.env.REACT_APP_EMAIL_SERVICE_KEY;
const TEMPLATE_KEY = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;
const USER_KEY = process.env.REACT_APP_EMAIL_USER_KEY;


function Contact({ setNavColor }) {
    const [ isSent, setIsSent ] = useState(false)

    useEffect(()=>{
        window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

        setNavColor('#000812')
    }, [])

    function sendEmail(e){
        e.preventDefault();
        console.log('e.target', e.target)
        emailjs.sendForm( SERVICE_KEY , TEMPLATE_KEY, e.target, USER_KEY)
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
            <CornerLogo />
            <TopNav />

            <div className='page-header'>
                <h1>CONTACT US</h1>   
                <p className='header'>Still have questions?</p>
                <p>We have the answers! Get in touch and we will respond within 24-48 hours.</p>      
            </div>
            <div className='page-body'>
                <Form className='contact-form' onSubmit={sendEmail}>
                    <p><span>*</span>Required Field</p>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label><p>First name<span>*</span></p></Form.Label>
                        <Form.Control name='firstName'/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label><p>Last name</p></Form.Label>
                        <Form.Control name='lastName' />
                    </Form.Group>                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><p>Email<span>*</span></p></Form.Label>
                        <Form.Control type="email"  name='email'/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label><p>Phone</p></Form.Label>
                        <Form.Control name='phone' />
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label><p>How can we help?<span>*</span></p></Form.Label>
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
