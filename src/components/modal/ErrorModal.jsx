/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="error-modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

ErrorModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorModal;

