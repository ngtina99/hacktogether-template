import React, { useState } from 'react';
import '../styles/Navbar.scss'; // Make sure to include the compiled CSS/SCSS

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">ResponsiveNav</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu ${menuOpen ? 'show' : ''}`}>
        <li><a href="#mainpage">Home</a></li>
        <li><a href="#header">About</a></li>
        <li><a href="#map">Map</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
