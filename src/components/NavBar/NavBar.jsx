/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavLinks = () => (
  <div className="menu-container">
    <NavLink to="/" className="nav-link">Cerrar Sesión</NavLink>
    <NavLink to="/OrderReady" className="nav-link">Órdenes</NavLink>
  </div>
);

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className='nav'>
      <div className="user-navBar">
        <img src="/img/usuario.png" alt="Logo" className="user-nav" />
      </div>
      <button onClick={toggleDropdown} className="dropdown-button">
      </button>
      </div>
      <div className='navDesplegable'>
      {isDropdownOpen && <NavLinks />}
      </div>
    </nav>
  );
};

export default NavBar;
