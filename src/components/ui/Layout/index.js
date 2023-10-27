import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main>{children}</main>
    {/* Optionally, you can add a Footer component here */}
  </div>
);

export default Layout;