import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black  text-white hover:bg-gray-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
