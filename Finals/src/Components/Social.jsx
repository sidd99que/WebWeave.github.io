import React from 'react';
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";

function HeaderSocial() {
  return (
    <div className='Header_Social'>
      <div className="row justify-content-center">
        <div className="col">
          <a href="https://www.linkedin.com/in/mr-siddique-8939752b6/" target='_blank' className="btn social-btn mb-4"><FaLinkedin className="icon" /></a>
        </div>
        <div className="col">
          <a href="https://github.com/sidd99que/SiddiqueDemo" target='_blank' className="btn social-btn mb-4"><FaGithub className="icon" /></a>
        </div>
        <div className="col">
          <a href="https://www.facebook.com/profile.php?id=100017624049020" target='_blank' className="btn social-btn"><FaFacebookSquare className="icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default HeaderSocial;
