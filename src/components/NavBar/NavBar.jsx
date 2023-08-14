/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavLinks = () => (
  <div className="menu-container">
    <NavLink to="/cerrar-sesion" className="nav-link">Cerrar Sesión</NavLink>
    <NavLink to="/ordenes" className="nav-link">Órdenes</NavLink>
  </div>
);

const NavHeader = () => (
  <div className="header-title">
    <h1>Título de la Página</h1>
  </div>
);

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
      <NavHeader />
      <button onClick={toggleDropdown} className="dropdown-button">
        Menú
      </button>
      {isDropdownOpen && <NavLinks />}
    </nav>
  );
};

export default NavBar;
