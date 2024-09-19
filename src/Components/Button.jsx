
// Button.js
import React from 'react';

const Button = ({ label, onClick, className, alt }) => {
  return (
    <button onClick={onClick} className='bg-blue-500 px-5 py-2 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors font-montserrat'>
      {label}
    </button>
  );
};

export default Button;
