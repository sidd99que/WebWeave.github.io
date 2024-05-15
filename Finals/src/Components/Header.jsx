import React from 'react';
import Remove from '../assets/Remove.png';
import CTA from './CIA';
import HeaderSocial from './Social';

function Header() {
  return (
    <div className="header-container">
      <div className="container text-center">
        <h2>Hello I'm</h2>
        <h1 className='text-info mt-2'>Siddique</h1>
        <h4 className="text-gray">Front-End Developer</h4>
        <CTA />
        <div className="row justify-content-center align-items-center">
          {/* First column containing the social media buttons */}
          <div className="col-md-4 mb-6 mb-md-0 mt-3">
       
           <HeaderSocial />
    
          

          </div>
          {/* Second column containing the image */}
          <div className="col-md-8 mt-4">
            <div className="Image d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(to bottom,#096B90,#d1e8e8)", width: "22rem", height: "30rem", borderRadius: "12rem 12rem 0 0" }}>
              <img
                src={Remove}
                alt="Remove"
                className="img-fluid"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
