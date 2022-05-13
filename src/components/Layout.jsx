import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={ darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </div>
  );
};

export default Layout;