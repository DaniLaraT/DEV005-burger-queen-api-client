/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';

function Header() {
  return (
    <header className="header">
      <NavBar />
      <div className='title-header'>
      <Title title={'ASDFHGDJHKJLDSF'} />
      </div>
    </header>
  );
}

// Define las expectativas de la prop 'title'
Header.propTypes = {
  title: PropTypes.string.isRequired, // Espera una prop de tipo string y es requerida
};

export default Header;

