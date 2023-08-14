/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import NavBar from './NavBar';
import Logo from './Logo'; 
import Title from './Title'; 

function Header({ title }) {
  return (
    <header className="header">
      <NavBar />
      <Logo /> 
      <Title title={title} />
    </header>
  );
}

// Define las expectativas de la prop 'title'
Header.propTypes = {
  title: PropTypes.string.isRequired, // Espera una prop de tipo string y es requerida
};

export default Header;

