import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-0" > {/* Removed margin top */}
      <div className="container">
        <footer className="text-center text-white bg-primary">
          <div className="container">
            <ul className="">
              <div className="row text-center d-flex justify-content-center">
                <div className="col-md-2 mt-3">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#" className="text-white">Home</a>
                  </h6>
                </div>
                {/* Grid column */}
                <div className="col-md-2 mt-1">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#About" className="text-white">About</a>
                  </h6>
                </div>
                <div className="col-md-2 mt-1">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#Experince" className="text-white">Experince</a>
                  </h6>
                </div>
                <div className="col-md-2 mt-1">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#Projects" className="text-white">Projects</a>
                  </h6>
                </div>
                {/* Grid column */}
                <div className="col-md-2 mt-3">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#Contact" className="text-white">Contact</a>
                  </h6>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row*/}
            </ul>
            <div className="text-center mb-5">
              <a href="/" className="text-white me-4">
                <FaLinkedin />
              </a>
              <a href="/" className="text-white me-4">
                <FaGithub />
              </a>
            </div>
          </div>
          {/* Grid container */}
          {/* Copyright */}
    
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
