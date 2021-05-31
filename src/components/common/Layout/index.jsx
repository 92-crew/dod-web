import React from 'react';

function Layout({ children }) {
  return (
    <main class="container">
      {children}
    </main>
  );
}

export default Layout;