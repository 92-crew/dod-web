import React, { useState } from 'react';

function Input({ className, type='text', name, value, placeholder, disabled, onChange }) {
  const [val, setVal] = useState(value || '');
  
  const onChangeHandler = (e) => {
    const { target } = e;
    
    setVal(target.value);
    onChange && onChange(target);
  };

  return (
    <input
      className={className}
      type={type}
      name={name}
      value={val}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChangeHandler}
    />
  );
}

export default Input;