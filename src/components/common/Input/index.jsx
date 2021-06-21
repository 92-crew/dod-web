import React from 'react';

function Input({ className, type='text', name, value, placeholder, disabled, onChange }) {
  const onChangeHandler = (e) => {
    const { target } = e;
    
    onChange && onChange(target);
  };

  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChangeHandler}
    />
  );
}

export default Input;