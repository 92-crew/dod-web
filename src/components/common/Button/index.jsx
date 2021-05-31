import React from 'react';

function Button({ className, disabled, text, onClick }) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;