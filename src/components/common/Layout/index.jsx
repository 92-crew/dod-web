import React from 'react';

function Layout({ children }) {
  return (
    <main className='container'>
      <div className='wrap'>
        {children}
      </div>
    </main>
  );
}

export default Layout;