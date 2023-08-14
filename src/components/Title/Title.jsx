/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import "./title.css"; 

function Title({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired, // "title" debe ser un string y es requerido
};

export default Title;
