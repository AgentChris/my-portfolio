import React from 'react';
import "./style.css";

const Layout = ({children}) => (
  <div className="container">
    {children}
  </div>
);

export default Layout;