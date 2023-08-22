/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './HeaderAdmin.css';
import NavBarAdmin from '../navBarAdmin/NavBarAdmin';
import Title from '../Title/Title';

function HeaderAdmin({title}) {

  return (
    <header className="header">
      <NavBarAdmin />
      <div className='title-header'>
      <Title title={title} />
      </div>
    </header>
  );
}


HeaderAdmin.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default HeaderAdmin;