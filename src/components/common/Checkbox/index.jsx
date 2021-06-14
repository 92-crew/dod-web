import React, { useState } from 'react';

function Checkbox({ className, type = 'checkbox', id, checked: isChecked, onChange }) {
  const [checked, setChecked] = useState(isChecked || false);

  const onChangeChecked = (e) => {
    const targetChecked = e.target.checked;

    setChecked(targetChecked);
    onChange(targetChecked);
  };

  return (
    <>
      <input
        className={className}
        type={type}
        id={id}
        checked={checked}
        onChange={onChangeChecked}
      />
      <label htmlFor={id} />
    </>
  );
}

export default Checkbox;