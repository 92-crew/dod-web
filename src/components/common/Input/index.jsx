import React, { useState } from 'react';

function Input({ className, type='text', value, disabled, onChange }) {
  const [val, setVal] = useState(value || '');
  
  const onChangeValue = (e) => {
    const targetValue = e.target.value;
    
    setVal(targetValue);
    onChange(targetValue);
  };

  return (
    <input
      className={className}
      type={type}
      value={val}
      disabled={disabled}
      onChange={onChangeValue}
    />
  );
}

export default Input;