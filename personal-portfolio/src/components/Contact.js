import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import validator from 'validator'
import ReactGA from "react-ga";
  
export const Contact = () => {

  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [phone, setPhone]=useState('');
  const [subject, setSubject]=useState('');
  const [email, setEmail] = useState(true)
  const [error, setError] = useState(false)
  const [validateEmailData, setValidateEmailData] = useState(false)

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if(firstName.length == 0 || lastName.length == 0
       || subject.length == 0 || phone.length == 0){
        setError(true);

       }
 
    else if(validateEmailData){
    emailjs.sendForm('service_x6w8rip', 'template_l7d0gpe', form.current, 'Tk1OhLPIDoUyNARQf')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent sucessfully!')
          e.target.reset()
      }, 
      (error) => {
          console.log(error.text);
      });}
      
  };
  const validateEmail = (e) => {
    var email = e.target.value
    if(email.length<=0){
      setEmail(false)
    }
    if (validator.isEmail(email)) {
      setError(false)   
      setValidateEmailData(true)
    } else { 
      setError(true)
      setValidateEmailData(false)
    }
  }
  const clickHandler = () =>{
    ReactGA.event({
      category:'Button',
      action:'Click the button from contact form'
    })
  }



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name="user_name" type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
                      {error&&firstName.length<=0?
                      <label>Name cannot be empty</label>: ""}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="lastName" type="text"  placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
                      {error&&lastName.length<=0?<label>Last name cannot be empty</label>: ""}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input onChange={(e) => validateEmail(e)} name="user_email" type="email"  placeholder="Email Address"  />
                      {error&&email?<label>Enter valid Email!</label>: ""}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="phone" type="tel" placeholder="Phone No." onChange={e=>setPhone(e.target.value)}/>
                      {error&&phone.length<=0?<label>Phone number cannot be empty</label>: ""}
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6"  placeholder="Message" onChange={e=>setSubject(e.target.value)} ></textarea>
                      {error&&subject.length<=0?<label>Subject cannot be empty</label>: ""}
                      </Col>
                      <button onClick={clickHandler} type="submit"><span>Send</span></button>
                    
                   
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
