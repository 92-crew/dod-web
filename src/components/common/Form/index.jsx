import React from 'react';

function Form({ className, name, onSubmit, children }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    onSubmit && onSubmit(e.target);
  };

  return (
    <form className={className} name={name} onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
}

export default Form;