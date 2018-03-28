import React from 'react';
import "./style.css";

const Layout = ({children}) => (
  <div className="container pb-4">
    {children}
  </div>
);

export default Layout;