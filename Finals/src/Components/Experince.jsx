import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiBadgeCheck } from 'react-icons/hi';
 
import { FaHtml5, FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoWordpress } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { FaPhp, FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import Section from './Section';

function Experince() {
  return (
    <div>
      <Section id='Experince'>   
           <Container>
          <Row className="justify-content-center">
            <Col xs={12}  className="text-center  mt-4">
              <h3>What Skills I Have</h3>
              <h2 className='text-info'>My Experience</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={7} className="text-center " style={{ backgroundColor: '#1D65A6'  }}>
              <div className='text-white mt-3'>
                <h3>Frontend Development</h3>
                <Row className="justify-content-center">
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center mb-3">
                      <h4><FaHtml5 /> HTML <HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center">
                      <h4><TbBrandJavascript /> Css <HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="mb-3">
                    <article className="experince text-center ">
                      <h4><IoLogoCss3/>JavaScript<HiBadgeCheck/></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                 
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center mb-3">
                      <h4><FaBootstrap /> Bootstrap<HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center">
                      <h4><TbBrandTailwind />Tailwind <HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center">
                      <h4><RiReactjsFill /> React.js <HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center">
                      <h4><IoLogoWordpress/>Wordpress<HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="mb-4">
                    <article className="experince text-center">
                      <h4><SiCanva /> Canva <HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  <Col xs={6} md={6} lg={4} className="">
                    <article className="experince text-center">
                      <h4><FaSquareGithub /> Github <HiBadgeCheck /></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={5} className="text-center" style={{ backgroundColor: '#ADD6E8' }}>
              <div className='text-dark mt-3'>
                <h3>Backend Development</h3>
                <h4>(In Progress)</h4>
                <Row className="justify-content-center">
                  <Col xs={8} md={8} lg={6} className="mb-4">
                    <article className="experince text-center">
                      <h4><FaPhp /> PHP<HiBadgeCheck /></h4>
                      <small className="">Intermediate</small>
                    </article>
                  </Col>
                  <Col xs={8} md={8} lg={6} className="mb-4">
                    <article className="experince text-center">
                   <h4><GrMysql />MYSQL<HiBadgeCheck/></h4>
                      <small className="">Intermediate</small>
                    </article>
                  </Col>
                  </Row>
                  <Row  className="justify-content-center">
                  <Col xs={8} md={8} lg={6} className="mb-4">
                    <article className="experince text-center">
                      <h4><FaLaravel/>Laravel<HiBadgeCheck /></h4>
                      <small className="">Intermediate</small>
                    </article>
                  </Col>
                  <Col xs={8} md={8} lg={6} className="mb-4">
                    <article className="experince text-center">
                      <h4><IoLogoWordpress/>Wordpress      <  HiBadgeCheck/></h4>
                      <small className="">experienced</small>
                    </article>
                  </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
        </Section>

    </div>
  );
}

export default Experince;
