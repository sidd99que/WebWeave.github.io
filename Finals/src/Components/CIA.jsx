import React from 'react';
import Cv from '..//assets/Cv.jpg';
import Web from '..//assets/Web.pdf'

function CTA() {
  return (
    <div>
      <div className="CTA text-center">
        <a href="#Contact" className='btn btn-light  text-black outline-primary' > Let's talk</a> {/* Add margin-right (mr-2) to the "Let's talk" button */}
        <a href={Web} download className='btn btn-primary'> Download Cv</a>
      </div>
    </div>
  );
}

export default CTA;
