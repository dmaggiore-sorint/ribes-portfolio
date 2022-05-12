import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={ `layout${ darkMode ? ' dark' : ''}` }>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet darkMode={darkMode} />
    </div>
  )
}

export default Layout