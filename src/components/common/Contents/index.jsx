import React from 'react';

function Contents({ className, id, children }) {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
}

export default Contents;