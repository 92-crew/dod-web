import React from 'react';

function Button({ classNames, disabled, text, onClick }) {
  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;