/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-title">
        <h1>Título de la Página</h1>
      </div>
      <div className="menu-container">
        <button onClick={toggleDropdown} className="dropdown-button">
          Menú
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Cerrar Sesión</li>
              <li>Órdenes</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
