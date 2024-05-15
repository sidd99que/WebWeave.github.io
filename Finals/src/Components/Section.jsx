// Section.js
import React from 'react';

function Section({ id, children }) {
  return (
    <div id={id}>
      {children}
    </div>
  );
}

export default Section;
