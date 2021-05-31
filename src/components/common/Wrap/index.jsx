import React from 'react';

function Wrap({ classNames, children }) {
  return (
    <div className={classNames || 'wrap'}>
      {children}
    </div>
  );
}

export default Wrap;