import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import LoginImage from '../assets/Login.jpg';
import Website from '../assets/Website.png';
import Logic from '../assets/Logic.jpg';
import Section from './Section';

const projects = [
  {
    title: "Login Page for Admin and Users using Api",
    image: LoginImage,
    githubLink: "https://github.com/example/login",
    demoLink: "https://example.com/login-demo"
  },
  {
    title: "Complete Website Using HTML and CSS",
    image: Website,
    githubLink: "https://github.com/example/website",
    demoLink: "https://example.com/website-demo"
  },
  {
    title: " Website Using HTML and CSS and JavaScript",
    image: Logic,
    githubLink: "https://github.com/example/website",
    demoLink: "https://example.com/website-demo"
  }
];

const Projects = () => {
  return (
  
     <Section id='Projects'>   
        <Container>
        <Row className="justify-content-center ">
          <Col xs={12} className="text-center mb-4 mt-4">
            <h3>My Recent Work</h3>
            <h2 className='text-info'>Projects</h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Button variant="outline-primary" className="mr-2 " href={project.githubLink} target='_blank'>GitHub</Button>
                  <Button variant="primary" href={project.demoLink} target='_blank'>Live Demo</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </Section>

  );
}

export default Projects;
