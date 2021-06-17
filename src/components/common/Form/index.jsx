import React from 'react';

function Form({ className, onSubmit, children }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    onSubmit && onSubmit(e);
  };

  return (
    <form className={className} onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
}

export default Form;