import React from 'react';
import './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button className='DeleteButton' onClick={onClick}>Eliminar</button>
  );
};

export default DeleteButton;