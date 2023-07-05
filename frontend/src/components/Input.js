import React from 'react';

const Input = ({
  type,
  placeholder,
  className,
  error,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full border border-solid border-gray-400 focus:border-gray-400 focus:ring-0 ${className} ${
        error ? 'border-red-400' : 'border-gray-400'
      }`}
    />
  );
};

export default Input;
