import React from 'react';

function Button({ className, type, disabled, text, onClick }) {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;