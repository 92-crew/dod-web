import React from 'react';

function Checkbox({ className, id, name, checked, onChange }) {

  const onChangeChecked = (e) => {
    const { target } = e;

    onChange && onChange(target);
  };

  return (
    <>
      <input
        className={className}
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={onChangeChecked}
      />
      <label htmlFor={id} />
    </>
  );
}

export default Checkbox;