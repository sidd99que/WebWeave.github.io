import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { IoIosMail } from "react-icons/io";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Section from './Section';


const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v3r6e4i', 'template_l4h4dol', formRef.current, 'Il-2wNc1mn6Yu6Iay')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.log('Email sending failed:', error.text);
        }
      );

    // Clear the form after submission if needed
    formRef.current.reset();
  };

  return (
    <div>
      <Section id='Contact'> 
           <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4 mt-4 ">
            <h3>Get in Touch</h3>
            <h2 className='text-info'>Contact me</h2>
          </Col>
        </Row>
      <Container>
        <Row className="justify-content-center">
          {/* Contact Information */}
          <Col md={6} className="mb-4">
            {/* Email */}
            <Card className="text-center mb-3 text-white"style={{ borderRadius: '10px', background:'#6593f5'}}>
              <Card.Body>
                <IoIosMail style={{ fontSize: '28px', marginBottom: '8px',  background:'#6593f5' }} />
                <Card.Title>Email</Card.Title>
                <Card.Subtitle className="mb-2 text-white">sidd99que@gmail.com</Card.Subtitle>
                <Card.Link href="mailto:sidd99que@gmail.com" target='_blank' rel="noopener noreferrer" className='text-black'>Send a message</Card.Link>
              </Card.Body>
            </Card>
            {/* Messenger */}
            <Card className="text-center  mb-3 text-white" style={{ borderRadius: '10px' ,  background:'#6593f5' }}>
              <Card.Body>
                <FaFacebookMessenger style={{ fontSize: '28px', marginBottom: '8px' }} />
                <Card.Title>Messenger</Card.Title>
                <Card.Subtitle className="mb-2  text-white">Siddique-bin-umer</Card.Subtitle>
                <Card.Link href="https://www.facebook.com/messages/t/133677482088/" target='_blank' rel="noopener noreferrer" className='text-black'>Send a message</Card.Link>
              </Card.Body>
            </Card>
            {/* WhatsApp */}
            <Card className="text-center mb-3 text-white" style={{ borderRadius: '10px' ,  background:'#6593f5' }}>
              <Card.Body>
                <FaWhatsapp style={{ fontSize: '28px', marginBottom: '8px' }} />
                <Card.Title>WhatsApp</Card.Title>
                <Card.Subtitle className="mb-2 text-white">+923173849653</Card.Subtitle>
                <Card.Link href="https://api.whatsapp.com/send?phone=923173849653" target='_blank' rel="noopener noreferrer" className='text-black'>Send a message</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/* Contact Form */}
          <Col md={6}>
            <Card className=" cards p-4">
              <Card.Body>
                <h5 className="text-center mb-4">Contact Form</h5>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Your Full Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" name="message" rows="4" placeholder="Type your message"></textarea>
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">Send Message</button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </Section>

    </div>
  );
}

export default Contact;
