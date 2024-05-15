import React from 'react';

import next from '../assets/next.png';
import { FaAward } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Section from './Section';

function About() {
  return (
    <div>
    
       <Section id='About'>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4 mt-4 ">
            <h2>Get to Know</h2>
            <h2 className='text-info'>About me</h2>
          </Col>
        </Row>
        <Container className="About_conttainer">
          <Row>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div className="About_me bg-primary" style={{ background: "linear-gradient(to right, #71B7D5, #ffffff)" }}>
                <img src={next} alt="about" className="img-fluid " style={{ maxWidth: '80%', height: 'auto' }} />
              </div>
            </Col>
            <Col md={6}>
              <div className="About about  rounded p-2">
                <Row className="about_cards ">
                  <Col md={4} className="mb-4">
                    <Card className="h-100 text-white"style={{ background: " #0066a3" }}>
                      <Card.Body className="d-flex flex-column align-items-center">
                        <FaAward className='About-icons mb-3'/>
                        <Card.Title className="mb-2">Experience</Card.Title>
                        <Card.Text>
                          1 year, 
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4">
                    <Card className="h-100 text-white"style={{ background: " #0066a3" }}>
                      <Card.Body className="d-flex flex-column align-items-center">
                        <FaAward className='About-icons mb-3'/>
                        <Card.Title className="mb-2  text-nowrap">Happy Clients</Card.Title>
                        <Card.Text>10+</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4">
                    <Card className="h-100 text-white"style={{ background: " #0066a3" }}>
                      <Card.Body className="d-flex flex-column align-items-center">
                        <FaAward className='About-icons mb-3'/>
                        <Card.Title className="mb-2">Projects</Card.Title>
                        <Card.Text>20+</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div className="about-text ">
                  <p style={{ fontWeight: 'bold' }}>
                    Welcome to my portfolio! I'm a dedicated React.js developer on a mission to craft immersive and user-centric web applications. With a strong foundation in React.js, along with expertise in modern frontend technologies like Redux, React Router, and styled-components, I'm equipped to tackle complex challenges and deliver exceptional results.
                  </p>
                  <p>
                    What sets me apart is my passion for clean code and modular design. I thrive on turning ideas into elegant, maintainable solutions that exceed expectations. Whether it's building interactive user interfaces or optimizing performance, I'm committed to pushing the boundaries of what's possible with React.js.
                  </p>
                  <p>
                    Let's collaborate and bring your vision to life!
                  </p>
                  <Button href="#Contact" className='btn btn-info text-white mb-2'>Let's Talk</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </Section>

    </div>
  );
}

export default About;
